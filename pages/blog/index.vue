<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

useHead({
  title: 'Blog Post - Rekaforma'
})
</script>
    
<template>
  <div class="container mx-auto">
    <SectionsPageHeader>
      <template #title>The Blog Post</template>
      <template #subtitle>Read the latest news about all Nuxt solutions, from framework announcements to integration tutorials.</template>
    </SectionsPageHeader>
    <div class="pb-24 mt-8">
      <SectionsArticlesList :per-page="12" />
    </div>
  </div>
</template>
