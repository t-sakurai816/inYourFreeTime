<template>
  <div>
    <v-main>
      <v-container>
        <ContentsCard :item="item" />
        <div class="text-center pt-10">
          <v-btn href="/">TOPへ戻る</v-btn>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";
import ContentsCard from "../components/ContentsCard.vue";
export default {
  name: "Item",

  components: {
    ContentsCard,
  },

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