<template>
  <div class="home">
    <HelloWorld msg="asdf asdf"></HelloWorld>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
