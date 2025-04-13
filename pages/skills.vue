<script setup lang="ts">
import * as d3 from "d3";

const supabaseClient = useSupabaseClient();

const skills = ref();
const radius = 24;
const diameter = radius * 2;

const svgWidth = ref(window?.innerWidth - 200);
const svgHeight = ref(window?.innerHeight - 100);

const laidOutSkills: Ref<any[]> = ref([]);
const lines: Ref<any[]> = ref([]);
const nodeRefs: Ref<any[]> = ref([]);

let simulation: any;


const updateLines = () => {
  const nodes = laidOutSkills.value
  const updated = []

  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i]
    const b = nodes[i + 1]
    if (a?.x != null && b?.x != null) {
      updated.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y })
    }
  }

  lines.value = updated
}

// const drag = (simulation: any) => {
  
//   function dragstarted(event: any, d: any) {
//     if (!event.active) simulation.alphaTarget(0.3).restart();
//     d.fx = d.x;
//     d.fy = d.y;
//   }
  
//   function dragged(event: any, d: any) {
//     d.fx = event.x;
//     d.fy = event.y;
//   }
  
//   function dragended(event: any, d: any) {
//     if (!event.active) simulation.alphaTarget(0);
//     d.fx = null;
//     d.fy = null;
//   }
  
//   return d3.drag()
//       .on("start", dragstarted)
//       .on("drag", dragged)
//       .on("end", dragended);
// }

const runSimulation = (skill: any, width: number, height: number) => {
  const nodes = skill.map((item: any) => ({
    ...item,
    x: Math.random() * width,
    y: Math.random() * height,
  }));

  simulation = d3
    .forceSimulation(nodes)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("charge", d3.forceManyBody().strength(5))
    .force("collision", d3.forceCollide(radius + 2))
    .stop();

  for (let i = 0; i < 300; i++) simulation.tick();

  laidOutSkills.value = [...nodes];

  d3.selectAll(nodeRefs.value)
  .call(
    d3.drag().on('start', (event, d: any) => {
        if(!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
    }).on('drag', (event, d: any) => {
        d.fx = event.x
        d.fy = event.y
        updateLines()
    }).on('end', (event, d:any) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })
  )

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
  svgWidth.value = window.innerWidth;
  svgHeight.value = window.innerHeight;
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
  <div class="pt-40 mx-auto pb-20 relative h-[100dvh] flex items-center justify-center">
    <!-- <div class="container-fluid flex flex-col gap-8 justify-center items-center">
            <div v-for="item in skills" :key="item?.id">
                <Pin :data="item"/>
            </div>
        </div> -->

    <svg :width="1820" :height="900" class="">
      <!-- Lines -->
      <line
        v-for="(line, i) in lines"
        :key="'line-' + i"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        stroke="#312f33"
        stroke-width="1"
      />

      <!-- Pins -->
      <foreignObject
        v-for="(item, index) in laidOutSkills"
        :key="item.id"
        :x="item.x - radius"
        :y="item.y - radius"
        :width="diameter"
        :height="diameter"
        :ref="el => nodeRefs[index] = el"
      >
        <Pin :data="item" />
      </foreignObject>
    </svg>
  </div>
</template>

<style scoped></style>
