<script setup lang="ts">
import { navigations } from "~/store/navigations";

const isOpen = ref(false);
const localePath = useLocalePath();
</script>

<template>
  <div>
    <UButton
      label="Open"
      @click="isOpen = true"
      square
      color="gray"
      variant="ghost"
    >
      <Icon name="ph:list" size="20px" />
    </UButton>

    <USlideover
      v-model="isOpen"
      :ui="{
        base: 'flex-none w-80 xl:w-full',
        overlay: { background: 'dark:bg-gray-700/85' },
        width: 'max-w-md w-80',
      }"
    >
      <div class="flex-col flex-1 p-10 flex-">
        <div class="flex items-center justify-between">
          <UiButtonLangSwitcher2 />
          <UButton
            label="Close"
            @click="isOpen = false"
            square
            color="black"
            variant="solid"
          >
            <Icon name="uil:times" size="20px" />
          </UButton>
        </div>
        <ul class="mt-10">
          <li v-for="nav in navigations" class="mb-4 ralative">
            <ULink
              :to="localePath(nav.slug)"
              @click="isOpen = false"
              active-class="text-primary"
              inactive-class="hover:text-primary"
              class="font-semibold text-base/10"
            >
              {{ $t(nav.title) }}
            </ULink>
          </li>
        </ul>
      </div>
    </USlideover>
  </div>
</template>
