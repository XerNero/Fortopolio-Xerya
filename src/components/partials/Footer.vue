<template>
  <footer class="relative bg-primary py-12 text-center">
    <a
      href="#"
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-50 p-3 text-primary shadow-2xl ring-primary transition duration-150 ease-in-out hover:ring-4"
    >
      <ph-caret-up :size="32" weight="fill" />
    </a>
    <span>Made with ❤ by <b>Naufal Rizqullah</b></span>
  </footer>
</template>

<script setup>
import { PhCaretUp } from "@phosphor-icons/vue";
</script>
