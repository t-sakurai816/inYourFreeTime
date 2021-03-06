<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-container>
        <v-fab-transition>
          <v-btn
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
            :error-messages="titleErrors"
            :counter="30"
            label="趣味（必須）"
            :hint="hints.title"
            required
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="desc"
            :error-messages="descErrors"
            :counter="140"
            label="説明（必須）"
            :hint="hints.desc"
            required
            @input="$v.desc.$touch()"
            @blur="$v.desc.$touch()"
          ></v-textarea>
          <v-text-field
            v-model="userName"
            :error-messages="userNameErrors"
            :counter="30"
            label="ユーザー名（必須）"
            :hint="hints.userName"
            required
            @input="$v.userName.$touch()"
            @blur="$v.userName.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="age"
            :error-messages="ageErrors"
            :counter="3"
            label="年齢"
            :hint="hints.age"
            @input="$v.age.$touch()"
            @blur="$v.age.$touch()"
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
        <v-btn color="primary" text @click="submit"> 投稿 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import router from "../router";
import { validationMixin } from "vuelidate";
import { required, between, maxLength } from "vuelidate/lib/validators";

export default {
  name: "PostFABDialog",

  data: () => ({
    dialog: false,
    title: "",
    desc: "",
    userName: "",
    age: "",
    gender: "",
    genders: ["🚹", "🚺"],
    hints: {
      title: `プログラミング`,
      desc: `Webアプリの開発が好き！Vue.jsをつかってます！`,
      userName: `yCroma`,
      age: "25",
    },
  }),

  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(30) },
    desc: { required, maxLength: maxLength(140) },
    userName: { required, maxLength: maxLength(30) },
    age: {
      between: between(0, 122),
    },
  },

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
          const post_id = response.data.id;
          // 投稿に成功したら遷移する
          router.push({ name: "Item", params: { id: post_id } });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.postData();
      }
    },
  },

  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("必須です！");
      return errors;
    },
    descErrors() {
      const errors = [];
      if (!this.$v.desc.$dirty) return errors;
      !this.$v.desc.required && errors.push("必須です！");
      return errors;
    },
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.required && errors.push("必須です！");
      return errors;
    },
    ageErrors() {
      const errors = [];
      if (!this.$v.age.$dirty) return errors;
      !this.$v.age.between && errors.push("0~122の間で入力してください！");
      return errors;
    },
  },
};
</script>