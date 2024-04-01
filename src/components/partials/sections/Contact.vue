<template>
  <section
    id="contact"
    class="flex min-h-screen items-center justify-center bg-base"
  >
    <div class="w-full max-w-[1920px] px-3 py-24 md:px-12">
      <div class="space-y-6">
        <span class="border-l-4 border-primary px-6 text-xl font-bold">
          Contact
        </span>

        <h1 class="text-4xl font-bold">Contact Me</h1>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div class="col-span-6">
            <form
              class="space-y-6"
              name="contact"
              action="https://formspree.io/f/xaygywvq"
              method="POST"
            >
              <div class="space-y-3">
                <label for="name">Name</label>
                <input
                  id="name"
                  name="name"
                  class="w-full rounded-md bg-secondary p-3 outline-none outline-offset-4 focus:outline-primary"
                  type="text"
                  required
                />
              </div>
              <div class="space-y-3">
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  class="w-full rounded-md bg-secondary p-3 outline-none outline-offset-4 focus:outline-primary"
                  type="email"
                  required
                />
              </div>
              <div class="space-y-3">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full rounded-md bg-secondary p-3 outline-none outline-offset-4 focus:outline-primary"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-md bg-primary px-3 py-2 transition duration-150 ease-in-out hover:bg-opacity-80"
              >
                Send
              </button>
            </form>
          </div>

          <div class="col-span-6 space-y-6">
            <div class="flex items-center gap-6">
              <ph-map-pin :size="32" weight="fill" />
              Jl. Rambutan Sidomulyo Timur
            </div>
            <div class="flex items-center gap-6">
              <ph-phone :size="32" weight="fill" />
              <a
                href="tel:+6285157792187"
                class="transition duration-150 ease-in-out hover:text-primary"
              >
                +6285157792187
              </a>
            </div>
            <div class="flex items-center gap-6">
              <ph-envelope :size="32" weight="fill" />
              <a
                href="mailto:xerya072@gmail.com"
                class="transition duration-150 ease-in-out hover:text-primary"
              >
                xerya072@gmail.com
              </a>
            </div>

            <h2 class="text-center text-2xl font-bold uppercase">Social Media</h2>

            <hr class="h-[2px] border-0 bg-secondary" />

            <div class="flex justify-center gap-3">
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
              <!-- <a
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
    </div>
  </section>
</template>

<script setup>
import {
  PhMapPin,
  PhPhone,
  PhEnvelope,
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
