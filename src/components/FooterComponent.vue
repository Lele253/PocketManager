<template>
  <div class="footer">
    <v-row>
      <v-col class="d-flex justify-center align-center  ">
        <Icon @click="$router.push('/')" class="iconfooter" icon="iconoir:home-simple" />
      </v-col>
      <v-col class="d-flex justify-center align-center  ">
        <Icon class="iconfooter" icon="pajamas:hamburger" />
      </v-col>
      <v-col class="d-flex justify-center align-center  ">
<!--        <Icon @click="$router.push('/kategorieAdd')" class="iconfooter" icon="mdi:checkbox-marked-circle-plus-outline" />-->

        <div>
          <Icon class="iconfooter pt-1"
                @click="$router.push('/login')" icon="mdi:checkbox-marked-circle-plus-outline"
                v-if="!user"/>
          <v-dialog
              v-if="user"
              v-model="dialog"
              persistent

          >
            <template v-slot:activator="{ on, attrs }">
              <div class="farbDiv">
                <Icon class="iconfooter pt-1"
                      @click="dialog = true" icon="mdi:checkbox-marked-circle-plus-outline" v-bind="attrs"
                      v-on="on"/>
              </div>
            </template>
            <div class="d-flex justify-center">
            <v-card class="kategorieCard">
              <v-card-title>
                Erstelle eine neue Kategorie
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                    cols="12"
                    >
                      <v-text-field
                      variant="solo"
                      label="Name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          variant="solo"
                          type="number"
                          label="Budget"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <VSpacer></VSpacer>
                <v-btn
                    @click="dialog = false"
                >
                  Schließen
                </v-btn>
                <v-btn
                    @click="dialog = false"
                >
                  Speichern
                </v-btn>
              </v-card-actions>
            </v-card>
            </div>
          </v-dialog>
        </div>

      </v-col>
      <v-col class="d-flex justify-center align-center  ">
        <Icon class="iconfooter" icon="healthicons:ui-user-profile" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import {mapGetters} from "vuex";
export default {
  name: "FooterComponent",
  data() {
    return {
      dialog: false,
    }
  },
  components:{
    Icon
},
  computed: {
    ...mapGetters(['user']),

  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 50px;
  background-color: v-bind($store.state.color);
  position: fixed;
  z-index: 10;
  top: 95vh;
  box-shadow: -2px 0px 5px;
}
.iconfooter{
  cursor: pointer;
  font-size: 37px;
}
.kategorieCard {
  max-width: 500px;
  background-color: black;
  color: white;
  border-color: white;
  border: white 3px solid;
}
</style>
