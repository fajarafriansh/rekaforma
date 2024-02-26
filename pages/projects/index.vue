<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

useHead({
  title: 'Projects - Rekaforma'
})

const res = await GqlGetPeople()
const data = res.people
</script>
    
<template>
  <div class="container mx-auto">
    <SectionsPageHeader>
      <template #title>Projects</template>
      <template #subtitle>Specialists in large-scale complex projects, our team works together to bridge cultures and transform cities, bringing the best of world architecture to every project.</template>
    </SectionsPageHeader>
    <div class="pb-24 mt-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <UiProjectCard
          v-for="article in data"
          :title="article?.name"
          :cover-image-url="article?.photo?.url"
        />
      </div>
    </div>
  </div>
</template>
