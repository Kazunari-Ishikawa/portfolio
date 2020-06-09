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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
