<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

useHead({
  title: 'Blog Post Single - Rekaforma'
})

import type { GetPostQueryVariables } from '#gql'
import { formatDate } from '@vueuse/core';

const { slug } = useRoute().params as GetPostQueryVariables

const option : GetPostQueryVariables = {
  slug: slug
}

const res = await GqlGetPost(option)
const data = res.post
</script>

<template>
  <div class="container mx-auto">
    <SectionsPostHeader>
      <template #date>{{ formatDate(new Date(data?.date), "D MMMM YYYY") }}</template>
      <template #title>{{ data?.title }}</template>
    </SectionsPostHeader>
    <div class="pb-24 xl:grid xl:grid-cols-4 xl:gap-x-10">
      <div class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-shark-100 xl:dark:border-shark-900">
        <div class="flex justify-center xl:block gap-x-8 sm:gap-x-12 xl:gap-x-0 xl:gap-y-8">
          <div class="flex items-center gap-x-2">
            <img :src="data?.author?.picture?.url" alt="author image" class="w-10 h-10 rounded-full">
            <div class="text-sm font-medium leading-5 whitespace-nowrap">
              <span>{{ data?.author?.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
