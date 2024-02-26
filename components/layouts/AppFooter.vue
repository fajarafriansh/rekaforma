<script setup>
import { ref } from 'vue'
import { navigations } from '~/store/navigations'

const localePath = useLocalePath()

const contacts = ref([
  { id: 1, contact: 'P: 1900 1088' },
  { id: 1, contact: 'E: info@rekaforma.xyz' },
  { id: 1, contact: 'A: Banda Aceh, IDN' }
])
</script>

<template>
  <footer id="footer" class="relative">
    <div class="border-t border-shark-100 dark:border-shark-900">
      <div class="container py-8 mx-auto lg:py-12">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid-flow-col gap-8 flex-flex-col lg:grid auto-cols-fr xl:col-span-2">
            <div>
              <h3>Navigation</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="nav in navigations" :key="nav.id" class="cursor-pointer">
                  <ULink :to="localePath(nav.slug)" class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50">{{ nav.title }}</ULink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Navigation</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="nav in navigations" :key="nav.id" class="cursor-pointer">
                  <ULink :to="localePath(nav.slug)" class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50">{{ nav.title }}</ULink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Navigation</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="nav in navigations" :key="nav.id">
                  <ULink :to="localePath(nav.slug)" class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50">{{ nav.title }}</ULink>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <form>
              <div>
                <div>
                  <div class="flex items-center content-center justify-between text-base">
                    <label for="" class="block font-semibold text-shark-700 dark:text-shark-200">Subscribe to our newsletter</label>
                  </div>
                  <p class="text-base text-shark-500 dark:text-shark-400">Stay updated on new releases and features, guides, and community updates.</p>
                </div>
                <div class="relative mt-3">
                  <div class="relative max-w-sm">
                    <UInput type="email" color="white" variant="outline" size="xl" placeholder="you@domain.com" />
                    <span class="absolute inset-y-0 end-0 flex items-center px-3.5"><!--[--><button type="submit" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-grayscale-7 hover:bg-grayscale-6 disabled:bg-grayscale-7 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-reka-2 inline-flex items-center"><!--[--><!--[--><!----><!--]--><!--[--><span class="">Subscribe</span><!--]--><!--[--><!----><!--]--><!--]--></button><!--]--></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-shark-100 dark:border-shark-900">
      <div class="container py-8 mx-auto lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
        <div class="flex items-center justify-center lg:flex-1 lg:justify-end gap-x-2 lg:order-3">
          <UiButtonInstagram />
          <UiButtonScrollToTop />
        </div>
        <div class="flex items-center justify-center mt-3 lg:mt-0 lg:order-2"></div>
        <div class="flex items-center justify-center flex-1 mt-3 lg:justify-start lg: gap-x-2 lg:mt-0 lg:order-1">
          <p class="text-sm">Copyright &copy; 2021-{{ new Date().getFullYear() }} Rekaforma</p>
        </div>
      </div>
    </div>
  </footer>
</template>
