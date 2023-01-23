<template>
  <div class="header">
    <v-row class="headerow">
      <v-col cols="4" v-if="user" class="pb-0 d-flex align-center"> <p class="ml-2">{{ user.username }}</p></v-col>
      <v-col cols="4" v-if="!user" class="pb-0 d-flex align-center"><p class="ml-2" style="font-size: 12px">Welcome</p>
      </v-col>
      <v-col cols="4" class="pb-0 d-flex align-center text-center"><b
          @click="$router.push('/')" style="font-size: 15px; width: 100%">{{ $store.state.pageName }}</b>
      </v-col>
      <v-col cols="4" class="pb-0 d-flex align-center justify-end">
        <Icon @click="$router.push('/login')" v-if="!user" class="icon mr-2" icon="mdi:person-circle"/>
        <Icon @click="logout" v-if="user" class="icon mr-2" icon="mdi:emergency-exit"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import {Icon} from '@iconify/vue';
import {mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push("/")
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    Icon,
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: v-bind($store.state.color);
  position: fixed;
  z-index: 20;
  box-shadow: 2px 0px 5px;
}

.headerow {
  height: 70px;
}

.icon {
  cursor: pointer;
  font-size: 35px;
}
</style>
