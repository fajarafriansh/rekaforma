<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

useHead({
  title: 'Blog Post Single - Rekaforma'
})

import type { GetPostQueryVariables } from '#gql'

// const localePath = useLocalePath()
const { locale } = useI18n()
const locales: string[] = [locale.value]

const { slug } = useRoute().params as GetPostQueryVariables

const option : GetPostQueryVariables = {
  slug: slug,
  locales: locales
}

const data = await useGQLQuery("get_post" ,option)
// const author = data?.author?.socialProfileUrl?.split('/')[1]
</script>

<template>
  <div class="container mx-auto">
    <SectionsPostHeader>
      <template #date>{{ $d(Date.parse(data?.date), "short") }}</template>
      <template #title>{{ data?.title }}</template>
      <template #author>
        <div class="flex items-center justify-center">
          <div class="pt-6">
            <div class="flex justify-center xl:block gap-x-8 sm:gap-x-12 xl:gap-x-0 xl:gap-y-8">
              <div class="flex items-center gap-x-2">
                <img :src="data?.author?.picture?.url" alt="author image" class="w-10 h-10 rounded-full">
                <div class="text-sm font-medium leading-5 text-start whitespace-nowrap">
                  <div>{{ data?.author?.name }}</div>
                  <div>
                    <a :href="data?.author?.socialProfileUrl!" class="hover:text-primary">{{ data?.author?.socialProfileName }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionsPostHeader>
    <div class="max-w-3xl mx-auto blog">
      <div v-html="$md.render(data?.content.markdown)" class="w-full pb-24 mx-auto mt-12 prose dark:prose-invert">
      </div>
    </div>
  </div>
</template>

<style>
.prose {
  @apply leading-[1.75] text-base
}

.prose a {
  @apply no-underline font-medium hover:underline
}

.prose img {
  @apply shadow-lg
}
</style>