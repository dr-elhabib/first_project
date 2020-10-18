<template>
  <div class="w-full flex mt-10">
    <div class="m-auto">
      <h1 class="text-2xl font-bold text-center mb-5">First Tutorial : Dynamic Listing Removing and adding</h1>
      <ul class="w-1/2 ml-32">
        <li class="border-b  p-1 flex justify-between " v-for="(hero,index) in Heroes" v-bind:key="hero.name">
          <div class="m-1 font-bold">
            {{ hero.name.toLocaleUpperCase() }}
          </div>
          <button @click="removeElement(index)" class="pr-2  text-xl text-red-600 font-bold">x</button>
        </li>
      </ul>
      <div class="ml-32 mt-12">
        <input class="border-blue-600 border-b-2  text-center font-bold" placeholder="New Hero" v-model="newHero"/>
        <button class="border-blue-600  border p-1 w-12 ml-10 font-bold text-blue-600" @click="addElement">add</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Heroes',
  data() {
    return {
      Heroes: [
        {name: "Ahmed"},
        {name: "Ali"},
        {name: "kahla"},
        {name: "elhabib"},
        {name: "bibo"}
      ],
      newHero: ""
    }

  },
  methods: {
    removeElement(index) {
      this.Heroes = this.Heroes.filter((el, i) => i !== index);
    },
    addElement() {
      this.Heroes.push({name: this.newHero});
      this.newHero = "";
    }

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
