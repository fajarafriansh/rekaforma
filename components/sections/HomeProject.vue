<script setup lang="ts">
import type { ProjectsQueryVariables } from "#gql";

const localePath = useLocalePath();
const { locale } = useI18n();
const locales: string[] = [locale.value];

const option: ProjectsQueryVariables = {
  first: 4,
  locales: locales,
};

const projects = await useGQLQuery("projects", option);

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 10000);
});
</script>

<template>
  <UiSectionContainer col col-reverse description action>
    <template #title>{{ $t("home.projects.title") }}</template>
    <template #description>{{ $t("home.projects.description") }}</template>
    <template #action>
      <UButton
        :to="localePath('/projects')"
        icon="i-heroicons-information-circle"
        size="md"
        color="primary"
        variant="solid"
        :label="$t('home.projects.actions.find_out_more')"
        :trailing="false"
        class="transition-all"
      />
    </template>
    <template #content>
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="projects"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-lg shadow-lg group/container"
        arrows
        indicators
      >
        <div class="relative w-full xl:h-[600px] h-[500px]">
          <img
            :src="item?.node.coverImage?.url"
            :alt="item?.node.title"
            class="absolute top-0 object-cover w-full h-full -z-10"
            draggable="false"
          />
          <div
            class="invisible h-full p-12 transition-all duration-200 opacity-0 sm:p-24 group-hover/container:visible group-hover/container:opacity-100 backdrop-opacity-75 bg-gray-950/50"
          >
            <div class="flex items-center justify-center h-full mx-auto">
              <NuxtLink
                :to="localePath(`/projects/${item?.node.slug}`)"
                class="flex flex-col items-center justify-center group/link"
              >
                <h2
                  class="text-3xl font-bold tracking-tight text-center text-white transition-all group-hover/link:text-primary sm:text-4xl drop-shadow-lg"
                >
                  {{ item?.node.title }}
                </h2>
                <p
                  class="mt-6 text-lg tracking-tight text-center text-gray-100 transition-all group-hover/link:text-primary drop-shadow-lg"
                >
                  {{ item?.node.projectInformation?.projectLocation }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UCarousel>
    </template>
  </UiSectionContainer>
</template>
