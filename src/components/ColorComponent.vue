<template>
  <div>
    <v-color-picker
        v-model="$store.state.color"
        elevation="15"
    >
    </v-color-picker>
    <Icon style=" position: relative; bottom:360px;left: 98%; font-size: 40px; color: black" @click=" $store.state.colorAktive = false" icon="zondicons:close-outline" />
  </div>

</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: "ColorComponent",
  components: {
    Icon,
  },
  data(){

  }
}
</script>

<style scoped>

</style>
