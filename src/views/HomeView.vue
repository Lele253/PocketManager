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
      testarray: [1, 1, 1, 1, 1, 111, 1, 1, 1, 1, 1, 1, 1, 1, 1, 123, 21, 3, 354, 564, 432, 32, 345, 5, 43, 23, 34, 342, 32, 435, 543, 234, 23, 234, 34, 45, 34, 324,]
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
