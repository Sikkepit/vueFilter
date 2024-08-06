<script setup lang="ts">
import { ref } from 'vue'
import CategoryFilter from './components/CategoryFilter.vue'
import CategoryList from './components/CategoryList.vue'

const activeFilter = ref('')

function handleFilterChange(category: string) {
  activeFilter.value = category
}

function filteredTreatments() {
  if (activeFilter.value === '') {
    return treatments
  }
  return treatments.filter((treatment) => treatment.categories.includes(activeFilter.value))
}
const treatments = [
  {
    name: 'Acnes',
    url: '/acnes.html',
    categories: ['Zenuwpijn']
  },
  {
    name: 'Acupunctuur',
    url: '/acupunctuur',
    categories: ['Rugpijn', 'Hoofdpijn']
  },
  {
    name: 'Aftercare',
    url: '/aftercare',
    categories: ['Atrose', 'Nekpijn', 'Zenuwpijn', 'Hoofdpijn']
  },
  {
    name: 'TENS',
    url: '/tens',
    categories: ['Rugpijn', 'Zenuwpijn', 'Artrose', 'Hoofdpijn', 'Zenuwpijn']
  }
]

const categories = [
  {
    name: 'Rugpijn',
    url: '/Rugpijn'
  },
  {
    name: 'Hoofdpijn',
    url: '/Hoofdpijn'
  },
  {
    name: 'Atrose',
    url: '/Atrose'
  },
  {
    name: 'Nekpijn',
    url: '/Nekpijn'
  },
  {
    name: 'Zenuwpijn',
    url: '/Zenuwpijn'
  },
  {
    name: 'Artrose',
    url: '/Artrose'
  }
]
</script>

<template>
  <CategoryFilter :categories="categories" @filter-list="handleFilterChange" />
  <CategoryList :categories="categories" :treatments="filteredTreatments()" />
</template>

<style scoped>
.treatment-list li {
  display: flex;
}
.category-list {
  display: flex;
  margin-left: auto;
  gap: 2rem;
}
</style>
