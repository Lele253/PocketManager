<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <v-img
          class="hintergrund"
          src="https://t3.ftcdn.net/jpg/00/81/06/90/360_F_81069058_EXmWsil0UGDIerabVlQwNjgiNA2kAHGF.jpg">
      <div  style="width: 100% ; height: 100% ; background-color: rgba(0,0,0,0.43); position: relative; z-index: 20"></div>
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
