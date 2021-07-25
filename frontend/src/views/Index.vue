<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        @add="reload"
      >
        <ContentsCard :item="item" />
      </v-col>
    </v-row>
    <PostFABDialog />
  </v-container>
</template>

<script>
import axios from "axios";
import ContentsCard from "../components/ContentsCard.vue";
import PostFABDialog from "../components/PostFABDialog.vue";
export default {
  name: "Index",

  components: {
    ContentsCard,
    PostFABDialog,
  },

  data() {
    return {
      items: null,
    };
  },

  watch: {
    items: "fetchdata",
  },

  mounted() {
    this.fetchdata();
  },

  methods: {
    fetchdata() {
      const url = new URL(process.env.VUE_APP_API_URL + `/items`);
      axios
        .get(url.href)
        .then((response) => (this.items = response.data))
        .catch((error) => {
          console.log("ERR!", error);
        });
    },
    reload() {
      // 子からのemitで発火
      this.fetchdata();
    },
  },
};
</script>