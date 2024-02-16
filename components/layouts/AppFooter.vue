<template>
  <footer id="footer" class="w-full pt-5 bg-[#272a30] text-[#ffffffb3]">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-x-6 footer-widget">
        <div class="py-20">
          <img class="h-12 logo" src="~/assets/logo.jpg" alt="">
        </div>
        <div class="col-span-2 py-20">
          <div class="">
            <div class="relative mb-12">
              <form class="newsletter" action="">
                <input type="email" name="email" placeholder="Enter your email to sign up newsletter" required class=" pb-5 leading-5 border-b-[1px] border-[#ffffff33] w-full bg-transparent focus:outline-none">
                <button type="submit" class="absolute right-0 z-10 w-20 h-8 bottom-3 text-white border-[1px] border-[#ffffff33]"><Icon name="uil:arrow-right" size="24px" /></button>
              </form>
            </div>
            <div class="mb-12">
              <h2 class="text-5xl leading-[56px] h2">
                <a href="#" class="bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-gradient-to-b from-transparent from-90% via-[#fa9f42] via-90% to-[#fa9f42] text-white transition-all">Ready to move forward towards your dream?</a>
              </h2>
            </div>
            <div class="grid grid-flow-col grid-rows-3">
              <div v-for="nav in navigations" class="mb-2 ">
                <NuxtLink :to="nav.slug" class="font-medium leading-6 bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-gradient-to-b from-transparent from-95% via-[#ffffff33] via-95% to-[#ffffff33] transition-all">{{ nav.title }}</NuxtLink>
              </div>
              <div v-for="contact in contacts" class="mb-2">
                <a href="#" class="font-medium leading-6 bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-gradient-to-b from-transparent from-95% via-[#ffffff33] via-95% to-[#ffffff33] transition-all">{{ contact.contact }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-1 pb-20 footer-copyright">
        <div class="flex-grow">Copyright &copy; {{ new Date().getFullYear() }} Rekaforma</div>
        <div class="block w-10 h-10">
          <a href="#" class="flex items-center justify-center w-full h-full text-white border border-[#ffffff33] hover:border-[#ffffff73] transition-all"><Icon name="uil:instagram-alt" size="24px" /></a>
        </div>
        <div class="block w-10 h-10">
          <a href="#" class="flex items-center justify-center w-full h-full text-white border border-[#ffffff33] hover:border-[#ffffff73]"><Icon name="uil:twitter" size="24px" /></a>
        </div>
        <div class="block w-10 h-10">
          <button @click="scrollToTop" class="block w-full h-full bg-gray-600"><Icon name="uil:arrow-up" size="32px" /></button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        { id: 1, title: 'About us', slug: '/about' },
        { id: 2, title: 'Meet the team', slug: '/about' },
        { id: 3, title: 'Careers', slug: '/blog' },
        { id: 4, title: 'Services', slug: '/blog' },
        { id: 5, title: 'News & events', slug: '/blog' },
        { id: 6, title: 'Explore our work', slug: '/blog' },
        { id: 7, title: 'FAQs', slug: '/blog' },
        { id: 8, title: 'Contact us', slug: '/blog' },
        { id: 9, title: 'Support central', slug: '/blog' },
      ],
      contacts: [
        { id: 1, contact: 'P: 1900 1088' },
        { id: 1, contact: 'E: info@rekaforma.xyz' },
        { id: 1, contact: 'A: Banda Aceh, IDN' }
      ]
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
.newsletter input:focus + button {
  @apply bg-[#fa9f42] border-[#fa9f42]
}
</style>