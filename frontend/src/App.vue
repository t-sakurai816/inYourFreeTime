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
            <v-card height="200">
              <h5>{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <p>{{ item.userName }}</p>
              <p>{{ item.age }}</p>
              <p>{{ item.gender }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  components: {},

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
