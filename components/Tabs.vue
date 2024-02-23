<script setup>
import { ref, provide } from  "vue"

const activeTabHash = ref("")
const tabs = ref([])

provide("addTab", (tab) => {
  const count = tabs.value.push(tab)

  if (count === 1) {
    activeTabHash.value = tab.hash
  }
})
provide("activeTabHash", activeTabHash)
</script>

<template>
  <div class="">
    <ul class="flex gap-10 mb-12 flex-nowrap">
      <li
        class="text-3xl font-normal leading-tight cursor-pointer"
        :class="{
          '': tab.hash !== activeTabHash,
          'text-[#272a30]': tab.hash === activeTabHash,
        }"
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
