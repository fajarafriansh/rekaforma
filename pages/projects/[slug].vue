<script setup lang="ts">
definePageMeta({
  layout: "blog",
});

useHead({
  title: "Project Single - Rekaforma",
});

import type { GetProjectQueryVariables } from "#gql";

// const localePath = useLocalePath()
const { locale } = useI18n();
const locales: string[] = [locale.value];

const { slug } = useRoute().params as GetProjectQueryVariables;

const option: GetProjectQueryVariables = {
  slug: slug,
  locales: locales,
};

const data = await useGQLQuery("get_project", option);
</script>

<template>
  <div>
    <div class="max-h-[calc(100vh-var(--header-height))] relative">
      <UiHeroContainer :image-url="data?.coverImage?.url">
        <UiHeroText
          :title="data?.title"
          :subtitle="data?.projectInformation?.projectLocation"
        />
      </UiHeroContainer>
    </div>
    <div class="py-24 sm:py-32">
      <div class="container flex flex-col gap-20 mx-auto lg:flex-row">
        <div class="lg:w-2/3">
          <p class="text-gray-700 text-base/7 dark:text-gray-100">
            {{ data?.description }}
          </p>
        </div>
        <UiProjectInfo
          class="lg:w-1/3"
          :client="data?.projectInformation?.client"
          :location="data?.projectInformation?.projectLocation"
          :start="data?.projectInformation?.startDate"
          :completion="data?.projectInformation?.endDate"
          :site-area="data?.projectInformation?.siteArea"
          :floor-area="data?.projectInformation?.floorArea"
          :services="data?.projectInformation?.services"
        />
      </div>
    </div>
    <div
      v-if="data?.projectGallery"
      class="py-24 bg-gray-50/50 dark:bg-gray-900 sm:py-32"
    >
      <div class="container mx-auto">
        <UiProjectGallery :image-urls="data?.projectGallery.image" />
      </div>
    </div>
  </div>
</template>
