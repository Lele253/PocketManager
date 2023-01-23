<template>
  <div>
    <!----------------------------------------angemeldet------------------------------------->
    <div v-if="user">
      <div class="budget ">
        <div class="d-flex">
          <p class="ml-1 mt-1 text-white">{{budget}}</p>
          <p class="ml-1 mt-1 text-white">€</p>
        </div>
        <div v-if="budgetBearbeiten">
          <v-text-field type="number" variant="outlined" v-model="budgetPlus" class=" ml-1 mt-8 "></v-text-field>
        </div>

      </div>
      <div v-if="!budgetBearbeiten" @click="budgetBearbeiten = !budgetBearbeiten" class="budgetAdd">
        <h1 class="mt-n2 text-center text-white">+</h1>
      </div>
      <div v-if="budgetBearbeiten" @click="adieren" class="budgetAdd">
        <h1 class="mt-n2 text-center text-white">+</h1>
      </div>
      <!-- Farbpalette Dialog-->
      <div>
        <v-dialog
            v-model="dialog"
            persistent

        >
          <template v-slot:activator="{ on, attrs }">
            <div class="farbDiv">
            <Icon class="farbIcon"
                  @click="dialog = true" icon="cil:color-palette" v-bind="attrs"
                  v-on="on"/>
            </div>
          </template>
          <v-card class="dialogCard">
            <v-card-title class="text-h5 text-white">
              Wähle deine eigenen Farbe aus
            </v-card-title>
            <v-card-text>
              <ColorComponent>
              </ColorComponent>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  class="closeB"
                  @click="dialog = false"
              >
                Speichern
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- Hinzufügen Dialog -->
      <div class="hidden-sm-and-up">
        <v-dialog
            v-model="dialog1"
            persistent
        >
          <template v-slot:activator="{ props }">
            <v-btn
                class="addButton"
                position="relative"
                color="black"
                v-bind="props"
            >
              Buy
            </v-btn>
          </template>
          <v-card class="cardFarbe">
            <v-card-title class="text-center text-h5">
              Neue Ausgabe
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        variant="solo"
                        label="Was hast du gekauft?"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        variant="solo"
                        label="Preis"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="red"
                  variant="text"
                  @click="dialog1 = false"
              >
                Schließen
              </v-btn>
              <v-btn
                  color="green"
                  variant="text"
                  @click="dialog1 = false"
              >
                Speichern
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

    </div>


    <!----------------------------------------Abgemeldet------------------------------------->
    <div v-if="!user" style="width: 100%">
      <!--überschrift-->
      <div>
        <!--Karten-->
        <v-row class="cardRow justify-center">
          <!--Karte 1-->
          <v-col cols="9">
            <v-card class="card">
              <h2 class="text-center">
                Was ist PocketManager
              </h2>
              <p class="text-center mx-10">
                Why it works: Type form simplifies their mobile website to improve load times and deliver a simpler user
                experience.

                Typeform is a Barcelona-based tech company with one simple mission: to "make forms awesome." Their
                desktop
                website is beautifully designed, greeting visitors with succinct copy, relevant animations, and other
                complex
                design components.
              </p>
            </v-card>
          </v-col>
          <!--Karte 2-->
          <v-col cols="9">
            <v-card class="card">
              <v-titel>
              </v-titel>
            </v-card>
          </v-col>
          <!--Karte 3-->
          <v-col cols="9">
            <v-card class="card">
              <v-titel>
              </v-titel>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

  </div>

</template>

<script>


import ColorComponent from "@/components/ColorComponent";
import {Icon} from '@iconify/vue';
import {mapGetters} from "vuex";

export default {

  data() {
    return {
      budgetPlus: 0,
      farbe: 'blue',
      name: 'Pocket Manager',
      dialog1: false,
      dialog: false,
      budgetBearbeiten: false,
    }
  },
  methods: {
    adieren(){
     this.$store.state.budget = (+this.$store.state.budget) + (+this.budgetPlus)  ;
      this.budgetBearbeiten = false
     console.log(this.budget)
    },
    getName() {
      this.$store.state.pageName = this.name
    }
  },
  created() {
    this.getName()
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['budget'])

  },

  components: {
    ColorComponent,
    Icon,
  },
}
</script>
<style scoped>

.farbIcon {
  cursor: pointer;
  font-size: 30px;
  margin-left: 10px;
  margin-bottom: 4px;
  z-index: 330;

  color: white;
}

.addButton {
  border: white 3px solid;
  box-shadow: 3px 3px 5px black;
  border-radius: 100%;
  min-height: 120px;
  min-width: 120px;
  position: fixed;
  top: 600px;
  left: 37%
}

.dialogCard {
  height: 400px;
  width: 350px;
  background-color: black;
  border-radius: 12px;
  border:solid 3px white;
}

.closeB {
  background-color: white;
}

.card {
  background-color: rgba(218, 163, 31, 0.6);
  height: 500px;
  text-shadow: 2px 2px 5px white;
}

.cardRow {
  margin-top: 35px;
  width: 100%;
  height: 100%;

}
.budget{
  position: relative;
  top: 15px;
  left: 20px;
  height: 38px;
  width: 90px;
  background-color: black;
  border: solid 3px white;
  box-shadow: 3px 3px 5px black;
  border-radius: 12px;
}
.budgetAdd{
  position: relative;
  top: -23px;
  left: 115px;
  height: 38px;
  width: 45px;
  background-color: black;
  border: solid 3px white;
  box-shadow: 3px 3px 5px black;
  border-radius: 12px;
}
.farbDiv{
  font-size: 40px;
  position: relative;
  z-index: 330;
  left: 83%;
  top: -64px;
  height: 55px;
  width: 55px;
  background-color: black;
  border: solid 3px white;
  box-shadow: 3px 3px 5px black;
  border-radius: 12px;
}
</style>
