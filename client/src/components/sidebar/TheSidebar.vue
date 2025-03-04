<script setup lang="ts">
import ServerItem from './ServerItem.vue';
const props = defineProps({
  onOpenModal: {
    type: Function,
    required: true,
  },
  onCloseModal: {
    type: Function,
    required: true,
  },
});

const handleOpenModal = () => {
  props.onOpenModal();
}

// const handleCloseModal = () => {
//   props.onCloseModal();
// }

</script>

<template>
  <div class="flex flex-col md:min-w-lg bg-blue-200">
    <h1 class="text-xl text-center py-2">Servers</h1>

    <div class="flex flex-col items-center gap-4 px-4">
      <ul class="px-4 py-2 bg-white w-full rounded-lg">
        <ServerItem />
      </ul>
      <button @click="handleOpenModal" type="button" class="text-xl text-white bg-blue-600 hover:bg-blue-700 hover:ring-2 hover:ring-blue-300 hover:cursor-pointer transition-all duration:200 px-4 py-2 rounded-md">Add
        Server</button>
    </div>
  </div>
</template>
