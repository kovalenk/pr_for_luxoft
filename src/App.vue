<template>
  <div>
    <header-name />
    <main-name />
    <footer-name />
  </div>
</template>

<script>
// import FooterName from "@/partials/FooterName";
// import HeaderName from "@/partials/HeaderName";
import MainName from "@/examples/Main";

export default {
  name: 'App',
  components: {
    FooterName,
    MainName,
    HeaderName
  }
}
</script>

<style lang="scss">
  @import '~@/assets/scss/style';
</style>
