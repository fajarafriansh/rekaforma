<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>
  <div>
    <div class="flex gap-1">
      <UTooltip text="English">
        <a
          href="#"
          @click.prevent.stop="setLocale('en')"
          class="focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium text-sm gap-x-1.5 hover:text-primary focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          :class="{
            'text-primary': locale == 'en',
            'text-gray-700 dark:text-gray-200': locale != 'en',
          }"
        >
          <span class="block w-5 h-5 text-center"> EN </span>
        </a>
      </UTooltip>
      <UDivider orientation="vertical" />
      <UTooltip text="Bahasa Indonesia">
        <a
          href="#"
          @click.prevent.stop="setLocale('id')"
          class="focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium text-sm gap-x-1.5 hover:text-primary focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          :class="{
            'text-primary': locale == 'id',
            'text-gray-700 dark:text-gray-200': locale != 'id',
          }"
        >
          <span class="block w-5 h-5 text-center"> ID </span>
        </a>
      </UTooltip>
    </div>
  </div>
</template>
