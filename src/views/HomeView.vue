<template>
  <div>
    <Icon class="farbIcon" @click="$store.state.colorAktive = !$store.state.colorAktive"  icon="cil:color-palette" />
    <ColorComponent style="position: absolute; z-index: 300;left: 13%; top: 100px;" v-if="$store.state.colorAktive"></ColorComponent>
  </div>

</template>

<script>


import ColorComponent from "@/components/ColorComponent";
import { Icon } from '@iconify/vue';
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
  components: {ColorComponent,Icon,},
}
</script>
<style scoped>
.farbIcon{
  cursor: pointer;
  font-size: 40px;
  position: relative;
  z-index: 310;
  left: 88%;
  top: 15px;
  color: #c20a0a;
}
</style>
