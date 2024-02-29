<script setup>
const props = defineProps({
  col: {
    type: Boolean,
    default: false
  },
  colReverse: {
    type: Boolean,
    default: false
  },
  description: {
    type: Boolean,
    default: false
  },
  action: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="py-24 sm:py-32">
    <div
      class="container gap-16 mx-auto max-w-7xl sm:gap-y-24"
      :class="{ 'grid lg:grid-cols-2 lg:items-center': col, 'flex flex-col': !col }"
    >
      <div class="flex flex-col" :class="{ 'lg:order-last': colReverse && col, 'items-center text-center': !col }">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          <slot name="title"> default header </slot>
        </h2>
        <p v-if="description" class="mt-6 text-gray-600 text-lg/8 dark:text-gray-300">
          <slot name="description"> default description </slot>
        </p>
        <div v-if="action" class="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
          <slot name="action"> default action </slot>
        </div>
      </div>
      <slot name="content"> default content </slot>
    </div>
  </div>
</template>
