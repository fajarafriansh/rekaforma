<template>
  <footer id="footer" class="w-full py-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 py-6 gap-y-12">
        <div class="col-span-3 md:col-span-1 md:pr-16">
          <img class="logo h-12" src="~/assets/logo-02.png" alt="">
          <div class="desc w-full mt-8 md:mt-14">
            Take a look at how we designed this house simply random text. It has roots in a piece of classical Latin Literature from 45 BC, making it over 2000 years old.
          </div>
        </div>
        <div class="bg-gradient-to-b from-gray-50 via-gray-400 to-gray-50 md:px-px">
          <div class="bg-white h-full w-full">
            <div class="md:flex md:items-center md:justify-center">
              <div class="flex flex-col items-start w-1/3">
                <NuxtLink v-for="nav in navigations" :to="nav.slug" class="py-2 uppercase">{{ nav.title }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="md:pl-16 col-span-2 md:col-span-1">
          <div>
            <h1 class=" text-4xl font-bold">Visit</h1>
            <p class="mt-2">Logan Baker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
          </div>
          <div class="mt-5">
            <h1 class=" text-4xl font-bold">Call</h1>
            <p class="mt-2">017-6153-1774</p>
          </div>
        </div>
      </div>
      <div class="text-sm mt-6 text-center">
        <p>&copy; Copyright {{ new Date().getFullYear() }} DT Engineering</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
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