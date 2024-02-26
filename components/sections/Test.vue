<script setup lang="ts">
const items = [
  { title: 'The City’s Green Center is an “Urban Farm”Shanghai', location: 'Greenland Center, China', image: 'hero1.png' },
  { title: 'Reminiscent of a wooden vessel floating in the bayside landscape', location: 'Ariake Gymnastics Centre, Japan', image: 'slider7.jpg' }
]
</script>

<template>
  <UCarousel v-slot="{ item, index }" :items="items" :ui="{ item: 'w-full' }"
  class="max-h-[calc(100vh-var(--header-height))]">
    <div class="text-center">
      <img :src="item.image" :alt="item.title" class="absolute top-0 w-full h-full -z-10 " draggable="false">

      <p class="z-50 h-[calc(100vh-var(--header-height))] font-semibold">
        {{ index + 1 }}. {{ item.title }}
      </p>
    </div>
  </UCarousel>
</template>