<template>
  <header class="container absolute left-0 right-0 mx-auto">
    <LayoutsAppNavigation />
  </header>

  <main class="container mx-auto">
    <slot />
  </main>
  
  <LayoutsAppFooter />
</template>

<style>
  body {
    overflow-x: hidden;
    width: 100%;
  }
</style>