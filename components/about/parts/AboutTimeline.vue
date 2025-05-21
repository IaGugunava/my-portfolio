<script setup lang="ts">
import Timeline from "primevue/timeline";

const timelineData = ref([
  {
    id: 1,
    title: "2022 — Starting Work",
    teaser:
      "Joined a company as an intern Frontend Developer. Learned to work in agile teams and write scalable code. Started using Vue 3 (almost mastered it is a day, it was a running gag for a while)",
  },
  {
    id: 2,
    title: "2023 — Diving Deep",
    teaser:
      "Worked on a large-scale dashboard for internal tools. Picked up Nuxt 3 and fell in love with SSR & performance tuning. Mentored interns and did UI/UX reviews with designers.",
  },
  {
    id: 3,
    title: "2024 — New Challenges",
    teaser:
      "Started taking interest in Backend too. Tried out several tools, like spring boot, asp.net, but finally found the one that`s right for me. It was still javascript after all. So I started learning Node.js and Express.js.",
  },
  {
    id: 4,
    title: "2025 — What’s Next?",
    teaser:
      "Created something like this. Seeking opportunities to collaborate, teach, and create. It was still javascript after all. You tell me.",
  },
]);
</script>

<template>
  <div class="bg-white py-20">
    <div class="container-fluid">
      <h2 class="text-dark text-4xl font-bold mb-10 w-full flex justify-center">
        My Web Timeline
      </h2>

      <Timeline :value="timelineData" align="alternate">
        <template #marker="slotProps">
          <span
            class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm bg-primary"
          >
            <span>{{ slotProps.item.id }}</span>
          </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-4">
            <template #title>
              <span class="text-2xl text-primary-dark font-bold">
                {{ slotProps.item.title }}
              </span>
            </template>
            <template #subtitle>
              <span class="text-lg text-dark">
                {{ slotProps.item.teaser }}
              </span>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<style>
.p-card-body {
  padding: 30px !important;
}

.p-timeline-event-connector {
  width: 2px !important;
  background-color: #6a0572 !important;
}

.p-timeline-vertical.p-timeline-alternate
  .p-timeline-event:nth-child(odd)
  .p-timeline-event-content
  .p-card-body {
  margin-left: 30px;
}

.p-timeline-vertical.p-timeline-alternate
  .p-timeline-event:nth-child(even)
  .p-timeline-event-content
  .p-card-body {
  margin-right: 30px;
}

@media (max-width: 768px) {
  .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row !important;
  }

  .p-timeline-event-opposite {
    flex: 0 !important;
  }

  .p-timeline-vertical.p-timeline-alternate
    .p-timeline-event:nth-child(even)
    .p-timeline-event-content {
    text-align: left !important;
  }

  .p-timeline-vertical.p-timeline-alternate
    .p-timeline-event:nth-child(odd)
    .p-timeline-event-content
    .p-card-body {
    margin-left: 0;
  }

  .p-timeline-vertical.p-timeline-alternate
    .p-timeline-event:nth-child(even)
    .p-timeline-event-content
    .p-card-body {
    margin-right: 0;
  }
}
</style>
