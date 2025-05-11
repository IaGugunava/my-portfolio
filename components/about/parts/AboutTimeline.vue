<script setup lang="ts">
const timeline = [
  {
    title: "2021 — The Beginning",
    teaser:
      "Discovered Web Development in a university course with the same name, Built my first website (It was for my finals and it was a disaster :) ). Realized I love making things that live in the browser.",
  },
];
</script>

<template>
  <div class="bg-white py-20">
    <div class="container-fluid">
      <h2 class="text-dark text-4xl font-bold mb-4 w-full flex justify-center">
        My Web Timeline
      </h2>

      <div class="panels">
        <div class="pannels-wrapper"></div>
        <div class="panel h-screen overflow-hidden relative" ref="panel">
          <div ref="scrollContainer" class="flex flex-col h-full w-max">
            <h3 class="text-dark text-2xl font-semibold my-2">
              2021 — The Beginning
            </h3>

            <div>
              <ul>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Discovered Web Development in a university course with the
                  same name
                </li>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Built my first website (It was for my finals and it was a
                  disaster :) ).
                </li>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Realized I love making things that live in the browser.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="panel h-screen overflow-hidden relative" ref="panel">
          <div ref="scrollContainer" class="flex flex-col h-full w-max">
            <h3 class="text-dark text-2xl font-semibold my-2">
              2022 — Starting Work
            </h3>

            <div>
              <ul>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Joined a company as an intern Frontend Developer.
                </li>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Learned to work in agile teams and write scalable code.
                </li>
                <li
                  class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
                >
                  Started using Vue 3 (almost mastered it is a day, it was a
                  running gag for a while)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="panel h-screen overflow-hidden relative" ref="panel">
        <div ref="scrollContainer" class="flex flex-col h-full w-max">
          <h3 class="text-dark text-2xl font-semibold my-2">
            2023 — Diving Deep
          </h3>

          <div>
            <ul>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Worked on a large-scale dashboard for internal tools.
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Picked up Nuxt 3 and fell in love with SSR & performance tuning.
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Mentored interns and did UI/UX reviews with designers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="panel h-screen overflow-hidden relative" ref="panel">
        <div ref="scrollContainer" class="flex flex-col h-full w-max">
          <h3 class="text-dark text-2xl font-semibold my-2">
            2024 — New Challenges
          </h3>

          <div>
            <ul>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Started taking interest in Backend too.
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Tried out several tools, like spring boot, asp.net, but finally
                found the one that's right for me.
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                It was still javascript after all. So I started learning Node.js
                and Express.js.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="panel h-screen overflow-hidden relative" ref="panel">
        <div ref="scrollContainer" class="flex flex-col h-full w-max">
          <h3 class="text-dark text-2xl font-semibold my-2">
            2025 — What’s Next?
          </h3>

          <div>
            <ul>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Created something like this
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                Seeking opportunities to collaborate, teach, and create.
              </li>
              <li
                class="relative text-xl before:absolute before:-left-6 before:pr-2 flex items-center w-fit before:w-3 before:h-3 before:rounded-lg before:bg-primary"
              >
                You tell me.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
