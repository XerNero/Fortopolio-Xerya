<template>
  <section
    id="skills"
    class="flex min-h-screen items-center justify-center bg-base"
  >
    <div class="w-full max-w-[1920px] px-3 py-24 md:px-12">
      <div class="space-y-6">
        <span class="border-l-4 border-primary px-6 text-xl font-bold">
          Skills
        </span>

        <h1 class="text-4xl font-bold">Keterampilan yang saya miliki.</h1>

        <div class="grid gap-6 md:grid-cols-12">
          <div class="col-span-6">
            <h2 class="mb-6 text-xl font-bold">Frontend development</h2>

            <div class="space-y-3">
              <div v-for="skill in skills.frontend">
                <SkillsIndicator
                  :name="skill.name"
                  :percentage="skill.percentage"
                />
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <h2 class="mb-6 text-xl font-bold">Backend development</h2>

            <div class="space-y-3">
              <div v-for="skill in skills.backend">
                <SkillsIndicator
                  :name="skill.name"
                  :percentage="skill.percentage"
                />
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <h2 class="mb-6 text-xl font-bold">Databases</h2>

            <div class="space-y-3">
              <div v-for="skill in skills.databases">
                <SkillsIndicator
                  :name="skill.name"
                  :percentage="skill.percentage"
                />
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <h2 class="mb-6 text-xl font-bold">Ekstra Skill</h2>

            <div class="space-y-3">
              <div v-for="skill in skills.EkstraSkill">
                <SkillsIndicator
                  :name="skill.name"
                  :percentage="skill.percentage"
                />
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <h2 class="mb-6 text-xl font-bold">Languages</h2>

            <div class="space-y-3">
              <div v-for="skill in skills.languages">
                <SkillsIndicator
                  :name="skill.name"
                  :percentage="skill.percentage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillsIndicator from "../../SkillsIndicator.vue";

const skills = {
  frontend: [
    {
      name: "Vue",
      percentage: "25%",
    },
    {
      name: "HTML",
      percentage: "91%"
    },
    {
      name: "CSS",
      percentage: "90%",
    },
    {
      name: "TailwindCSS",
      percentage: "90%",
    },
    {
      name: "Bootstrap",
      percentage: "90%",
    },
  ],
  backend: [
    {
      name: "Php",
      percentage: "70%",
    },
  ],
  databases: [
    {
      name: "MySQL",
      percentage: "15%",
    },
  ],
  EkstraSkill: [
    {
      name: "Digital Marketing",
      percentage: "40%",
    },
  ],
  languages: [
    {
      name: "English",
      percentage: "75%",
    },
    {
      name: "Indonesia",
      percentage: "95%",
    },
  ],
};
</script>
