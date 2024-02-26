<script setup>
import { ref, nextTick } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'

const isOpened = ref(false)
const search_input = ref()

async function openModal() {
  isOpened.value = true
  await nextTick( () => {
    search_input.value.focus()
  })
  const body = document.body
  if (body) body.style.overflowY = "hidden"
}
const closeModal = () => {
  isOpened.value = false
  const body = document.body
  if (body) body.style.overflowY = "auto"
}

const { ctrl_slash, meta_slash } = useMagicKeys()
whenever([ctrl_slash, meta_slash], openModal)

const submitHandler = ()=>{
  //here you do whatever
}
</script>

<template>
  <!-- <button @click="openModal" class="btn btn-square"><Icon name="uil:search" size="24px" /></button> -->
  <modal :isOpened="isOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
    <template #header>
      <div class="relative flex items-center flex-none px-4 border-b border-grayscale-2">
        <form class="flex items-center flex-auto">
          <label class="w-6 h-6 " for="search-input"><Icon name="uil:search" size="20px" /></label>
          <input class="flex-auto ml-3 mr-4 text-sm h-14 focus:outline-none" id="search-input" type="search" placeholder="Search..." aria-label="Search..." autocomplete="off" autocorrect="off" autocapitalize="off" ref="search_input">
        </form>
        <button @click="closeModal">esc</button>
      </div>
    </template>
    <template #content>
      <div class="flex-auto overflow-auto">
        <div class="start-screen">
          <p class="px-6 py-16 text-center ">No recent searches</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end flex-none px-6 py-4 border-t border-grayscale-2">
        <div class="">
          <a href="https://www.algolia.com/ref/docsearch/?utm_source=tailwindcss.com&amp;utm_medium=referral&amp;utm_content=powered_by&amp;utm_campaign=docsearch" target="_blank" rel="noopener noreferrer">
            <span class="DocSearch-Label">Search by</span>
          </a>
        </div>
      </div>
    </template>
  </modal>
</template>
