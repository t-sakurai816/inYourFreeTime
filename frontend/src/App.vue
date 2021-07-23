<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="#ffffff">
      <v-col class="footer text-center" cols="12">
        &copy;
        <a
          href="https://github.com/t-sakurai816"
          target="_blank"
          rel="noopener noreferrer"
          >t-sakurai816</a
        >,
        <a
          href="https://github.com/yCroma"
          target="_blank"
          rel="noopener noreferrer"
          >yCroma</a
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.footer a {
  color: black;
  text-decoration: none;
}
</style>