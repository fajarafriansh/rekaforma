<script setup lang="ts">
</script>
    
<template>
  <UiSectionContainerRow>
    <template #title>Latest News</template>
    <template #content>
      <SectionsArticlesList :per-page="3" />
    </template>
  </UiSectionContainerRow>
</template>
