<template>
  <v-card
    class="rounded-xl"
    color="#ffffff"
    :hover="true"
    :link="true"
    :to="{
      name: 'Item',
      params: { id: item.id },
    }"
  >
    <div class="card py-4 px-7">
      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="desc pt-4">
        <p>{{ item.desc }}</p>
      </div>
      <div class="user-name">
        <p>名前：{{ item.userName }}</p>
      </div>
      <div class="age">
        <p>年齢：{{ item.age }}</p>
      </div>
      <div class="gender">
        <p>{{ item.gender }}</p>
      </div>
      <div class="share-bar text-right">
        <v-icon>mdi-export-variant</v-icon>
        <v-icon>mdi-twitter</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
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