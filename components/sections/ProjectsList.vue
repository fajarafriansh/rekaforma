<script setup lang="ts">
import type { ProjectsQueryVariables } from '#gql'

const props = defineProps({
  perPage: {
    type: Number,
    default: 1
  }
})

const localePath = useLocalePath()
const { locale } = useI18n()
const locales: string[] = [locale.value]

const option : ProjectsQueryVariables = {
  first: props.perPage,
  locales: locales
}

const projects = await useGQLQuery("projects", option)
</script>

<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    <UiProjectCard
      v-for="project in projects"
      :slug="localePath(`/projects/${project?.node.slug}`)"
      :title="project?.node.title"
      :location="project?.node.projectInformation?.projectLocation"
      :cover-image-url="project?.node.coverImage?.url"
    />
  </div>
</template>