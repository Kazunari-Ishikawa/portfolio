<template>
  <div id="app">
    <Header />
    <MainComponent />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    MainComponent,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
