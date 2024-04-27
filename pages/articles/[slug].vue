<script setup lang="ts">
import type { GetPostQueryVariables } from "#gql";

// const localePath = useLocalePath()
const { locale } = useI18n();
const locales: string[] = [locale.value];

const { slug } = useRoute().params as GetPostQueryVariables;

const option: GetPostQueryVariables = {
  slug: slug,
  locales: locales,
};

const data = await useGQLQuery("get_post", option);

if (!data) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

// const author = data?.author?.socialProfileUrl?.split('/')[1]

const title = data?.title;
const description = data?.excerpt;
const coverImageUrl = data?.coverImage?.url;
const date = data?.date;
const authorName = data?.author?.name;
const authorPictureUrl = data?.author?.picture?.url;
const authorSocialProfileUrl = data?.author?.socialProfileUrl!;
const authorSocialProfileName = data?.author?.socialProfileName;

useSeoMeta({
  title: () => title,
  description: () => description,
  ogTitle: () => title,
  ogDescription: () => description,
  ogImage: () => coverImageUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => title,
  twitterDescription: () => description,
  twitterImage: () => coverImageUrl,
});
</script>

<template>
  <div class="container pb-24 mx-auto">
    <SectionsPostHeader>
      <template #date>{{ $d(Date.parse(date), "short") }}</template>
      <template #title>{{ title }}</template>
      <template #author>
        <div class="flex items-center justify-center">
          <div class="pt-6">
            <div
              class="flex justify-center xl:block gap-x-8 sm:gap-x-12 xl:gap-x-0 xl:gap-y-8"
            >
              <div class="flex items-center gap-x-2">
                <img
                  :src="authorPictureUrl"
                  alt="author image"
                  class="w-10 h-10 rounded-full"
                />
                <div
                  class="text-sm font-medium leading-5 text-start whitespace-nowrap"
                >
                  <div>{{ authorName }}</div>
                  <div>
                    <a
                      :href="authorSocialProfileUrl"
                      class="hover:text-primary"
                    >
                      {{ authorSocialProfileName }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionsPostHeader>
    <div
      class="w-full max-w-3xl pb-24 mx-auto mt-12 prose blog dark:prose-invert"
    >
      <div v-html="$md.render(data?.content.markdown)"></div>
      <hr />
    </div>
    <SectionsPostRelated :cursor="data?.id" />
  </div>
</template>

<style>
.prose {
  @apply leading-[1.75] text-base;
}

.prose a {
  @apply no-underline font-medium hover:underline;
}

.prose img {
  @apply shadow-lg;
}
</style>
