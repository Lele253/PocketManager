<template>
  <div class=" d-flex justify-center">
    <v-card class="logincard mt-12">
      <v-card-title class="text-center">
        Login
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">

        <v-row class="mt-10" justify="center">
          <v-col cols="9">
            <v-text-field v-model="email" type="email" label="Username" variant="solo"></v-text-field>

          </v-col>
          <v-col cols="9">
            <v-text-field v-model="password" type="password" label="Password" variant="solo"></v-text-field>
          </v-col>
          <v-col class=" d-flex justify-center mt-n4" cols="6">
            <v-btn type="submit" class="button">Login </v-btn>
          </v-col>
          <v-col cols="10">
            <p class="text-center">
              Sie haben noch kein Account?
            </p>
            <p class="mt-2 text-center">
              <router-link to="/regist">Dann registrieren Sie sich jetzt!</router-link>
            </p>
          </v-col>
        </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      name: "Login",
      email:'',
      password:'',
    }
  },
  methods: {
    async login() {
      const response = await axios.post('http://81.169.199.175:8080/auth/login',
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
.button{
  width: 100%;
  background: v-bind($store.state.color);

}
.logincard{
  height: 450px;
  width: 340px;
  background-color: rgba(255, 255, 255, 0.85);
}
</style>
