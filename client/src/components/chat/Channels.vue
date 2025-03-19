<script setup>
import { stringify } from 'uuid';

const props = defineProps({
});
</script>

<template>
  <div class="flex flex-col h-full">
    <h2>Channels</h2>
    <ul>
      <li>
        <p>#test</p>
        <p>#welcome</p>
        <p>#general</p>
      </li>
    </ul>
  </div>
</template>
