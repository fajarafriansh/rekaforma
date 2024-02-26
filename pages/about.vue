<script setup>
definePageMeta({
  layout: 'homepage'
})

useHead({
  title: 'About Us - Rekaforma'
})
</script>

<template>
  <div class="h-full md:min-h-[600px] bg-[url('/bg4.jpg')] bg-contain bg-right-top bg-no-repeat" >
    <div class="container flex flex-col flex-wrap flex-grow flex-shrink h-full pt-20 pb-10 mx-auto gap-y-10 xl:pb-24 md:flex-row md:pt-24 xl:pt-64">
      <div class="w-full md:w-[46%]">
        <img src="/img5.jpg" alt="" class="object-cover w-full h-auto">
      </div>
      <div class="hidden md:flex items-center justify-center md:w-[8%]">
        <div class="h-full border-l border-[#00000026]"></div>
      </div>
      <div class="w-full md:w-[46%] flex flex-col justify-between flex-grow-0 flex-shrink-1 gap-5 xl:gap-5 lg:gap-48 md:gap-32 relative">
        <img class="absolute top-0 right-0 object-cover h-9 xl:h-16" src="/shape-quote.png" alt="">
        <div class="pr-[20%]">
          <h2 class="xl:text-2xl text-lg font-extrabold leading-7 xl:leading-8 tracking-tight text-[#292b2c]">They teach you in architecture school that you have to have a ‘BIG IDEA’ if you’re ever going to be special. But for me, this in depth look at the client we do - that is the BIG IDEA.</h2>
        </div>
        <div class="xl:pr-[25%] flex-shrink">
          <p class="mb-10 text-[#707070] xl:text-lg text-base leading-6">KTStudio is made up of a dedicated & diverse team of specialists in architecture, design, construction, sustainability and historic preservation.</p>
          <a href="/" class="flex gap-x-6 text-lg font-bold text-[#292b2c] group hover:text-[#fa9f42] transition-all">
            <span class="">Explore in more detail</span>
            <span class=" px-6 text-[#fa9f42] border-[1px] border-[#707070]/50 group-hover:text-white group-hover:border-[#fa9f42] group-hover:bg-[#fa9f42] transition-all flex items-center"><Icon name="material-symbols:arrow-right-alt-rounded" size="28px" /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <SectionsTextMarquee :speed="60" />

  <SectionsHistory />
  
  <SectionsSnapshot />
  
  <SectionsPhilosophy />
  
  <SectionsTeam />
  
  <SectionsTextMarquee :speed="60" />

</template>