<template>
  <div class="relative overflow-clip h-full">
    <div class="flex items-center justify-between p-2 border-b border-white">
      <Clock />
      <p class="text-5xl">Plateau 2</p>
      <p class="text-3xl">Musi'Quiz</p>
    </div>

    <div
      class="p-4 h-full flex flex-col items-left justify-center gap-4 motion-preset-blink"
    >
      <div class="p-4 rounded-md border border-white w-fit space-y-4">
        <h2 class="text-7xl">Session en cours : {{ events[0]?.name }}</h2>
        <p class="text-xl">
          Début : {{ events[0]?.start }} - Fin : {{ events[0]?.stop }}
        </p>
        <p class="text-xl">Temps restant : {{ events[0]?.remainingTime }}</p>
      </div>

      <div class="p-4 rounded-md border border-white w-fit space-y-2">
        <h2 class="text-4xl">Session suivante : {{ events[1]?.name }}</h2>
        <p class="text-xl">
          Début : {{ events[1]?.start }} - Fin : {{ events[1]?.stop }}
        </p>
      </div>
    </div>

    <div class="absolute -top-10 -right-12 scale-110">
      <img class="max-h-screen" :src="Line" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Clock from "../src/components/Clock.vue";
import Line from "../src/assets/Line.png";
import { onMounted, ref } from "vue";
import { useEventService } from "./composables/eventService";
import type { Event } from "./models/events.dto";

const events = ref<Array<Event>>([]);

function refreshData() {
  useEventService()
    .getEvents()
    .then((data) => {
      events.value = data;
    });
}

onMounted(() => {
  setInterval(refreshData, 30000);
  refreshData();
});
</script>
