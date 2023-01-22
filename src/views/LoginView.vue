<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      name: "Login"
    }
  },
  methods: {
    async login() {
      const response = await axios.post('http://localhost:8080/auth/login',
          {
            email: this.email,
            password: this.password
          });
      localStorage.setItem('token', response.data)
      await this.$store.dispatch('user', response.data.user)
      await this.$router.push('/')
      location.reload()
    },
    getName() {
      this.$store.state.pageName = this.name
    }
  },
  created() {
    this.getName()
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>