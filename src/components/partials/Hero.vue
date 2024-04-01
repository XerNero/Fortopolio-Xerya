<template>
  <header
    id="home"
    class="flex min-h-[calc(100vh-60px)] items-center justify-center"
  >
    <div
      class="grid w-full max-w-[1920px] grid-cols-1 px-3 text-center md:gap-6 md:px-12 lg:grid-cols-2 lg:text-left"
    >
      <div class="flex flex-col justify-center gap-6 py-6">
        <h1 class="text-4xl font-bold md:text-6xl">
          Hallo saya <span class="text-primary">Naufal Rizqullah</span>, seorang Web Developer dan Digital Marketing
        </h1>

        <p class="text-gray-400">
          Saya seorang programmer yang berbasis di Indonesia yang fokus pada pengembangan front-end, dan sekarang saya mencoba fokus pada back-end juga.
        </p>
      </div>

      <div class="flex flex-col justify-center divide-y-2 divide-secondary">
        <div class="space-y-6 py-6">
          <h2 class="text-2xl font-bold uppercase">About Me</h2>

          <p class="text-justify text-gray-400">
            Saya lahir dan besar di Riau. Riau terletak di provinsi Riau, Indonesia, dan terkenal dengan kekayaan sejarahnya, termasuk sebagai ibu kota Pekanbaru dan menjadi pusat Kota Riau. Saya berharap dapat melihat Anda di kampung halaman saya.
          </p>

          <a
            href="#about"
            class="inline-flex gap-3 border-b-4 pb-1 uppercase transition duration-150 ease-in-out hover:border-primary hover:text-primary"
          >
            Learn More
            <ArrowRightIcon />
          </a>
        </div>

        <div class="space-y-6 py-6">
          <h2 class="text-2xl font-bold uppercase">My Education</h2>

          <p class="text-justify text-gray-400">
            Saat ini saya sedang menyelesaikan Sarjana di Universitas Islam Riau (UIR) (2022-Sekarang) untuk mendapatkan gelar ST, sebelumnya saya bersekolah di MAN 1 Kempar (2019-2022) provinsi Riau.
          </p>
        </div>

        <div class="space-y-6 py-6">
          <h2 class="text-2xl font-bold uppercase">Social Media</h2>

          <div class="inline-flex flex-wrap gap-3">
            <!-- <a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhFacebookLogo id="icon" weight="fill" />
            </a>
            <a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhGithubLogo id="icon" weight="fill" />
            </a> -->
            <a
              href="https://www.instagram.com/xer.nero?igsh=MTRrdm5nOXB2aW9xZg%3D%3D&utm_source=qr"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhInstagramLogo id="icon" weight="fill" />
            </a>
            <!--<a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhLinkedinLogo id="icon" weight="fill" />
            </a>
            <a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhYoutubeLogo id="icon" weight="fill" />
            </a>
            <a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhTwitterLogo id="icon" weight="fill" />
            </a>
            <a
              href="#"
              class="transition duration-150 ease-in-out hover:text-primary"
            >
              <PhBehanceLogo id="icon" weight="fill" />
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

// icons
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import {
  PhFacebookLogo,
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhYoutubeLogo,
  PhTwitterLogo,
  PhBehanceLogo,
  PhFile,
  PhPhoneCall,
} from "@phosphor-icons/vue";
</script>
