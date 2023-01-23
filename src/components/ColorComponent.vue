<template>
  <div>
    <v-color-picker
        mode="hex"
        hide-inputs
        v-model="$store.state.color"
        elevation="15"
    >
    </v-color-picker>
  </div>

</template>

<script>

export default {
  name: "ColorComponent",
  components: {},
  data() {

  }
}
</script>

<style scoped>

</style>
