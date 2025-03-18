<template>
  <h1 class="text-4xl bg-gray-700 rounded-md p-3 w-fit">{{ time }}</h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const time = ref<string>("");

function updateTime() {
  var cd = new Date();
  time.value =
    zeroPadding(cd.getHours(), 2) + ":" + zeroPadding(cd.getMinutes(), 2);
}

function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}

onMounted(() => {
  setInterval(updateTime, 1000);
  updateTime();
});
</script>
