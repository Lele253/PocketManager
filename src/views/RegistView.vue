<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "RegistView",
  methods: {
    async regist() {
      const respons = await axios.post('http://localhost:8080/auth/regist', {
        email: this.email,
        password: this.password,
        username: this.username
      });
      console.log(respons)
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>