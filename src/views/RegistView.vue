<template>
  <div class="d-flex justify-center">
    <v-card class="registCard mt-12">
      <v-card-title class="text-center">
        Registrieren
      </v-card-title>
      <v-card-tesx>
        <v-form @submit.prevent="regist">
        <v-row justify="center" class="mt-6">
          <v-col cols="9">
            <v-text-field label="Username" v-model="username" type="text"  variant="solo">
            </v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field  label="Password" v-model="password" type="Password" variant="solo">

            </v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field  label="Password wiederholen" v-model="passwordW" type="Password" variant="solo">

            </v-text-field>
          </v-col>
          <v-col class=" d-flex jusPasswordter mt-n4" cols="6">
            <v-btn type="submitç" class="button">Registrieren </v-btn>
          </v-col>
        </v-row>
        </v-form>
      </v-card-tesx>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data(){
    return{
      name: "RegistView",
      username:'',
      password:'',
      passwordW:'',

    }
  },
  methods: {
    async regist() {
      if(this.password == this.passwordW){
      const respons = await axios.post('http://localhost:8080/auth/regist', {
        email: this.username,
        password: this.password,
        username: this.username
      });
      console.log(respons)
      this.$router.push('/login')
     }
      else{
        alert('Password stimmt nicht überein')
      }
    }
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
.registCard{
  height: 450px;
  width: 340px;
}
</style>
