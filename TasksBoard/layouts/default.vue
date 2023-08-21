<template>
  <div>
    <header>
      <nav>
        <v-col>
          <v-row class="lolo">Проверка</v-row>
          <v-row><NuxtLink to="/">home</NuxtLink></v-row>
          <v-row><NuxtLink to="/about">about</NuxtLink></v-row>
          <v-row><NuxtLink to="/test">test</NuxtLink></v-row>
        </v-col>
      </nav>
    </header>
  </div>

  <div>
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>
.lolo {
  margin-left: 100px;
}
.router-link-exact-active {
  color: #00c853;
}
</style>