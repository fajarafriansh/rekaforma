<script setup lang="ts">
const props = defineProps({
  slug: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  coverImageUrl: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink
    :to="props.slug"
    class="relative flex overflow-hidden transition-all rounded-xl ring-1 ring-gray-200 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 dark:ring-gray-800 group"
  >
    <img
      :src="props.coverImageUrl"
      :alt="props.name"
      class="object-cover w-full transition-transform duration-200 scale-100 h-[300px] group-hover:scale-105"
    />
    <div
      class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end w-full h-full p-6 bg-gradient-to-t from-gray-950/85 to-50%"
    >
      <p class="text-xl font-semibold text-center text-white line-clamp-2">
        {{ props.name }}
      </p>
      <p class="mt-1 text-sm tracking-tight text-center text-gray-100">
        {{ props.role }}
      </p>
    </div>
  </NuxtLink>
</template>

<style></style>
