<script setup lang="ts">
useSeoMeta({
  title: "Blog Post",
  ogTitle: "The Blog Post",
});
</script>

<template>
  <div class="container mx-auto">
    <SectionsPageHeader>
      <template #title>{{ $t("blog.title") }}</template>
      <template #subtitle>
        Read the latest news about all Nuxt solutions, from framework
        announcements to integration tutorials.
      </template>
    </SectionsPageHeader>
    <div class="pb-24 mt-8">
      <SectionsArticlesList :per-page="12" />
    </div>
  </div>
</template>
