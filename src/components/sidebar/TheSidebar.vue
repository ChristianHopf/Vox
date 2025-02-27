<script setup lang="ts">
import ServerItem from './ServerItem.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen min-w-xl bg-blue-200 ">
    <h1 class="text-xl text-center py-2">Servers</h1>

    <div class="flex flex-col items-center gap-4 px-4">
      <ul class="px-4 py-2 bg-white w-full rounded-lg">
        <ServerItem />
      </ul>
      <button type="button" class="text-xl text-white px-4 py-2 rounded-lg bg-blue-600">Add Server</button>
    </div>
  </div>
</template>
