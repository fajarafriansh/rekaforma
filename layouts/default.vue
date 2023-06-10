<template>
  <header class="container mx-auto">
    <LayoutsAppNavigation />
    <LayoutsAppHeader />
  </header>

  <main class="container mx-auto py-16">
    <slot />
  </main>

  <LayoutsAppGalery />
  <LayoutsAppFooter />
</template>

<style>
  .router-link-exact-active {
    color: #12b488;
  }

  body {
    overflow-x: hidden;
    width: 100%;
  }
</style>