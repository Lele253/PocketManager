<template>
  <v-app>
    <HeaderComponent class="header"></HeaderComponent>
    <v-main>
      <router-view>
      </router-view>
    </v-main>
    <FooterComponent class="footer"></FooterComponent>
  </v-app>
</template>

<script>
import axios from "axios";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },

  async beforeCreate() {
    const respons = await axios.get('http://localhost:8080/auth/user');
    await this.$store.dispatch('user', respons.data)
  },
}
</script>
<style>
</style>
