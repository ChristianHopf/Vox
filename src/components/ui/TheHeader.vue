<template>
  <header class="flex max-w-full justify-between px-4 py-2 bg-white">
    <h1 class="text-3xl franklin-gothic italic text-blue-600">Vox</h1>
    <div class="flex gap-4">
      <button>Action 1</button>
      <button>Action 2</button>
    </div>
  </header>
</template>

<style scoped>
@font-face {
  font-family: 'Franklin Gothic Medium Italic';
  src: url('./fonts/OPTIFranklinGothic-MediumIt.otf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

.franklin-gothic {
  font-family: 'Franklin Gothic Medium Italic', sans-serif;
}
</style>
