<template>
  <div class="grid grid-cols-4 gap-5">
    <NuxtLink to="/blog/abc">Error test</NuxtLink>
    <div v-for="product in products">
      <ArticleCard :product="product" />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'blog'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Blog Post - Rekaforma'
  })
</script>
