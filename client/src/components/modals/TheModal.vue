<script setup lang="ts">

const props = defineProps({
  onCloseModal: {
    type: Function,
    required: true,
  }
});

const handleCloseModal = () => {
  props.onCloseModal();
}

</script>

<template>
  <div @click="handleCloseModal"
    class="absolute flex justify-center items-center min-h-screen w-full bg-black opacity-50">
  </div>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col
    items-center gap-2 bg-blue-200 text-center opacity-100 px-4 py-2 rounded-md">
    <h2 class="m-0">Address</h2>
    <input type="text" class="bg-white border-2 border-blue-600 rounded-md" />
    <button type="button"
      class="text-white bg-blue-600 hover:bg-blue-700 hover:ring-2 hover:ring-blue-300 hover:cursor-pointer transition-all duration:200 px-2 py-1 rounded-md">Add</button>
  </div>
</template>
