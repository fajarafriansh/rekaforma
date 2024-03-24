<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <UTooltip text="Scroll to top">
    <UButton
      @click="scrollToTop"
      square
      color="gray"
      variant="solid"
      aria-label="Scroll to top"
    >
      <Icon name="uil:arrow-up" size="20px" />
    </UButton>
  </UTooltip>
</template>
