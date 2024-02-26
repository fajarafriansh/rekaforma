<script setup lang="ts">
const items = [
  { title: 'The City’s Green Center is an “Urban Farm”Shanghai', location: 'Greenland Center, China', image: 'hero1.png', slug:'/' },
  { title: 'Reminiscent of a wooden vessel floating in the bayside landscape', location: 'Ariake Gymnastics Centre, Japan', image: 'hero2.png', slug:'/' },
  { title: 'The City’s Green Center is an “Urban Farm”Shanghai', location: 'Greenland Center, China', image: 'hero3.png', slug:'/' },
  { title: 'Reminiscent of a wooden vessel floating in the bayside landscape', location: 'Ariake Gymnastics Centre, Japan', image: 'hero4.png', slug:'/' },
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 10000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item, index }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="overflow-hidden max-h-[calc(100vh-var(--header-height))]"
    indicators
  >
    <div class="h-[calc(100vh-var(--header-height))] w-full">
      <img :src="item.image" :alt="item.name" class="absolute top-0 object-cover w-full h-full -z-10" draggable="false">
      <div class="relative h-full py-24 sm:py-32 md:py-40 md:pb-24 bg-gradient-to-b from-gray-950/0 to-gray-950/85">
        <div class="container flex flex-col justify-end h-full mx-auto">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {{ item.title }}
          </h2>
          <p class="mt-6 text-lg tracking-tight text-gray-100">
            {{ item.location }}
          </p>
        </div>

      </div>
    </div>
  </UCarousel>
</template>