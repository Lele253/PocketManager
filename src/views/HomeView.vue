<template>
  <div>
    <!----------------------------------------angemeldet------------------------------------->
    <div v-if="user">
      <div class="budget ">
        <div class="d-flex">
          <p class="ml-1 mt-1 text-white">{{ budget }}</p>
          <p class="ml-1 mt-1 text-white">€</p>
        </div>
        <div v-if="budgetBearbeiten" class="mt-n5">
          <v-text-field type="number" variant="outlined" v-model="budgetPlus" class=" ml-1 mt-8 "></v-text-field>
        </div>

      </div>
      <div v-if="!budgetBearbeiten" @click="budgetBearbeiten = !budgetBearbeiten" class="budgetAdd">
        <h1 class="mt-n2 text-center text-white">+</h1>
      </div>
      <div v-if="budgetBearbeiten" @click="adieren" class="budgetAdd">
        <h1 class="mt-n2 text-center text-white">
          <Icon class="mt-1" style="font-size: 40px" icon="material-symbols:check-small" />
        </h1>
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

    <!----------------------------------------AngemeldetTabletAnsicht------------------------>
    <div style="max-width: 98%" v-if="user" class="hidden-xs d-flex justify-center">
<!--      Container Kategorien-->
      <v-row style="width: 100%" class="d-flex justify-center ml-1">
        <v-col cols="5" class="ml-7 v-colTabletAnsicht">
<!--          Überschrift Kategorientabelle-->
          <h2><u>Kategorien der Ausgaben</u></h2>

          <!--Überschirftstupel Kategorien-->
          <v-row class="mr-2 mt-3 justify-center d-flex">
            <v-col cols="3"> <h3>Kategorie</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
            <v-col cols="3"> <h3>Budget</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
            <v-col cols="3"> <h3>ausgegeben</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
            <v-col cols="3"> <h3>offen</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
          </v-row>
<!--         KategorienRow-->
          <v-row class="tupelKategorieDiv mt-n3">
<!--            Inhalt KategorienRow-->
            <v-col cols="12" v-for="(i,index) in kategorie" :key="i" >
            <v-row class="text-black">
              <v-col cols="3"> {{ i.kategorieName }} </v-col>
              <v-col cols="3"> {{ i.kategorieBudget }} </v-col>
<!--              ausgegeben-->
              <v-col cols="3"> {{zwischensumme[index]}}</v-col>
<!--              offen-->
              <v-col cols="3"> {{ i.kategorieBudget - zwischensumme[index]}} </v-col>
            </v-row>
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
<!--        Hilfscol für Spalt in der Mitte-->
        <v-spacer></v-spacer>
        <v-col cols="5" class="mr-5 v-colTabletAnsicht">
<!--          Überschrift Ausgaben-->
          <h2><u>Mobil hinzugefügte Ausgaben</u></h2>

<!-------------Überschriftstupel Ausgaben-->

          <v-row class="mr-2 mt-3 justify-center d-flex"
                  style="font-size: 15px">
            <v-col cols="6"> <h3>Name</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
            <v-col cols="6"> <h3>Preis</h3><Icon style="font-size: 30px" icon="mdi:arrow-down-bold"/></v-col>
          </v-row>
          <!--         AusgabenRow-->
          <v-row class="tupelKategorieDiv mt-n3">
            <!--            Inhalt AusgabenRow-->
            <v-col cols="12" v-for="i in ausgabeGekauft" :key="i">
              <v-row draggable="true" class="d-flex justify-center text-black">
                <v-col cols="6"> {{ i.ausgabeName }} </v-col>
                <v-col cols="6"> {{ i.ausgabePreis}} € </v-col>
              </v-row>
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>


    <!----------------------------------------Abgemeldet------------------------------------->
    <div v-if="!user" style="width: 100%">
      <!--überschrift-->
      <div>
        <!--Karten-->
        <v-row class="cardRow d-flex justify-center">
          <!--Karte 1-->
          <v-col sm="8" cols="12">
            <v-card class="cardOne ">
              <h2 class="text-center mt-5">
                Was ist PocketManager
              </h2>
              <h3 class="text-center mx-5 mt-3">
                PocketManager ist die Lösung für alle, die ihre Ausgaben besser verwalten möchten. Mit unserer
                benutzerfreundlichen Plattform können Sie Ihre Einkäufe und Ausgaben einfach verfolgen und organisieren.
                Unsere App ermöglicht es Ihnen, Ihre Ausgaben in verschiedene Kategorien einzuteilen, damit Sie immer
                den Überblick behalten und Ihr Budget besser planen können.
                Verwalten Sie Ihre Ausgaben mit PocketManager und erreichen Sie Ihre finanziellen Ziele noch schneller.
                Probieren Sie es jetzt aus und sehen Sie selbst!

              </h3>
              <div class="tryItNowButtonDiv mb-5">
                <v-btn @click="$router.push('/regist')" class="button">
                  Try it now
                </v-btn>
              </div>
            </v-card>
          </v-col>
          <!--Karte 2-->
          <v-col sm="8" cols="10">
            <v-card class="card">
            </v-card>
          </v-col>
          <!--Karte 3-->
          <v-col sm="8" cols="10">
            <v-card class="card">
            </v-card>
          </v-col>
          <!--Karte 4-->
          <v-col sm="8" cols="10">
            <v-card class="cardLast text-center">
              <h2 class="mt-5">
                Haben Sie sich schon Registriert?
              </h2>
              <h3 class="mt-3 mx-10">
                Sind Sie bereit, Ihre Ausgaben besser zu verwalten? Haben Sie sich schon registriert? Wenn nicht,
                registrieren Sie sich jetzt und erhalten Sie Zugriff auf alle Funktionen unserer Plattform.
              </h3>
              <h3 class="hidden-xs mx-10 mt-10">
                Einmal registriert, können Sie Ihre Ausgaben in verschiedene Kategorien einordnen und damit immer den
                Überblick
                behaten und Ihr Budget besser planen.
              </h3>
              <h3 class="hidden-sm-and-down mx-10 mt-10">
                PocketManager ist einfach und sicher zu bedienen. Sie können die App auf Ihrem Smartphone oder Tablet
                herunterladen und sie jederzeit und überall verwenden. Registrieren Sie sich jetzt und starten Sie
                noch heute mit der Verwaltung Ihrer Ausgaben mit PocketManager. Erreichen Sie Ihre finanziellen Ziele
                noch schneller.
              </h3>
              <v-row class="d-flex justify-center mt-8">
                <v-col sm="5" cols="8">
                  <v-btn @click="$router.push('/regist')" class="button">
                    Jetzt Registrieren!
                  </v-btn>
                </v-col>
                <v-col sm="5" cols="8">
                  <v-btn @click="$router.push('/login')" class="button">
                    Jetzt Anmelden!
                  </v-btn>
                </v-col>
              </v-row>
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
import axios from "axios";

export default {
  data() {
    return {
      budgetPlus: 0,
      farbe: 'blue',
      name: 'Pocket Manager',
      dialog1: false,
      dialog: false,
      budgetBearbeiten: false,
      zwischensumme: [],
      kategorienZwischensumme: 0,
      ausgabeGekauft: [
          {ausgabeID: 5,ausgabeName: 'Megges', ausgabePreis: 3.50, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 6,ausgabeName: 'BurgerKing', ausgabePreis: 4, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 7,ausgabeName: 'Zara', ausgabePreis: 11.50, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 8,ausgabeName: 'Edeka', ausgabePreis: 4.75, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 9,ausgabeName: 'Rewe', ausgabePreis: 1.25, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 10,ausgabeName: 'Eis', ausgabePreis: 1.50, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 11,ausgabeName: 'Cola', ausgabePreis: 1.15, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 12,ausgabeName: 'Tanken', ausgabePreis: 67.64, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 13,ausgabeName: 'Öl', ausgabePreis: 20, ausgabeDatum: '24.01.2023'},
          {ausgabeID: 14,ausgabeName: 'Megges', ausgabePreis: 1.25, ausgabeDatum: '24.01.2023'},
      ]
    }
  },
  methods: {
    async getKategorie() {
      const respons = await axios.get('http://localhost:8080/auth/user');
      await this.$store.dispatch('user', respons.data);
      const response = await axios.get('http://localhost:8080/auth/kategorie/sortiert/' + this.user.nutzerId);
      this.$store.state.kategorie = response.data
    },
    adieren() {
      this.$store.state.budget = (+this.$store.state.budget) + (+this.budgetPlus);
      this.budgetBearbeiten = false
    },
    getName() {
      this.$store.state.pageName = this.name
    },
    ausgegebenesBudget() {
      for(let i=0; i<this.kategorie.length; i++) {
        this.kategorienZwischensumme = 0;
        for (let x=0; x<this.kategorie[i].ausgabe.length; x++) {
          this.kategorienZwischensumme =  (+this.kategorienZwischensumme)+(+this.kategorie[i].ausgabe[x].ausgabePreis)
        }
        this.zwischensumme.push(this.kategorienZwischensumme)
      }
    }
  },

  beforeCreate() {

  },
  created() {

  },

  mounted() {
    this.getKategorie()
    this.getName()
    this.ausgegebenesBudget()
  },
  updated() {
  },
  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['budget']),
    ...mapGetters(['kategorie'])


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
  left: 37%;
}

.dialogCard {
  height: 400px;
  width: 350px;
  background-color: black;
  border-radius: 12px;
  border: solid 3px white;
}

.closeB {
  background-color: white;
}

.card {
  /*background-color: rgba(218, 163, 31, 0.6);*/
  background-color: rgba(218, 163, 31, 0.82);
  height: 500px;
  text-shadow: 2px 2px 5px white;
}

.cardRow {
  margin-top: 35px;
  padding-left: 5%;
  width: 100%;
  height: 100%;
}

.cardOne {
  background-color: rgba(218, 163, 31, 0.82);

  text-shadow: 2px 2px 5px white;
}

.cardLast {
  /*background-color: rgba(218, 163, 31, 0.6);*/
  background-color: rgba(218, 163, 31, 0.82);
  height: 500px;
  text-shadow: 2px 2px 5px white;
}
.cardFarbe {
  color: v-bind($store.state.color);
}

.tryItNowButtonDiv {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.button {
  border: solid 3px white;
  border-radius: 20px;
  color: white;
  background-color: black;
}

.budget {
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

.budgetAdd {
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

.farbDiv {
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
.v-colTabletAnsicht {
  background-color: v-bind($store.state.color);
  min-height: 500px;
  text-align: center;
  border-radius: 10px;
}
.tupelKategorieDiv {
  margin-top: 20px;
  background-color: rgba(250, 248, 248, 0.2);
  color: white;
  /*border: solid 3px white;*/
  /*border-radius: 10px;*/
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

table {
  margin: 0 auto;
}
</style>

