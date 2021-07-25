<template>
  <header>
    <v-app-bar app hide-on-scroll color="#ffffff">
      <v-spacer></v-spacer>

      <v-toolbar-title>
        <div class="header-title">
          <a href="/">inYourFreeTime ~趣味の共有~</a>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-title a {
  color: black;
  text-decoration: none;
}
</style>