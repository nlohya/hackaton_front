<template>
  <div class="relative overflow-clip h-full">
    <transition name="fade" mode="out-in" class="h-full">
      <div v-if="showVideo" key="video" class="video-container">
        <video class="w-full h-full" autoplay loop muted>
          <source :src="Video" type="video/mp4" />
        </video>
      </div>
      <div v-else key="content" class="content-container">
        <div
          class="flex items-center justify-between p-2 border-b border-white"
        >
          <Clock />
          <p class="text-5xl">Plateau 2</p>
          <p class="text-3xl">Musi'Quiz</p>
        </div>

        <div class="p-4 h-full flex flex-col items-left justify-center gap-4">
          <div
            class="session-box p-4 rounded-md border border-white w-fit space-y-4 animate-glow"
          >
            <h2 class="text-7xl">Session en cours : {{ events[0]?.name }}</h2>
            <p class="text-xl">
              Début : {{ events[0]?.start }} - Fin : {{ events[0]?.stop }}
            </p>
            <p class="text-xl">
              Temps restant : {{ events[0]?.remainingTime }}
            </p>
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
    </transition>
  </div>
</template>

<style scoped>
@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
}

@keyframes border-color {
  0% {
    box-shadow: 0 0 10px red;
    border-color: red;
  }
  25% {
    box-shadow: 0 0 10px orange;
    border-color: orange;
  }
  50% {
    box-shadow: 0 0 10px yellow;
    border-color: yellow;
  }
  75% {
    box-shadow: 0 0 10px orange;
    border-color: orange;
  }
  100% {
    box-shadow: 0 0 10px red;
    border-color: red;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.session-box {
  animation: border-color 2s infinite;
}

.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
}
</style>

<script setup lang="ts">
import Clock from "../src/components/Clock.vue";
import Line from "../src/assets/Line.png";
import { onMounted, ref } from "vue";
import { useEventService } from "./composables/eventService";
import type { Event } from "./models/events.dto";
import Video from "../src/assets/video.mp4";

const events = ref<Array<Event>>([]);
const showVideo = ref(false);

function refreshData() {
  useEventService()
    .getEvents()
    .then((data) => {
      events.value = data;
    });
}

onMounted(() => {
  setInterval(refreshData, 1000);
  refreshData();
  setInterval(() => {
    showVideo.value = true;
    setTimeout(() => {
      showVideo.value = false;
    }, 8000);
  }, 16000);
});
</script>
