<template>
  <aside class="sidebar">
    <NuxtLink to="/" class="logo">SCSS Toolkit</NuxtLink>

    <nav>

      <div class="segment">
        <h2>Mixins</h2>
        <h3>Background</h3>
        <NuxtLink to="/docs/mixins/background#image">image</NuxtLink>

        <h3>Breakpoint</h3>
        <NuxtLink to="/docs/mixins/breakpoint#max" active-class="active">max</NuxtLink>
        <NuxtLink to="/docs/mixins/breakpoint#min" active-class="active">min</NuxtLink>
        <NuxtLink to="/docs/mixins/breakpoint#minMax" active-class="active">minMax</NuxtLink>

        <h3>Effect</h3>
        <NuxtLink to="/docs/mixins/effect#transition">transition</NuxtLink>

        <h3>Layout</h3>
        <NuxtLink to="/docs/mixins/layout#grid">grid</NuxtLink>
        <NuxtLink to="/docs/mixins/layout#flexGrid">flexGrid</NuxtLink>

        <h3>Scrollbar</h3>
        <NuxtLink to="/docs/mixins/scrollbar#set">set</NuxtLink>

        <h3>Spacing</h3>
        <NuxtLink to="/docs/mixins/spacing#marginY">marginY</NuxtLink>
        <NuxtLink to="/docs/mixins/spacing#marginX">marginX</NuxtLink>
        <NuxtLink to="/docs/mixins/spacing#paddingY">paddingY</NuxtLink>
        <NuxtLink to="/docs/mixins/spacing#paddingX">paddingX</NuxtLink>
        <NuxtLink to="/docs/mixins/spacing#stretchX">stretchX</NuxtLink>
        <NuxtLink to="/docs/mixins/spacing#stretchY">stretchY</NuxtLink>
      </div>

      <div class="segment">
        <h2>Functions</h2>
        <NuxtLink to="/docs/functions">Functions</NuxtLink>
      </div>

    </nav>
  </aside>
</template>
<script setup lang="ts">
</script>