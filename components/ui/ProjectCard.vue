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
  }
})
</script>

<template>
  <NuxtLink :to="`/blog/${props.slug}`" class="flex flex-col justify-between overflow-hidden transition-all bg-white shadow dark:bg-shark-900 rounded-xl ring-1 ring-shark-200 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 dark:ring-shark-800 hover:bg-gray-100/50 dark:hover:bg-shark-900/50 group">
    <div class="">
      <img :src="props.coverImageUrl" :alt="props.title" class="object-cover w-full h-96">
    </div>
    <div class="flex-1 p-6">
      <p class="flex items-center text-lg font-semibold line-clamp-2 text-shark-900 dark:text-shark-100">{{ props.title }}</p>
      <p class="mt-1 text-sm text-shark-500 dark:text-shark-400 line-clamp-2">{{ props.excerpt }}</p>
    </div>
    <div class="p-6 pt-0">
      <div class="flex items-center justify-between gap-3">
        <time class="text-sm text-shark-500 dark:text-shark-400">{{ formatDate(new Date(props.date), "D MMMM YYYY") }}</time>
      </div>
    </div>
  </NuxtLink>
</template>

<style>

</style>