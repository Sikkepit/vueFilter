<script setup lang="ts">
import type { Category } from '@/types/types'

const emit = defineEmits(['filterList'])

const props = defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div>
    <input
      @click="emit('filterList', '')"
      type="radio"
      id="pijnsoort_alle"
      name="pijnsoort"
      value="alle"
    />
    <label for="pijnsoort_alle">Alle</label>
    <template v-for="category in categories" :key="category.name">
      <input
        @click="emit('filterList', category.name)"
        type="radio"
        :id="'pijnsoort_' + category.name.toLowerCase()"
        name="pijnsoort"
        :value="category.name.toLowerCase()"
      />
      <label :for="'pijnsoort_' + category.name.toLowerCase()">{{ category.name }}</label>
    </template>
  </div>
</template>

<style scoped></style>
