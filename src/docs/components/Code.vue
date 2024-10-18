<script setup>
import {codeToHtml, getHighlighter} from 'shiki/bundle/web'

useHead({
  title: 'Mixins - SCSS Kit',
  titleTemplate: 'Mixins - SCSS Kit'
})

const highlighter = await getHighlighter({
  langs: [
    'scss'
  ],
  themes: [
    'github-light'
  ]
})

const html = highlighter.codeToHtml(`@use "../../styles/reset";
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

@keyframes back {
  0% {
    background-position: 0 50%;
    transform: rotate(0deg);
  }

  50% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
    transform: rotate(360deg);
  }
}

html {
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
}

body {
  width: 100%;
}

.main {
  background: linear-gradient(cornflowerblue, #d2e0ff);
  min-height: 100vh;
  max-width: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    font-size: 100px;
    font-weight: 500;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 30px;
  }
}

.content-wrapper {
  padding-left: 350px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
}`, {
  lang: 'scss',
  theme: 'github-light'
})

</script>

<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>