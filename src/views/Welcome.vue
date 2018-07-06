<template>
  <div class="home" @click="welcomeClicked">
    Bienvenu
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Welcome',
  methods: {
    welcomeClicked() {
      this.$router.push('article')
    },
  },
})
</script>
