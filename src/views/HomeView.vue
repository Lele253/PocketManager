<template>
  <div>
    <div v-for="i in testarray" :key="i">
      {{ i }}
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
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
  components: {},
}
</script>
