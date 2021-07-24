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
      <v-card-title class="text-h5 grey lighten-2"> Do your Post </v-card-title>

      <v-card-text>
        <form>
          <v-text-field
            v-model="title"
            :counter="20"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="desc"
            :counter="140"
            label="Description"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field v-model="age" :counter="3" label="Age"></v-text-field>
          <v-select
            v-model="gender"
            :items="genders"
            label="Gender"
            data-vv-name="gender"
          ></v-select>
        </form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PostFABDialog",
  data: () => ({
    dialog: false,
    title: "",
    desc: "",
    name: "",
    age: "",
    gender: "",
    genders: ["man", "woman", "others"],
  }),
};
</script>