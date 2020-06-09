<template>
  <main id="main" class>
    <!-- HERO -->
    <Hero />
    <!-- WORKS -->
    <Works />
    <!-- PROFILE -->
    <Profile />
    <!-- CONTACT -->
    <Contact />
  </main>
</template>

<script>
import Hero from "./Hero";
import Works from "./Works";
import Profile from "./Profile";
import Contact from "./Contact";

export default {
  name: "MainComponent",
  components: {
    Hero,
    Works,
    Profile,
    Contact
  }
};
</script>

<style scoped>
</style>
