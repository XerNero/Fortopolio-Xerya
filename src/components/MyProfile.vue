<template>
  <div
    class="inline-block h-[120px] w-[120px] overflow-hidden rounded-full shadow-xl ring-4 ring-primary ring-offset-4 ring-offset-secondary"
  >
    <img
      :src="image"
      alt="My profile photo"
      class="aspect-square h-full w-full"
    />
  </div>
</template>

<script setup>
defineProps({
  image: String,
});
</script>
