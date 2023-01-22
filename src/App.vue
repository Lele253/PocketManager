<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <router-view class="router">
      </router-view>
    </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },

  async beforeCreate() {
    const respons = await axios.get('http://localhost:8080/auth/user');
    await this.$store.dispatch('user', respons.data)
  },
}
</script>
<style scoped>
.router{
  margin-top: 60px;
  margin-bottom: 46px;
}
</style>
