<template>
  <nav class="w-full py-3 flex items-center justify-between">
    <div class="md:w-1/4 flex items-center">
      <img class="logo h-10" src="~/assets/logo-02.png" alt="">
    </div>
    <div class="w-2/4 hidden md:flex items-center space-x-8">
      <NuxtLink v-for="nav in navigations" :to="nav.slug" class="py-1 bg-gradient-to-r from-gray-800 to-gray-800 bg-[length:45px_2px] bg-left-bottom bg-no-repeat uppercase">{{ nav.title }}</NuxtLink>
    </div>
    <div class="w-1/4 hidden md:flex items-center justify-end">
      <button class="border-2 border-gray-800 py-2 px-5 uppercase text-sm font-medium">Contact</button>
    </div>
    <div class="flex md:hidden">
      <button @click="open = !open" type="button" class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900" aria-label="Toggle menu">
        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
          <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
    </div>
  </nav>

  <div class="md:hidden fixed right-0 top-0 z-50 h-screen w-2/3 bg-slate-400 pt-5 transition-all duration-300" :class="{ 'translate-x-0': open, 'translate-x-full': !open }">
    <div class="w-full float-left px-5">
      <button @click="open = !open" class="text-black font-bold py-2 px-4 float-right">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        { id: 1, title: 'The Studio', slug: '/' },
        { id: 2, title: 'Services', slug: '/about' },
        { id: 3, title: 'Project', slug: '/about' },
        { id: 4, title: 'Blog', slug: '/blog' },
      ]
    }
  }
}
</script>