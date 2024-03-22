<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true,
});

const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang">
    <Body>
      <main class="relative">
        <slot />
      </main>
    </Body>
  </Html>
</template>
