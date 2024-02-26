<script setup>

</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="container flex flex-col gap-16 mx-auto max-w-7xl sm:gap-y-24">
      <div class="flex flex-col items-center text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          <slot name="title"> default header </slot>
        </h2>
      </div>
      <slot name="content"> default content </slot>
    </div>
  </div>
</template>
