<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})

useHead({
  title: 'Project Single - Rekaforma'
})

import type { GetProjectQueryVariables } from '#gql'

// const localePath = useLocalePath()
const { locale } = useI18n()
const locales: string[] = [locale.value]

const { slug } = useRoute().params as GetProjectQueryVariables

const option : GetProjectQueryVariables = {
  slug: slug,
  locales: locales
}

const data = await useGQLQuery("get_project" ,option)
</script>

<template>
  <UiHeroContainer :image-url="data?.coverImage?.url">
    <UiHeroText
      :title="data?.title"
      :subtitle="data?.projectInformation?.projectLocation"
    />
  </UiHeroContainer>
  <div class="container mx-auto">
    
    <div class="max-w-3xl mx-auto">
      <!-- <div v-html="$md.render(data?.content.markdown)" class="pb-24 mt-12 prose dark:prose-dark">
      </div> -->
    </div>
  </div>
</template>
