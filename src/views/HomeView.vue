<template>
  <div>
    <div v-for="i in testarray" :key="i">
      {{i}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {},
  data(){
    return{
      testarray:[15555,1,1,1,1,1,1,1,1,1,1,1,1,11,1,22221,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9999]
    }
  }
}
</script>
