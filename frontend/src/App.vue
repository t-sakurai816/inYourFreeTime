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
      <v-container>
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="4">
            <ContentsCard :item="item" />
          </v-col>
        </v-row>
      </v-container>
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