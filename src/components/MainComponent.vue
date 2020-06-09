<template>
  <main id="main" class>
    <!-- HERO -->
    <Hero />
    <!-- WORKS -->
    <Works />
    <!-- PROFILE -->
    <Profile />
  </main>
</template>

<script>
import Hero from "./Hero";
import Works from "./Works";
import Profile from "./Profile";

export default {
  name: "MainComponent",
  components: {
    Hero,
    Works,
    Profile
  }
};
</script>

<style scoped>
</style>
