<script></script>

<template>
  <div class="py-8 md:py-16">
    <div class="grid gap-8 lg:grid-cols-2 lg:items-center md:gap-y-16">
      <div>
        <p
          class="text-3xl font-bold tracking-tight text-shark-900 dark:text-white md:text-4xl lg:text-5xl"
        >
          <slot name="title"> default header </slot>
        </p>
        <div class="mt-4 text-lg text-shark-500 dark:text-shark-300">
          <slot name="subtitle"> default subtitle </slot>
        </div>
      </div>
    </div>
  </div>
</template>
