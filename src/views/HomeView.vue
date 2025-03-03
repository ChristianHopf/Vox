<script setup lang="ts">
import Messages from '@/components/chat/Messages.vue';
import MessageInput from '@/components/chat/MessageInput.vue';
import TheSidebar from '@/components/sidebar/TheSidebar.vue';
import TheModal from '@/components/modals/TheModal.vue';

</script>

<template>
  <main class="flex w-full">
    <TheModal />
    <TheSidebar />
    <div
      class="flex flex-col w-full px-4 py-2 border-s-2 border-t-2 border-b-2 bg-white border-blue-600 rounded-s-3xl">
      <Messages />
      <br>
      <MessageInput />
      <MessageInput />
    </div>
  </main>
</template>
