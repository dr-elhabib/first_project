<template>
  <div>
    <section
        @click="$emit('toggle-login-model')"
        class="cursor-move z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"

    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Login</h1>
            <p class="my-3 text-center">Or</p>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label>Email or Username</label>
                <input
                    ref="emailRef"
                    v-model="email"
                    class="rounded shadow p-2 w-full"
                    placeholder="Enter your email or username"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                    v-model="password"
                    class="rounded shadow p-2 w-full"
                    type="password"
                    placeholder="enter your password"
                />
              </div>
              <div class="my-4">
                <button
                    type="submit"
                    class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'

export default {
  name: "LoginModel",
  data() {
    return {
      email: '',
      password: '',
      isLoading: false

    }

  },
  methods: {
    submit() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
        this.$emit('toggle-login-model');
      }).catch(function (error) {
        console.log(error);
      });

    }
  }
}
</script>

<style scoped>

</style>
