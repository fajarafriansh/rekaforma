<script setup lang="ts">
import { expertises } from "~/store/expertises";
</script>

<template>
  <UiSectionContainer>
    <template #title>{{ $t("home.expertise.title") }}</template>
    <template #content>
      <UiSpotlight
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 group"
      >
        <UiSpotlightCard v-for="expertise in expertises">
          <!-- removed overflow-hidden -->
          <div
            class="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20"
          >
            <div class="mb-2">
              <Icon :name="expertise.icon" size="32px" />
            </div>
            <p
              class="text-base font-bold text-gray-900 truncate dark:text-white"
            >
              {{ $t(expertise.expertise) }}
            </p>
            <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
              {{ $t(expertise.description) }}
            </p>
          </div>
        </UiSpotlightCard>
      </UiSpotlight>
    </template>
  </UiSectionContainer>
</template>
