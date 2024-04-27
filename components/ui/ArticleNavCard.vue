<script setup lang="ts">
const props = defineProps({
  slug: {
    type: String,
    require: true,
  },
  title: {
    type: String,
  },
  excerpt: {
    type: String,
    default: null,
  },
  prev_post: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink
    :to="props.slug"
    class="block px-6 py-8 border border-gray-200 rounded-lg not-prose dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
    :class="{ 'text-right': prev_post }"
  >
    <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
      {{ props.title }}
    </p>
    <p
      class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
    >
      {{ props.excerpt }}
    </p>
  </NuxtLink>
</template>
