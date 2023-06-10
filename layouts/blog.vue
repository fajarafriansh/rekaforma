<template>
  <div>
    <header>
      <h1>This is blog layout</h1>
    </header>
  </div>
  <div>
    <slot />
  </div>

  <div>
    <footer>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
      <h1>This is footer</h1>
    </footer>
  </div>
</template>

<style>
  .router-link-exact-active {
    color: #12b488;
  }
</style>