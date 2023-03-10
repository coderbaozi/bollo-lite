<script lang='ts' setup>
import Thefooter from "@/components/Thefooter.vue"
</script>

<template>
  <div class="home">
    <div class="logo">
      <img class='w-24 h-24' src="/bollo.png" alt="Bollo Lite" />
    </div>
    <header class="header text-xl tracking-normal dark:text-neutral-50">BOLLO LITE</header>
    <p class="p-3">
      <em class="text-xs font-extralight dark:text-zinc-50">Web Application Rapid Development Template</em>
    </p>
    <Thefooter/>
  </div>
</template>

<style scoped>
.home {
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  padding: 32px 16px;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header {
  font-family: BulletproofItalic;
}
</style>