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