<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    default: "/hero1.png",
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  slug: {
    type: String,
  },
});
</script>

<template>
  <div class="h-[calc(100vh-var(--header-height))] w-full">
    <img
      :src="props.imageUrl"
      :alt="props.imageUrl"
      class="absolute top-0 object-cover w-full h-full -z-10"
      draggable="false"
    />
    <div
      class="relative h-full py-24 sm:py-32 md:py-40 md:pb-24 bg-gradient-to-t from-gray-950/85"
    >
      <div class="container flex flex-col justify-end h-full mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
