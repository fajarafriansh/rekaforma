<script setup lang="ts">
import type { Button } from "#ui/types";

const commandPaletteRef = ref();

const isOpen = ref(false);

const closeButton = computed(() =>
  commandPaletteRef.value?.query
    ? {
        icon: "i-heroicons-x-mark",
        color: "black",
        variant: "ghost",
        size: "lg",
        padded: false,
      }
    : null
);

defineShortcuts({
  ctrl_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value;
    },
  },
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value;
    },
  },
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      isOpen.value = false;
    },
  },
});
</script>

<template>
  <div>
    <UTooltip :text="$t('nav.tooltip.search')" :shortcuts="['⌘', 'K']">
      <UButton
        icon="i-heroicons-magnifying-glass-20-solid"
        color="gray"
        variant="ghost"
        aria-label="Search"
        @click="isOpen = true"
      />
    </UTooltip>

    <UModal
      v-model="isOpen"
      :ui="{ container: 'items-start sm:items-start sm:pt-20' }"
    >
      <UCommandPalette
        ref="commandPaletteRef"
        :close-button="(closeButton as Button)"
      />
    </UModal>
  </div>
</template>
