<script>

</script>

<template>
  <div class="py-8 border-b md:py-16 border-shark-100 dark:border-shark-900">
    <div class="space-y-1 text-center">
      <dd class="text-base text-shark-500 dark:text-shark-300">
        <time datetime=""> 
          <slot name="date">default date</slot>
        </time>
      </dd>
      <p class="text-3xl font-bold !leading-tight tracking-tight md:text-4xl lg:text-5xl text-shark-900 dark:text-white">
        <slot name="title"> default header </slot>
      </p>
      <div>
        <slot name="author"> default header </slot>
      </div>
    </div>
  </div>
</template>