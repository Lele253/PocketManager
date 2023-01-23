<template>
  <!-- Farbpalette -->
  <div v-if="user">
    <Icon class="farbIcon" @click="$store.state.colorAktive = !$store.state.colorAktive"  icon="cil:color-palette" />
    <ColorComponent style="position: absolute; z-index: 300;left: 13%; top: 100px;" v-if="$store.state.colorAktive"></ColorComponent>

    <!-- Hinzufügen Button -->
    <div v-if="user" class="hidden-sm-and-up">

    </div>
  </div>

</template>

<script>


import ColorComponent from "@/components/ColorComponent";
import { Icon } from '@iconify/vue';
import {mapGetters} from "vuex";
export default {

  data() {
    return {
      farbe: 'blue',
      name: 'Pocket Manager',
    }
  },
  methods: {
    getName() {
      this.$store.state.pageName = this.name
    }
  },
  created() {
    this.getName()
  },
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    ColorComponent,
    Icon,
  },
}
</script>
<style scoped>
.farbIcon{
  cursor: pointer;
  font-size: 40px;
  position: fixed;
  z-index: 330;
  left: 88%;
  top: 80px;
  color: #c20a0a;
}
</style>
