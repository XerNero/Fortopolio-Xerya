<template>
  <div class="inline-block overflow-hidden rounded-md bg-base shadow-lg">
    <img
      :src="image"
      alt="Card Image"
      class="aspect-video max-h-[400px] w-full object-cover object-center"
    />

    <div class="divide-y-2 divide-secondary px-3">
      <div class="space-y-3 py-3">
        <div class="flex items-center justify-between">
          <div class="text-xl font-medium">{{ title }}</div>
          <a v-if="link" :href="link" target="_blank">
            <i
              class="devicon-github-original text-xl transition duration-150 ease-in-out hover:text-primary"
            >
            </i>
          </a>
        </div>
        <div class="flex flex-wrap gap-1">
          <slot />
        </div>
      </div>

      <p class="py-3 text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
  image: String,
});
</script>
