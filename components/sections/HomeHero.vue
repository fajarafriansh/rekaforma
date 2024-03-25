<script setup lang="ts">
import type { FeaturedProjectsQueryVariables } from "#gql";

const localePath = useLocalePath();
const { locale } = useI18n();
const locales: string[] = [locale.value];

const option: FeaturedProjectsQueryVariables = {
  first: 3,
  locales: locales,
};

const projects = await useGQLQuery("featured_projects", option);

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
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="projects"
    :ui="{ item: 'basis-full' }"
    class="overflow-hidden max-h-[calc(100vh-var(--header-height))]"
    indicators
  >
    <UiHeroContainer
      :image-url="item?.node.coverImage?.url"
      :title="item?.node.title"
    >
      <NuxtLink
        :to="localePath(`/projects/${item?.node.slug}`)"
        class="flex flex-col group/herolink"
      >
        <UiHeroText
          :title="item?.node.title"
          :subtitle="item?.node.projectInformation?.projectLocation"
        />
      </NuxtLink>
    </UiHeroContainer>
  </UCarousel>
</template>
