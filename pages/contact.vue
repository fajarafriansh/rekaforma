<script setup>
definePageMeta({
  layout: 'homepage'
})
</script>

<template>
  <div class="relative bg-grayscale-8 -z-10">
    <div class="absolute w-full h-full bg-white bottom-[70%] xl:bottom-[65%] -z-10"></div>
    <div class="container z-10 h-full pt-20 pb-10 mx-auto gap-y-10 xl:pb-20 md:flex-row md:pt-24 xl:pt-56">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 xl:gap-y-12">
        <div class="w-full">
          <img src="/img5.jpg" alt="" class="object-cover w-full h-[120px] md:h-[220px] lg:h-[300px] xl:h-[400px]">
        </div>
        <div class="w-full md:col-span-2">
          <img src="/img7.jpg" alt="" class="object-cover w-full h-[200px] md:h-[220px] lg:h-[300px] xl:h-[400px]">
        </div>
        <div>
          <h3 class="text-grayscale-3">Rekaforma</h3>
        </div>
        <div class="flex flex-col gap-6 md:col-span-2 xl:gap-7">
          <div class="mb-2 md:mb-4 xl:mb-8">
            <h1 class="text-white pr-[110px]">121 King Street, Melbourne Victoria 3000 Australia.</h1>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div v-for="i in 4" :key="i" class="flex flex-col pt-5 border-t border-grayscale-4/50">
              <h5 class="mb-5 font-extrabold text-white">Phone</h5>
              <p class="text-base leading-7 tracking-wide text-grayscale-3">Free: 403.265.2440</p>
              <p class="text-base leading-7 text-grayscale-3">Service: info@kts.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container grid grid-cols-1 py-10 mx-auto md:py-12 xl:py-20 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8 xl:gap-y-12">
    <div>
      <h3 class="text-reka-2">Write us a message</h3>
    </div>
    <div class="flex flex-col md:col-span-2 gap-7">
      <h1 class="">Tell us about your project we're excited to work together.</h1>
    </div>
  </div>
</template>
