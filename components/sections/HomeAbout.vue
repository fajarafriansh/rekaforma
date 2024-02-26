<script setup>
const localePath = useLocalePath()
</script>

<template>
  <UiSectionContainerCol>
    <template #title>Who We Are</template>
    <template #description>
      We love Vue Single-File Components as much as you do. Simple, intuitive and powerful, Nuxt lets you write Vue components in a way that makes sense. Every repetitive task is automated, so you can focus on writing your full-stack Vue application with confidence.
    </template>
    <template #action>
      <UButton
        :to="localePath('/about')"
        icon="i-heroicons-information-circle"
        size="md"
        color="primary"
        variant="solid"
        label="Learn more about us"
        :trailing="false"
        class="transition-all"
      />
      <UButton
        icon="i-heroicons-users-16-solid"
        size="md"
        color="gray"
        variant="solid"
        label="Our Team"
        :trailing="false"
        class="transition-all"
      />
    </template>
    <template #content>
      <div class="xl:h-[600px] h-[500px] w-full">
        <img src="/img5.jpg" alt="" class="object-cover w-full h-full shadow-lg rounded-xl">
      </div>
    </template>
  </UiSectionContainerCol>
</template>
