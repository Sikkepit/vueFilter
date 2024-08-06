<script setup lang="ts">
import type { Category, Treatment } from '@/types/types'

function getCategoryUrl(category: string) {
  const matchingCategory = props.categories.filter((categoryItem) => categoryItem.name === category)
  if (matchingCategory.length === 0) {
    return
  }
  return matchingCategory[0].url
}

const props = defineProps<{
  categories: Category[]
  treatments: Treatment[]
}>()
</script>

<template>
  <ul class="treatment-list">
    <li v-for="treatement in treatments" :key="treatement.name">
      <a :href="treatement.url">{{ treatement.name }}</a>
      <ul class="category-list">
        <li v-for="category in treatement.categories" :key="treatement.name + category">
          <a :href="getCategoryUrl(category)">{{ category }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
.treatment-list li {
  display: flex;
}
.category-list {
  display: flex;
  margin-left: auto;
  gap: 2rem;
}
</style>
