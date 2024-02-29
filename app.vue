<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#fcc175 0%,#fa9f42 50%,#f87f17 100%)" />
    <LayoutsAppNavigation />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <LayoutsAppFooter />
  </div>
</template>