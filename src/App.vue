<template>
  <div class="relative overflow-x-clip">
    <div class="flex items-center justify-between p-2 border-b border-white">
      <Clock />
      <p class="text-5xl">Plateau 2</p>
      <p class="text-3xl">Musi'Quiz</p>
    </div>

    <div class="absolute -top-10 -right-12 scale-110">
      <img class="max-h-screen" :src="Line" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Clock from "../src/components/Clock.vue";
import Line from "../src/assets/Line.png";
</script>
