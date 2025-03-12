<script setup lang="ts">
import Messages from '@/components/chat/Messages.vue';
import MessageInput from '@/components/chat/MessageInput.vue';
import TheSidebar from '@/components/sidebar/TheSidebar.vue';
import { ref } from 'vue';
import ConnectModal from '@/components/modals/ConnectModal.vue';
import Channels from '@/components/chat/Channels.vue';

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};

</script>

<template>
  <main class="flex w-full h-[calc(100vh-4rem)]">
    <ConnectModal v-if="isOpen" :onCloseModal="closeModal" />
    <TheSidebar :onOpenModal="openModal" :onCloseModal="closeModal" />
    <div
      class="flex flex-row gap-4 w-full h-full px-4 pb-4 border-s-2 border-t-2 border-b-2 bg-white border-blue-600 rounded-s-3xl">
      <Channels />
      <div class="flex flex-col">
        <div class="grow overflow-y-auto">
          <Messages />
        </div>
          <div>
            <MessageInput />
          </div>
      </div>
    </div>
  </main>
</template>
