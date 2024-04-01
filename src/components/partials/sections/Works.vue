<template>
  <section
    id="works"
    class="flex min-h-screen items-center justify-center bg-secondary"
  >
    <div class="w-full max-w-[1920px] px-3 py-24 md:px-12">
      <div class="space-y-6">
        <span class="border-l-4 border-primary px-6 text-xl font-bold">
          Works
        </span>

        <h1 class="text-4xl font-bold">Project yang saya kerjakan.</h1>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <template
            v-for="{ title, description, link, image, techStack } in projects"
          >
            <ProjectCard
              class="col-span-6 lg:col-span-4"
              :title="title"
              :description="description"
              :link="link"
              :image="image"
            >
              <template v-for="{ name, type, classIcon } in techStack">
                <TechLabel :name="name" :type="type" :classIcon="classIcon" />
              </template>
            </ProjectCard>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// images
import ImgSocMedApp from "../../../assets/teaser-sejarah-laptop.png";

// components
import ProjectCard from "../../ProjectCard.vue";
import TechLabel from "../../TechLabel.vue";

const projects = [
  {
    title: "None",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid adipisci odio praesentium porro. Ipsam iste facilis, officiis labore similique perferendis assumenda fugit praesentium veniam id laborum nisi. Cupiditate, fugiat exercitationem.",
    link: "https://google.com",
    image: ImgSocMedApp,
    techStack: [
      {
        name: "Php",
        type: "primary",
        classIcon: "devicon-php-plain",
      },
      {
        name: "Laravel",
        type: "warning",
        classIcon: "devicon-laravel-plain",
      },
      {
        name: "VueJS",
        type: "secondary",
        classIcon: "devicon-vuejs-plain",
      },
    ],
  },
];
</script>
