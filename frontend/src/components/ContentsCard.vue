<template>
  <v-card
    class="rounded-xl"
    color="#ffffff"
    hover="true"
    link="true"
    :to="{
      name: 'Item',
      params: { id: item.id },
    }"
  >
    <div class="card">
      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="desc">
        <p>{{ item.desc }}</p>
      </div>
      <div class="user-name">
        <p>{{ item.userName }}</p>
      </div>
      <div class="age">
        <p>{{ item.age }}</p>
      </div>
      <div class="gender">
        <p>{{ item.gender }}</p>
      </div>
      <div class="share-bar">
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

<style scoped>
/* カード全体のパディングを調整 */
.card {
  padding: 3% 10%;
}
.desc {
  padding-top: 5%;
}
</style>