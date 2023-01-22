<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <v-img
          class="hintergrund"
          src="https://t3.ftcdn.net/jpg/00/81/06/90/360_F_81069058_EXmWsil0UGDIerabVlQwNjgiNA2kAHGF.jpg">
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
  margin-top: 60px;
  margin-bottom: 46px;
}

.hintergrund {
  position: fixed;
  height: 100%;
  width: 100%;
  
}
</style>
