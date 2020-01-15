<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <div>
        <router-view />
      </div>
      <main-footer />
    </div>
  </div>
</template>
<script>
  import MainFooter from "./layout/MainFooter";
  export default {
    components: {MainFooter}
  }
</script>