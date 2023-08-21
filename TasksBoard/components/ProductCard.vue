<template>
 <div class="card">
   <img :src="product.image" style="width: 100px">
   <p>{{product.title}}</p>
   <p>ЦЕНА -> ${{product.price}}</p>
 </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>

</style>