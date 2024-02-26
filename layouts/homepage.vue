<template>
  <LayoutsAppNavigation />

  <main class="relative">
    <slot />
  </main>

  <!-- <LayoutsAppGalery /> -->
  <LayoutsAppFooter />
</template>

<style>
  body {
    overflow-x: hidden;
    width: 100%;
  }
</style>