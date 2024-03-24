<script setup lang="ts">
import type { ArticlesQueryVariables } from "#gql";

const props = defineProps({
  perPage: {
    type: Number,
    default: 1,
  },
});

const localePath = useLocalePath();
const { locale } = useI18n();
const locales: string[] = [locale.value];

const option: ArticlesQueryVariables = {
  first: props.perPage,
  locales: locales,
};

const articles = await useGQLQuery("articles", option);
</script>

<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    <UiArticleCard
      v-for="article in articles"
      :key="article?.cursor"
      :slug="localePath(`/blog/${article?.node.slug}`)"
      :title="article?.node.title"
      :date="article?.node.date"
      :excerpt="article?.node.excerpt!"
      :cover-image-url="article?.node.coverImage?.url"
      :category-name="article?.node.category?.title"
      :author-name="article?.node.author?.name"
      :author-picture-url="article?.node.author?.picture?.url"
      :author-profile-url="article?.node.author?.socialProfileUrl!"
    />
  </div>
</template>
