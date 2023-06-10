<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.id }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true})
}
</script>