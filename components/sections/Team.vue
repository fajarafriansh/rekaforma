<script setup lang="ts">
import type { GetPeopleQueryVariables } from "#gql";

const localePath = useLocalePath();
const { locale } = useI18n();
const locales: String[] = [locale.value];

const option: GetPeopleQueryVariables = {
  locales: locales,
};

const people = await useGQLQuery("get_people", option);
</script>

<template>
  <UiSectionContainer description>
    <template #title>{{ $t("about.team.title") }}</template>
    <template #description>
      <p>
        Meet our team of architects and engineers.
        <br />Our personal and collective commitment to our team, partnerships,
        and community <br />ensures that we are able to serve our clients with
        the highest of standards.
      </p>
    </template>
    <template #content>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <UiTeamCard
          v-for="person in people"
          :name="person?.name"
          :role="person?.role"
          :cover-image-url="person?.photo?.url"
        />
      </div>
    </template>
  </UiSectionContainer>
</template>
