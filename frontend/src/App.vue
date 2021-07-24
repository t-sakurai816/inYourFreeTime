<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <header>
      <v-app-bar app hide-on-scroll color="#ffffff">
        <v-spacer></v-spacer>

        <v-toolbar-title>inYourFreeTime ~趣味の共有~</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
    </header>

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
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import ContentsCard from "./components/ContentsCard.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    ContentsCard,
  },

  data() {
    return {
      items: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://8xop5xhioh.execute-api.ap-northeast-1.amazonaws.com/stg/items"
      )
      .then((response) => (this.items = response.data))
      .catch((error) => {
        console.log("ERR!", error);
      });
  },
};
</script>

<style scoped>
.footer a {
  color: black;
  text-decoration: none;
}
</style>