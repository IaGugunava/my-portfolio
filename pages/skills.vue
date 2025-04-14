<script setup lang="ts">
import * as d3 from "d3";

const supabaseClient = useSupabaseClient();

const skills = ref();
const radius = 24;
const diameter = radius * 2;

const svgWidth = ref(window?.innerWidth - 300);
const svgHeight = ref(window?.innerHeight - 200);

const laidOutSkills: Ref<any[]> = ref([]);
const lines: Ref<any[]> = ref([]);
const nodeRefs: Ref<any[]> = ref([]);

let simulation: any;

const updateLines = () => {
  const nodes = laidOutSkills.value;
  const updated = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    if (a?.x != null && b?.x != null) {
      updated.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  }

  lines.value = updated;
};

const runSimulation = async (skill: any, width: number, height: number) => {
  const nodes = skill.map((item: any) => ({
    ...item,
    x: Math.random() * (width - 300),
    y: Math.random() * (height - 200),
  }));

  simulation = d3
    .forceSimulation(nodes)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("charge", d3.forceManyBody().strength(-20))
    .force("collision", d3.forceCollide(radius + 2))
    .stop();

  for (let i = 0; i < 300; i++) simulation.tick();

  laidOutSkills.value = [...nodes];

  await nextTick();

  d3.selectAll(nodeRefs.value).data(laidOutSkills.value).call(
    d3
      .drag()
      .on("start", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d: any) => {
        d.fx = event.x;
        d.fy = event.y;
        updateLines();
      })
      .on("end", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })
  );

  const newLines = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    if (a?.x != null && b?.x != null) {
      newLines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
  }
  lines.value = newLines;
};

const fetchSkills = async () => {
  const { data, error } = await supabaseClient.from("technologies").select("*");

  if (!error) {
    skills.value = data;
  } else {
    console.log(error);
  }
};

const handleResize = () => {
  svgWidth.value = window?.innerWidth - 300;
  svgHeight.value = window?.innerHeight - 200;
  if (skills.value?.length) {
    runSimulation(skills.value, svgWidth.value, svgHeight.value);
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watch(
  () => skills.value,
  (n) => {
    if (n?.length) {
      runSimulation(n, svgWidth.value, svgHeight.value);
    }
  },
  { immediate: true }
);

fetchSkills();
</script>

<template>
  <div
    class="pt-40 mx-auto pb-20 relative h-[100dvh] flex items-center justify-center"
  >
    <!-- <div class="container-fluid flex flex-col gap-8 justify-center items-center">
            <div v-for="item in skills" :key="item?.id">
                <Pin :data="item"/>
            </div>
        </div> -->

    <svg :width="svgWidth" :height="svgHeight" class="absolute top-0 left-0">
      <!-- Lines -->
      <line
        v-for="(line, i) in lines"
        :key="'line-' + i"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        stroke="#9c999e"
        stroke-width="1"
      />

      <!-- Pins -->
      <foreignObject
        v-for="(item, index) in laidOutSkills"
        class="pointer-events-auto"
        :key="item.id"
        :x="item.x - radius"
        :y="item.y - radius"
        :width="diameter"
        :height="diameter"
        :ref="(el) => (nodeRefs[index] = el)"
      >
        <Pin :data="item" />
      </foreignObject>
    </svg>
  </div>
</template>

<style scoped>
foreignObject {
  pointer-events: all;
}</style>
