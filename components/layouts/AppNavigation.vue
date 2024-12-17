<script setup>
import { navigations } from "~/store/navigations";

const localePath = useLocalePath();
</script>

<template>
  <header
    class="sticky top-0 z-50 -mb-px border-b border-gray-100 bg-white/75 dark:bg-gray-950/80 backdrop-blur lg:mb-0 dark:border-gray-800 lg:border-0"
  >
    <nav
      class="container flex items-center justify-between w-full h-[--header-height] mx-auto"
    >
      <div class="flex items-center lg:flex-1">
        <UiLogo />
      </div>
      <ul class="items-center hidden lg:flex gap-x-8">
        <li v-for="nav in navigations" class="ralative">
          <ULink
            :to="localePath(nav.slug)"
            active-class="text-primary"
            inactive-class="hover:text-primary"
            class="font-semibold text-sm/6"
          >
            {{ $t(nav.title) }}
          </ULink>
        </li>
      </ul>
      <div class="flex items-center justify-end gap-1 lg:flex-1">
        <UiButtonLangSwitcher2 class="hidden mr-4 lg:block" />
        <AppSearchPallet />
        <UiButtonColorMode />
        <UiButtonInstagram />
        <UiMobileMenu class="flex lg:hidden" />
      </div>
    </nav>
  </header>
</template>
