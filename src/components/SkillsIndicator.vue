<template>
  <div class="mb-3 font-medium">{{ name }}</div>
  <div class="h-6 w-full overflow-hidden rounded-full bg-secondary shadow-md">
    <div
      class="h-full rounded-full bg-primary shadow-md"
      :style="{ width: percentage }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  percentage: String,
});
</script>
