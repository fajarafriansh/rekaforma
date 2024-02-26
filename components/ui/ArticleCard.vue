<script setup>
import { formatDate } from '@vueuse/core'

const props = defineProps({
  slug: {
    type: String,
    require: true
  },
  title: {
    type: String,
  },
  excerpt: {
    type: String,
    default: null
  },
  date: {
    type: String,
  },
  coverImageUrl: {
    type: String,
  },
  categoryName: {
    type: String,
  },
  authorName: {
    type: String,
  },
  authorPictureUrl: {
    type: String,
  },
  authorProfileUrl: {
    type: String,
  }
})
</script>

<template>
  <NuxtLink :to="props.slug" class="flex flex-col justify-between overflow-hidden transition-all bg-white shadow dark:bg-shark-900 rounded-xl ring-1 ring-shark-100 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 dark:ring-shark-800 hover:bg-gray-50/50 dark:hover:bg-shark-900/50 group">
    <div class="">
      <img :src="props.coverImageUrl" alt="Article image cover" class="object-cover w-full h-48">
    </div>
    <div class="flex-1 p-6">
      <div class="flex mb-6">
        <p class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">{{ props.categoryName }}</p>
      </div>
      <p class="flex items-center text-lg font-semibold line-clamp-2 text-shark-900 dark:text-shark-100">{{ props.title }}</p>
      <p class="mt-1 text-sm text-shark-500 dark:text-shark-400 line-clamp-2">{{ props.excerpt }}</p>
    </div>
    <div class="p-6 pt-0">
      <div class="flex items-center justify-between gap-3">
        <time class="text-sm text-shark-500 dark:text-shark-400">{{ formatDate(new Date(props.date), "D MMMM YYYY") }}</time>
        <div class="inline-flex flex-row-reverse justify-end">
          <a :href="`https://${props.authorProfileUrl}`" class="relative inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs transition-all rounded-full ring-2 ring-shark-50 dark:ring-shark-900 -me-1 first:me-0 lg:hover:scale-110 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400" target="_blank">
            <img :src="props.authorPictureUrl" alt="Author profile picture" class="object-cover w-6 h-6 rounded-full">
          </a>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
