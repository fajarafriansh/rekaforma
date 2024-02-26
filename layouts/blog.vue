<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true,
})

const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#fcc175 0%,#fa9f42 50%,#f87f17 100%)" />
      <LayoutsAppNavigation />
    
      <main class="relative min-h-[calc(100vh-var(--header-height))]">
        <slot />
      </main>
    
      <LayoutsAppFooter />
      <!-- <ModalSearch /> -->
    </Body>
  </Html>
</template>
