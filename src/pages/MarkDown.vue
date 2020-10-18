<template>
  <div class="flex flex-wrap w-full">
    <h1 class="text-center  text-4xl my-4  font-bold w-full">MarkDown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border "><textarea class="h-full w-full" :value="text" @input="update"></textarea></article>
      <article class="w-1/2 border bg-gray-100">{{ MarkedText }}</article>
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from "@/utilities/mixins/debounce";

export default {
  name: "MarkDown",
  mixins: [debounce],
  data() {
    return {
      text: ""
    }
  }, computed: {
    MarkedText() {
      return marked(this.text);
    }
  }, methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value
      };
      this.debounce(task, 500);
    }

  }
}
</script>

<style scoped>

</style>
