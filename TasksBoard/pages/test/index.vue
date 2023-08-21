<template>
  <div>
    <p>TEST</p>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="element in products">
        <ProductCard :product="element"/>

      </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
  layout: 'test'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
p {
  font-size: 100px;
}
</style>