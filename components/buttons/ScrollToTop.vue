<template>
  <div class="block w-10 h-10">
    <button @click="scrollToTop" class="block w-full h-full bg-gray-600">p</button>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  })
</script>