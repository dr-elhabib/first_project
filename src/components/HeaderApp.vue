<template>
  <div class="bg-blue-600">
    <ul class="text-white font-bold p-2 list-none  inline">
      <router-link class="ml-5 inline" v-for="item in List" :key="item.to" :to="item.to">{{ item.name }}</router-link>
    </ul>
    <button class=" text-white  font-bold p-2 inline " @click="$emit('toggle-login-model')">Login</button>
  </div>
</template>

<script>

export default {
  name: "HeaderApp",
  data() {
    return {
      List: [
        {name: "Home", to: "/"},
        {name: "First Tutorial", to: "/Heroes"},
        {name: "Second Tutorial", to: "/Calendar"},
        {name: "Third Tutorial", to: "/MarkDown"},
        {name: "fourth Tutorial", to: "/Slider"}
      ]
    }

  }

}
</script>

<style scoped>

</style>
