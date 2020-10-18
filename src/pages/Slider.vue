<template>
  <div class="flex w-full relative">
    <div class="absolute w-full" v-for="(slider,index) in sliders" :key="index">
      <transition name="fade">
      <div style="height:400px;" :class="slider" v-if="currentSlider===index">
        <h1 class="font-bold text-4xl text-white  text-center pt-24">Slider {{ slider }}</h1>
      </div>
      </transition>
    </div>

    <div class="w-full" style="height:360px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
            v-for="(slider, index) in sliders"
            :key="slider"
            @click="currentSlider=index"
            :class="currentSlider == index ? 'bg-gray-700' : 'bg-gray-300'"
            class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      sliders: [
        'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400'
      ],
      currentSlider: 0,
      interval: ''
    }
  }, mounted() {
    this.interval = setInterval(() => {
      this.currentSlider = this.currentSlider === 3 ? 0 : ++this.currentSlider;
    }, 1000)
  }, beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
