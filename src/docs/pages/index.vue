<template>
  <div class="main">
    <div class="logo">SCSS Toolkit</div>
    <div class="links">
      <NuxtLink to="/docs/">Documentation</NuxtLink>
      <NuxtLink target="_blank" to="https://github.com/denis-axenov/scss-toolkit">GitHub</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'SCSS Toolkit',
  titleTemplate: 'SCSS Toolkit'
})
</script>