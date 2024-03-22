<script setup lang="ts"></script>

<template>
  <UiSectionContainer>
    <template #title>{{ $t("home.news.title") }}</template>
    <template #content>
      <SectionsArticlesList :per-page="3" />
    </template>
  </UiSectionContainer>
</template>
