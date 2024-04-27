<script setup lang="ts">
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};

useSeoMeta({
  title: "Page not found",
});
</script>

<template>
  <div>
    <LayoutsAppNavigation />
    <NuxtLayout>
      <div class="container flex flex-col items-center mx-auto">
        <div
          class="w-full min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center"
        >
          <p
            v-if="error!.statusCode === 404"
            class="text-xl font-semibold sm:text-2xl text-primary"
          >
            404
          </p>
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Error
          </h1>
          <p
            class="mt-6 text-center text-gray-500 text-base/7 dark:text-gray-300"
          >
            {{ error!.message }}
          </p>
          <div class="flex items-center justify-center mt-10 gap-x-6">
            <UButton
              @click="handleError"
              size="md"
              color="primary"
              variant="solid"
              label="Go back home"
              class="transition-all"
            />
          </div>
        </div>
      </div>
    </NuxtLayout>
    <LayoutsAppFooter />
  </div>
</template>
