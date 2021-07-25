<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-container>
        <v-fab-transition>
          <v-btn
            v-show="!hidden"
            color="#8F9BFF"
            fab
            dark
            fixed
            bottom
            right
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-container>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2"
        >趣味を投稿しよう！</v-card-title
      >

      <v-card-text>
        <form>
          <v-text-field
            v-model="title"
            :counter="20"
            label="趣味（必須）"
            :hint="hints.title"
            required
          ></v-text-field>
          <v-textarea
            v-model="desc"
            :counter="140"
            label="説明（必須）"
            :hint="hints.desc"
            required
          ></v-textarea>
          <v-text-field
            v-model="userName"
            :counter="10"
            label="ユーザー名（必須）"
            :hint="hints.userName"
            required
          ></v-text-field>
          <v-text-field
            v-model="age"
            :counter="3"
            label="年齢"
            :hint="hints.age"
          ></v-text-field>
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
    hints: {
      title: `プログラミング`,
      desc: `Webアプリの開発が好き！Vue.jsをつかってます！`,
      userName: `yCroma`,
      age: "25",
    },
  }),
  methods: {
    postData: function (data) {
      axios
        .post(process.env.VUE_APP_API_URL + "/create", {
          title: this.title,
          desc: this.desc,
          userName: this.userName,
          age: this.age,
          gender: this.gender,
        })
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