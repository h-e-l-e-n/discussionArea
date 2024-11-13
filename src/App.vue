<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Post from './components/post.vue'
import newPost from './components/newPost.vue'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">首頁</RouterLink> |
      <RouterLink to="/post">貼文</RouterLink> |
      <RouterLink to="/newpost">發新貼文</RouterLink> |
    </nav>
    <RouterView />

  </header>
  <body>
    <!-- <div>
      <post/>
    </div> -->
  </body>
  

</template>

<style scoped>

</style>
