<template>
  <nav class="relative z-10 flex items-center w-full bg-transparent">
    <div class="flex-grow flex-shrink-0 my-9">
      <img class="h-[42px] logo" src="~/assets/logo.jpg" alt="">
    </div>
    <div class="flex items-center mx-10 gap-x-10">
      <div v-for="nav in navigations" class="relative pt-2 leading-4 group nav-link">
        <NuxtLink :to="nav.slug" class="flex flex-col items-start">
          <span class="mb-1 text-xs font-medium opacity-80">0{{ nav.id }}</span>
          <span class="font-semibold ">{{ nav.title }}</span>
        </NuxtLink>
        <span class="absolute top-0 left-0 h-[1px] w-full bg-[#707070] opacity-20"></span>
        <span class="absolute top-0 left-0 h-[1px] w-0 group-hover:w-full bg-[#fa9f42] transition-all"></span>
      </div>
    </div>
    <div class="flex items-center ml-8 gap-x-1">
      <div class="block w-[42px] h-[42px]">
        <a href="#" class="flex items-center justify-center w-full h-full text-[#707070] hover:text-[#fa9f42] border-[0.8px] border-[#707070]/20 hover:border-[#fa9f42] transition-all"><Icon name="uil:instagram-alt" size="24px" /></a>
      </div>
      <div class="block w-[42px] h-[42px]">
        <a href="#" class="flex items-center justify-center w-full h-full text-[#707070] hover:text-[#fa9f42] border-[0.8px] border-[#707070]/20 hover:border-[#fa9f42] transition-all"><Icon name="uil:twitter" size="24px" /></a>
      </div>
      <div class="block w-[42px] h-[42px]">
        <button @click="scrollToTop" class="block w-full h-full text-white bg-[#272a30]"><Icon name="uil:search" size="24px" /></button>
      </div>
    </div>
    <div class="absolute left-0 right-0 py-6 top-full border-t border-[#707070]/20 flex items-center gap-x-16 leading-4">
      <div class="flex items-center font-semibold gap-x-4">
        <Icon name="uil:ruler" size="34px" />
        <div class="flex flex-col">
          <span class="mb-1 text-xs font-normal opacity-60">Working Hours</span>
          <p>Mon - Fri: 8:30 AM - 4:30 PM</p>
        </div>
      </div>
      <div class="flex items-center font-semibold gap-x-4">
        <Icon name="uil:calling" size="34px" />
        <div class="flex flex-col">
          <div class="mb-1 text-xs font-normal opacity-60">Customer Support</div>
          <div>1900 1088 <span class=" inline-block h-3 border-l border-[#707070]/30 mx-3"></span> info@example.com</div>
        </div>
      </div>
    </div>
    <div class="flex md:hidden">
      <button @click="open = !open" type="button" class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900" aria-label="Toggle menu">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
    </div>
  </nav>

  <div class="fixed top-0 right-0 z-50 w-2/3 h-screen pt-5 transition-all duration-300 md:hidden bg-slate-400" :class="{ 'translate-x-0': open, 'translate-x-full': !open }">
    <div class="float-left w-full px-5">
      <button @click="open = !open" class="float-right px-4 py-2 font-bold text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-col px-5">
      <NuxtLink v-for="nav in navigations" :to="nav.slug" class="py-2 uppercase">{{ nav.title }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      navigations: [
        { id: 1, title: 'Home', slug: '/' },
        { id: 2, title: 'About KTS', slug: '/about' },
        { id: 3, title: 'Services', slug: '/about' },
        { id: 4, title: 'Portfolio', slug: '/blog' },
        { id: 5, title: 'KTS News', slug: '/blog' },
        { id: 6, title: 'Get in touch', slug: '/blog' },
      ]
    }
  }
}
</script>
