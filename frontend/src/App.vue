<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <Header />
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
import Header from "./components/Header.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    Header,
    ContentsCard,
  },

  data() {
    return {
      items: null,
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "/items")
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