<template>
  <!-- Farbpalette -->
  <div v-if="user">


    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <Icon class="farbIcon"
              @click="dialog = true" icon="cil:color-palette" v-bind="attrs"
              v-on="on"/>
      </template>
      <v-card class="dialogCard">
        <v-card-title class="text-h5">
          Wähle deine eigenen Farbe aus
        </v-card-title>
        <v-card-text>
          <ColorComponent style="position: absolute; z-index: 300;left: 13%; top: 100px;">
          </ColorComponent>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              class="button"
              text
              @click="dialog = false"
          >
            Speichern
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Hinzufügen Button -->
    <div v-if="user" class="hidden-sm-and-up">

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
.farbIcon {
  cursor: pointer;
  font-size: 40px;
  position: fixed;
  z-index: 330;
  left: 88%;
  top: 80px;
  color: #c20a0a;
}

.closeIcon {
  cursor: pointer;
  font-size: 40px;
  position: fixed;
  z-index: 330;
  left: 88%;
  top: 80px;
  color: black;
}

.dialogCard {
  height: 400px;
  width: 400px;
}

.button {
  color: v-bind($store.state.color);
}
</style>
