<template>
  <v-card>
    <div class="title">{{ item.title }}</div>
    <div class="desc">{{ item.desc }}</div>
    <div class="user-name">{{ item.userName }}</div>
    <div class="age">{{ item.age }}</div>
    <div class="gender">{{ item.gender }}</div>
    <div class="share-bar">
      <v-icon>mdi-export-variant</v-icon>
      <v-icon>mdi-twitter</v-icon>
    </div>
  </v-card>
</template>

<script>
import { mdiExportVariant } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
export default {
  name: "ContentsCard",
  props: {
    item: {
      // type: JSON,
      default: "",
    },
  },
  item: {},
};
</script>