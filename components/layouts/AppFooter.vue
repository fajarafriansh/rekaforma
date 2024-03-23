<script setup>
import { ref } from "vue";
import { navigations } from "~/store/navigations";

const localePath = useLocalePath();

const enterprise = ref([
  { menu: "footer.enterprise.support", slug: "/" },
  { menu: "footer.enterprise.career", slug: "/" },
  { menu: "footer.enterprise.clients", slug: "/" },
]);

const site_policies = ref([
  { menu: "footer.site_policies.site_policy", slug: "/" },
  { menu: "footer.site_policies.social_media_policy", slug: "/" },
  { menu: "footer.site_policies.disclaimer", slug: "/" },
]);
</script>

<template>
  <footer id="footer" class="relative">
    <div class="border-t border-shark-100 dark:border-shark-900">
      <div class="container py-8 mx-auto lg:py-12">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div
            class="grid-flow-col gap-8 flex-flex-col lg:grid auto-cols-fr xl:col-span-2"
          >
            <div>
              <h3
                class="font-semibold text-sm/6 text-shark-900 dark:text-white"
              >
                {{ $t("footer.navigations") }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="nav in navigations" class="cursor-pointer">
                  <ULink
                    :to="localePath(nav.slug)"
                    class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50"
                  >
                    {{ $t(nav.title) }}
                  </ULink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                class="font-semibold text-sm/6 text-shark-900 dark:text-white"
              >
                {{ $t("footer.enterprise.enterprise") }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="menu in enterprise" class="cursor-pointer">
                  <ULink
                    :to="localePath(menu.slug)"
                    class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50"
                  >
                    {{ $t(menu.menu) }}
                  </ULink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                class="font-semibold text-sm/6 text-shark-900 dark:text-white"
              >
                {{ $t("footer.site_policies.site_policies") }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="menu in site_policies">
                  <ULink
                    :to="localePath(menu.slug)"
                    class="text-sm text-shark-600 dark:text-shark-300 hover:text-shark-900 dark:hover:text-shark-50"
                  >
                    {{ $t(menu.menu) }}
                  </ULink>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <form>
              <div>
                <div>
                  <div
                    class="flex items-center content-center justify-between text-base"
                  >
                    <label
                      for=""
                      class="block font-semibold text-shark-700 dark:text-shark-200"
                    >
                      {{ $t("footer.newsletter.title") }}
                    </label>
                  </div>
                  <p class="text-base text-shark-500 dark:text-shark-400">
                    {{ $t("footer.newsletter.description") }}
                  </p>
                </div>
                <div class="relative mt-3">
                  <div class="relative max-w-sm">
                    <UInput
                      type="email"
                      color="white"
                      variant="outline"
                      size="xl"
                      placeholder="you@domain.com"
                    />
                    <span
                      class="absolute inset-y-0 end-0 flex items-center px-3.5"
                    >
                      <UButton
                        color="black"
                        variant="solid"
                        size="xs"
                        label="Subscribe"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-shark-100 dark:border-shark-900">
      <div
        class="container py-8 mx-auto lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
      >
        <div
          class="flex items-center justify-center lg:flex-1 lg:justify-end gap-x-2 lg:order-3"
        >
          <UiButtonInstagram />
          <UiButtonScrollToTop />
        </div>
        <div
          class="flex items-center justify-center mt-3 lg:mt-0 lg:order-2"
        ></div>
        <div
          class="flex items-center justify-center flex-1 mt-3 lg:justify-start lg: gap-x-2 lg:mt-0 lg:order-1"
        >
          <p class="text-sm">
            Copyright &copy; 2021-{{ new Date().getFullYear() }} Rekaforma
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
