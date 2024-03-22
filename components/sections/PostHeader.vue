<script></script>

<template>
  <div class="py-8 border-b md:py-16 border-shark-100 dark:border-shark-900">
    <div class="space-y-1 text-center">
      <dd class="text-base text-shark-500 dark:text-shark-300">
        <time datetime="">
          <slot name="date">default date</slot>
        </time>
      </dd>
      <h1
        class="text-3xl font-bold !leading-tight tracking-tight md:text-4xl text-gray-900 dark:text-white"
      >
        <slot name="title"> default header </slot>
      </h1>
      <div>
        <slot name="author"> default header </slot>
      </div>
    </div>
  </div>
</template>
