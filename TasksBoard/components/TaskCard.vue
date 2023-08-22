<template>
  <v-card class="rounded-lg mb-1"
          style="background-color: #f9fafb;">
    <v-card-item>
      <div>
        <v-row class=" w-100% py-2 ps-1 align-center">
          <v-chip
              class="ma-2"
              color="pink-lighten-2"
              label
              text-color="red-lighten-1"
          >
            <v-icon start icon="mdi-label"></v-icon>
            High priority
          </v-chip>
          <v-row class="align-center ms-7 justify-end mr-3 text-grey-lighten-1">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-row>
        </v-row>
        <div class="text-h6 my-3"
             data-id="templateTaskTitle">
          $name
        </div>
      </div>
      <v-row class=" w-100% py-4 ps-4 align-center">
        <v-icon size="23">mdi-comment-outline</v-icon>
        <div class="ms-1">0</div>
        <v-row class="align-center ms-7 justify-end mr-3">
          <v-avatar color="blue-grey-lighten-4" size="30"></v-avatar>
          <v-btn icon="mdi-plus" size="30"></v-btn>
        </v-row>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup>

</script>

<style scoped>

</style>