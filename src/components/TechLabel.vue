<template>
  <div :class="color">
    <i :class="classIcon"></i>
    {{ name }}
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  classIcon: String,
  type: {
    default: "primary",
    type: String,
  },
});

const color = computed(() => {
  return {
    primary:
      "inline-flex items-center gap-1 rounded-md border border-blue-300 bg-blue-200 bg-opacity-20 px-2 py-1 text-xs font-medium text-blue-300 shadow-sm",
    secondary:
      "inline-flex items-center gap-1 rounded-md border border-gray-300 bg-gray-200 bg-opacity-20 px-2 py-1 text-xs font-medium text-gray-300 shadow-sm",
    warning:
      "inline-flex items-center gap-1 rounded-md border border-orange-300 bg-orange-200 bg-opacity-20 px-2 py-1 text-xs font-medium text-orange-300 shadow-sm",
    success:
      "inline-flex items-center gap-1 rounded-md border border-green-300 bg-green-200 bg-opacity-20 px-2 py-1 text-xs font-medium text-green-300 shadow-sm",
  }[props.type];
});
</script>
