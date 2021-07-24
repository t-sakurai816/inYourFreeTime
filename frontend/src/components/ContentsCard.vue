<template>
  <div>
    <v-card
      class="rounded-xl py-4 px-7"
      color="#ffffff"
      :hover="true"
      :to="{
        name: 'Item',
        params: { id: item.id },
      }"
    >
      <v-card-title class="text-h5"> {{ item.title }}</v-card-title>
      <v-card-text>
        <div class="desc">{{ item.desc }}</div>
        <div class="user-name">名前：{{ item.userName }}</div>
        <div class="age">年齢：{{ item.age }}</div>
        <div class="gender mb-0">{{ item.gender }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          icon
          color="#1DA1F2"
          :absolute="true"
          :right="true"
          :link="true"
          :href="`https://twitter.com/share?url=freetime.sakudev.net/${item.id}`"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
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