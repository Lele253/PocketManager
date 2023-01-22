<template>
  <div class="header">
    <v-row class="headerow">
      <v-col cols="4" v-if="user" class="pb-0 d-flex align-center">{{user.username}}</v-col>
      <v-col cols="4" v-if="!user" class="pb-0 d-flex align-center">Welcome</v-col>
      <v-col cols="4">{{test1}}</v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      test1: 'testString2',
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: beige;
  position: fixed;
  z-index: 10;
}
.headerow {
  height: 70px;
}
</style>
