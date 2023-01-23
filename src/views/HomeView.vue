<template>
  <!-- Farbpalette -->
  <div v-if="user">
    <Icon class="farbIcon" @click="$store.state.colorAktive = !$store.state.colorAktive"  icon="cil:color-palette" />
    <ColorComponent style="position: absolute; z-index: 300;left: 13%; top: 100px;" v-if="$store.state.colorAktive"></ColorComponent>

    <!-- Hinzufügen Button -->
    <div v-if="user" class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
        >
          <template v-slot:activator="{ props }">
            <v-btn
                style="top: 600px"
                position="relative"
                color="primary"
                v-bind="props"
            >
              Open Dialog
            </v-btn>
          </template>
          <v-card>
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
                        label="was hast du gekauft?"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        label="Preis"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>

</template>

<script>


import ColorComponent from "@/components/ColorComponent";
import { Icon } from '@iconify/vue';
import {mapGetters} from "vuex";
export default {

  data() {
    return {
      farbe: 'blue',
      name: 'Pocket Manager',
      dialog: false,
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
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    ColorComponent,
    Icon,
  },
}
</script>
<style scoped>
.farbIcon{
  cursor: pointer;
  font-size: 40px;
  position: fixed;
  z-index: 330;
  left: 88%;
  top: 80px;
  color: #c20a0a;
}
</style>
