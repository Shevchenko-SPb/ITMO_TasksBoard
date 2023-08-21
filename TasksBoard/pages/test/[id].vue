<template>
<div>
  <p>Test {{ id }}</p>
  <p>Test {{ product.id }}</p>
  <p>Test {{ product.title}}</p>
  <p>Test {{ product.price }}</p>
</div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(uri, {key: id})
</script>

<style scoped>

</style>