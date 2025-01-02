<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <UiSectionContainer action-bottom>
    <template #title>{{ $t("home.news.title") }}</template>
    <template #content>
      <SectionsArticlesList :per-page="3" />
    </template>
    <template #action-bottom>
      <UButton
        :to="localePath('/articles')"
        size="md"
        color="primary"
        variant="solid"
        :label="$t('home.news.actions.read_more')"
        :trailing="false"
        class="transition-all"
      />
    </template>
  </UiSectionContainer>
</template>
