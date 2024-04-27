<script setup lang="ts">
import type { NextPostQueryVariables, PreviousPostQueryVariables } from "#gql";

const props = defineProps({
  cursor: {
    type: String,
  },
});

const localePath = useLocalePath();
const { locale } = useI18n();
const locales: string[] = [locale.value];

const next_option: NextPostQueryVariables = {
  cursor: props.cursor,
  locales: locales,
};

const prev_option: PreviousPostQueryVariables = {
  cursor: props.cursor,
  locales: locales,
};

const next_posts = await useGQLQuery("next_post", next_option);
const prev_posts = await useGQLQuery("prev_post", prev_option);
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2">
    <UiArticleNavCard
      v-for="post in next_posts"
      :slug="localePath(`/articles/${post?.slug}`)"
      :title="post?.title"
      :excerpt="post?.excerpt"
    />
    <span
      v-if="next_posts.length === 0 || prev_posts.length === 0"
      class="hidden sm:block"
      >&nbsp;</span
    >
    <UiArticleNavCard
      v-for="post in prev_posts"
      :slug="localePath(`/articles/${post?.slug}`)"
      :title="post?.title"
      :excerpt="post?.excerpt"
      prev_post
    />
  </div>
</template>
