<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <UiSectionContainer col description action>
    <template #title>{{ $t("home.about.title") }}</template>
    <template #description>{{ $t("home.about.description") }}</template>
    <template #action>
      <UButton
        :to="localePath('/about')"
        icon="i-heroicons-information-circle"
        size="md"
        color="primary"
        variant="solid"
        :label="$t('home.about.actions.learn_more_about_us')"
        :trailing="false"
        class="transition-all"
      />
      <UButton
        icon="i-heroicons-users-16-solid"
        size="md"
        color="gray"
        variant="solid"
        :label="$t('home.about.actions.our_team')"
        :trailing="false"
        class="transition-all"
      />
    </template>
    <template #content>
      <div class="xl:h-[600px] h-[500px] w-full">
        <img
          src="/img5.jpg"
          alt=""
          class="object-cover w-full h-full shadow-lg rounded-xl"
        />
      </div>
    </template>
  </UiSectionContainer>
</template>
