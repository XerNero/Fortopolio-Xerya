<template>
  <nav
    class="relative flex h-[60px] items-center justify-between px-3 md:px-12"
  >
    <div class="text-2xl font-black">
      <a href="/">
        <span class="mr-3 text-primary">&#47;</span>Xerya
      </a>
    </div>

    <ul class="hidden gap-6 md:flex">
      <li v-for="{ name, link } in navLinks">
        <a
          :href="link"
          class="inline-flex items-center border-b-4 border-transparent px-1 pb-3 pt-4 font-medium leading-5 transition duration-150 ease-in-out hover:border-primary"
        >
          {{ name }}
        </a>
      </li>
    </ul>

    <div class="block md:hidden">
      <button
        @click="isResponsive = !isResponsive"
        class="rounded-md bg-secondary p-2 shadow-md transition duration-150 ease-in-out hover:bg-primary"
      >
        <Bars3Icon v-if="!isResponsive" />
        <XMarkIcon v-else />
      </button>

      <div
        v-if="isResponsive"
        class="absolute left-0 top-[60px] block w-full bg-base text-center shadow-xl"
      >
        <ul>
          <li v-for="{ name, link } in navLinks">
            <a
              :href="link"
              class="block bg-base px-6 py-4 font-medium leading-5 transition duration-150 ease-in-out hover:bg-primary"
            >
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";

import { ref } from "vue";

const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Works",
    link: "#works",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const isResponsive = ref(false);
</script>
