<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  }
})
</script>

<template>
  <div class="flex flex-col justify-end h-full">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl !leading-tight group-hover/herolink:text-primary">
      {{ props.title }}
    </h2>
    <p class="pl-[1px] mt-6 text-lg tracking-tight text-gray-100 group-hover/herolink:text-primary">
      {{ props.subtitle }}
    </p>
  </div>
</template>