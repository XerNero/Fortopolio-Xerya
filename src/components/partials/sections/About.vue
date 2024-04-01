<template>
  <section id="about" class="flex min-h-screen items-center justify-center bg-secondary">
    <div class="grid w-full max-w-[1920px] grid-cols-1 items-center gap-6 px-3 py-24 md:grid-cols-12 md:px-12">
      <div class="space-y-6 md:col-span-6">
        <span class="border-l-4 border-primary px-6 text-xl font-bold">
          About Me
        </span>

        <h1 class="text-4xl font-bold">
          Saya memulai mengembangkan 
          <br />
          website sejak tahun 2021
        </h1>

        <p class="text-justify text-gray-400">
          Sejak tahun 2021 saya mulai belajar pemrograman dengan proyek web kecil menggunakan HTML, CSS. Dan bagian terbesar dari pemrograman yang saya sukai adalah pengembangan web. Saya selalu tertarik dengan cara kerja internet dan teknologi yang digunakan di beberapa perusahaan raksasa di industri teknologi seperti facebook, tiktok, dan sebagainya.
        </p>
      </div>

      <div class="space-y-6 md:col-span-6">
        <div class="flex justify-center md:justify-start">
          <MyProfile :image="ImgMyProfile" />
        </div>

        <div class="flex justify-center gap-6 md:justify-start">
          <div class="inline-flex items-end gap-3">
            <span class="text-6xl font-bold text-primary">2</span>
            <div>
              Successful
              <br />
              projects
            </div>
          </div>
        </div>

        <p class="text-justify text-gray-400">
          Saya telah berhasil membuat 2 project selama ini. Tetapi saya akan mencantumkan yang menurut saya terbaik
          <a href="#works" class="text-primary">works section</a>.
        </p>

        <br>
        <span class="text-xl font-bold">
          Hobby
          </span>
          <li>Trading</li>
          <li>Bisnis Sampingan</li>
      </div>
    </div>
  </section>
</template>

<script setup>
import MyProfile from "../../MyProfile.vue";

import ImgMyProfile from "../../../assets/my-profile.png";
</script>
../../TechCard.vue
