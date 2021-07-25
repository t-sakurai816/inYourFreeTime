<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import ContentsCard from "./components/ContentsCard.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",

  components: {
    Header,
    ContentsCard,
    Footer,
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