<script setup lang="ts">
const props = defineProps({
  imageUrls: {
    type: Array
  }
})

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
    :items="props.imageUrls"
    :ui="{
      item: 'basis-full aspect-[16/9]',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4'
      }
    }"
    class="overflow-hidden rounded-lg"
    indicators
  >
    <template #default="{ item }">
      <img :src="item.url" class="object-cover w-full" draggable="false">
    </template>
    <template #indicator="{ onClick, page, active }">
      <UButton :label="String(page)" :variant="active ? 'solid' : 'outline'" size="2xs" class="justify-center rounded-full min-w-6" @click="onClick(page)" />
    </template>
  </UCarousel>
</template>
