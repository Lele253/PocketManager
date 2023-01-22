<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <v-img
          class="hintergrund"
          src="https://i.pinimg.com/564x/a2/25/1e/a2251ecad7b405f57195e13e88da6d2e.jpg">
      </v-img>
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
  created() {
  },
  mounted() {
  },
  updated() {
  },

  async beforeCreate() {
    const respons = await axios.get('http://localhost:8080/auth/user');
    await this.$store.dispatch('user', respons.data)
  },
}
</script>
<style scoped>
.router {
  position: relative;
  margin-top: 60px;
  margin-bottom: 46px;
  z-index: 10;
}

.hintergrund {
  position: fixed;
  height: 100%;
  width: 100%;
z-index: 8;
}
</style>
