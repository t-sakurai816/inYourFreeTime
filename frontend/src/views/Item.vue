<template>
  <div>
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
        <div>test</div>
        <p>{{ $route.params.id }}</p>
        <p>{{ item }}</p>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Item",

  data() {
    return {
      item: null,
      error: null,
    };
  },

  created() {
    this.fetchdata();
  },

  watch: {
    $route: "fetchdata",
  },

  methods: {
    fetchdata() {
      const url = new URL(
        `https://8xop5xhioh.execute-api.ap-northeast-1.amazonaws.com/stg/item/${this.$route.params.id}`
      );
      axios
        .get(url.href)
        .then((response) => (this.item = response.data))
        .catch((error) => {
          console.log("ERR!", error);
          this.error = error.toString();
        });
    },
  },
};
</script>