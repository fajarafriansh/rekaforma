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
  },
});
</script>

<template>
  <div
    class="relative flex flex-col justify-between overflow-hidden transition-all bg-white shadow dark:bg-shark-900 rounded-xl ring-1 ring-shark-100 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 dark:ring-shark-800 hover:bg-gray-50/50 dark:hover:bg-shark-900/50 group"
  >
    <div class="">
      <img
        :src="props.coverImageUrl"
        alt="Article image cover"
        class="object-cover w-full h-48"
      />
    </div>
    <div class="flex-1 p-6">
      <NuxtLink
        :to="props.slug"
        class="focus:outline-none"
        :aria-label="props.title"
        tabindex="-1"
      >
        <span class="absolute inset-0" aria-hidden="true"></span>
      </NuxtLink>
      <div class="flex mb-6">
        <UBadge color="primary" variant="subtle">
          {{ props.categoryName }}
        </UBadge>
      </div>
      <p
        class="flex items-center text-lg font-semibold text-shark-900 dark:text-shark-100"
      >
        {{ props.title }}
      </p>
      <p class="mt-1 text-sm text-shark-500 dark:text-shark-400 line-clamp-2">
        {{ props.excerpt }}
      </p>
    </div>
    <div class="p-6 pt-0">
      <div class="flex items-center justify-between gap-3">
        <time class="text-sm text-shark-500 dark:text-shark-400">
          {{ $d(Date.parse(props.date!), "short") }}
        </time>
        <div class="inline-flex flex-row-reverse justify-end">
          <a
            :href="`https://${props.authorProfileUrl}`"
            class="relative inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs transition-all rounded-full ring-2 ring-shark-50 dark:ring-shark-900 -me-1 first:me-0 lg:hover:scale-110 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400"
            target="_blank"
          >
            <UAvatar
              size="xs"
              :src="props.authorPictureUrl"
              :alt="props.authorName"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
