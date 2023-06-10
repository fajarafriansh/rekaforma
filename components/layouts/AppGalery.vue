<template>
  <div class="flex overflow-x-scroll hide-scroll-bar h-64 md:h-80">
    <div class="flex flex-nowrap space-x-1">
      <div v-for="galery in galeries" class="w-44 md:w-1/6 h-full">
        <img :src="galery.src" :alt="galery.title" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galeries: [
        { id: 1, title: 'Galery 1', src: '_nuxt/assets/placeholder-image.jpg' },
        { id: 2, title: 'Galery 2', src: '_nuxt/assets/placeholder-image.jpg' },
        { id: 3, title: 'Galery 3', src: '_nuxt/assets/placeholder-image.jpg' },
        { id: 4, title: 'Galery 4', src: '_nuxt/assets/placeholder-image.jpg' },
        { id: 5, title: 'Galery 5', src: '_nuxt/assets/placeholder-image.jpg' },
        { id: 6, title: 'Galery 5', src: '_nuxt/assets/placeholder-image.jpg' },
      ]
    }
  }
}
</script>