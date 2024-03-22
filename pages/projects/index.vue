<script setup lang="ts">
definePageMeta({
  layout: "blog",
});

useHead({
  title: "Projects - Rekaforma",
});
</script>

<template>
  <div class="container mx-auto">
    <SectionsPageHeader>
      <template #title>Projects</template>
      <template #subtitle>
        Specialists in large-scale complex projects, our team works together to
        bridge cultures and transform cities, bringing the best of world
        architecture to every project.
      </template>
    </SectionsPageHeader>
    <div class="pb-24 mt-8">
      <SectionsProjectsList :per-page="12" />
    </div>
  </div>
</template>
