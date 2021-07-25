<template>
  <div>
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
        process.env.VUE_APP_API_URL + `/item/${this.$route.params.id}`
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