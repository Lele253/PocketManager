<template>
  <div class="footer">
    <v-row>
      <v-col class="d-flex justify-center align-center  ">
        <Icon @click="$router.push('/')" class="iconfooter" icon="iconoir:home-simple" />
      </v-col>
      <v-col class="d-flex justify-center align-center  ">
        <Icon class="iconfooter" icon="pajamas:hamburger" />
      </v-col>
      <v-col class="d-flex justify-center align-center  ">
        <Icon @click="$router.push('/kategorieAdd')" class="iconfooter" icon="mdi:checkbox-marked-circle-plus-outline" />
      </v-col>
      <v-col class="d-flex justify-center align-center  ">
        <Icon class="iconfooter" icon="healthicons:ui-user-profile" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: "FooterComponent",
  components:{
    Icon
}
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 50px;
  background-color: v-bind($store.state.color);
  position: fixed;
  z-index: 10;
  top: 95vh;
  box-shadow: -2px 0px 5px;
}
.iconfooter{
  cursor: pointer;
  font-size: 37px;
}
</style>
