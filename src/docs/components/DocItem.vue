<template>
  <div class="doc_item" :id="name">
    <h2>{{ name }}</h2>
    <h3>Description</h3>
    <slot name="description"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, useSlots} from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const slots = useSlots()

onMounted(() => {
  if (!slots.description) {
    showError({
      statusCode: 500,
      message: 'Слот "description" обязателен и должен быть передан.'
    })
  }
})
</script>