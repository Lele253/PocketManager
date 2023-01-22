<template>
  <div>
    <div v-for="i in testarray" :key="i">
      {{$store.state.test}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'PocketManager',
  created() {
    this.$store.state.headerTitle=this.name
  },
  components: {},
  data(){
    return{

    }
  }
}
</script>
