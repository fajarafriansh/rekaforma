<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <UTooltip text="Switch language">
    <a
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center aspect-square w-8"
    >
      <span class="block w-5 h-5 text-center">
        {{ locale.name }}
      </span>
    </a>
  </UTooltip>
</template>