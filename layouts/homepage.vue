<template>
  <header class="container absolute left-0 right-0 mx-auto">
    <LayoutsAppNavigation />
  </header>

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