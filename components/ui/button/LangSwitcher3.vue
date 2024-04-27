<script setup>
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// const items = locales.value;

const items = [
  [
    {
      label: "English",
      to: switchLocalePath("en"),
    },
    {
      label: "Indonesian",
      to: switchLocalePath("id"),
    },
  ],
];
</script>

<template>
  <UDropdown
    :items="items"
    mode="hover"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton icon="i-heroicons-language" color="gray" variant="ghost" />
    <!-- <template #item="{ item }">
      <span class="truncate">{{ item.name }}</span>
    </template> -->
  </UDropdown>
</template>
