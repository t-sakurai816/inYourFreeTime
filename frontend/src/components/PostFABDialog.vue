<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-show="!hidden"
        color="pink"
        fab
        dark
        small
        absolute
        bottom
        right
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> 趣味を投稿しよう！</v-card-title>

      <v-card-text>
        <form>
          <v-text-field
            v-model="title"
            :counter="20"
            label="趣味（必須）"
            required
          ></v-text-field>
          <v-text-field
            v-model="desc"
            :counter="140"
            label="説明（必須）"
            required
          ></v-text-field>
          <v-text-field
            v-model="userName"
            :counter="10"
            label="ユーザー名（必須）"
            required
          ></v-text-field>
          <v-text-field v-model="age" :counter="3" label="年齢"></v-text-field>
          <v-select
            v-model="gender"
            :items="genders"
            label="性別"
            data-vv-name="gender"
          ></v-select>
        </form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="
            dialog = false;
            postData();
          "
        >
          投稿
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "PostFABDialog",
  data: () => ({
    dialog: false,
    title: "",
    desc: "",
    userName: "",
    age: "",
    gender: "",
    genders: ["man", "woman", "others"],
  }),
  methods: {
    postData: function (data) {
      axios
        .post(
          "https://8xop5xhioh.execute-api.ap-northeast-1.amazonaws.com/stg/create",
          {
            title: this.title,
            desc: this.desc,
            userName: this.userName,
            age: this.age,
            gender: this.gender,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>