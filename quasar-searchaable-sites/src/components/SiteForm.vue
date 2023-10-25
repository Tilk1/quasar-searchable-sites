<template>
  <div class="q-pa-md q-mx-auto q-my-md" style="max-width: 600px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card class="q-mb-md">

        <q-card-section>
          <div class="text-overline">Basico</div>
          <q-input filled v-model="name" label="Nombre del sitio" lazy-rules :rules=basicRules />
          <q-input filled v-model="URL" label="URL" hint="Puede ser en formato www.ypf.com.ar" lazy-rules :rules=basicRules />
          <q-input filled type="number" v-model="profundidad" label="Profundidad maxima" lazy-rules :rules=basicRules />
          <q-select filled v-model="frecuencia" :options="options" label="Frecuencia"></q-select>
        </q-card-section>

        <q-expansion-item expand-separator label="Avanzado" default-closed>
          <q-card-section class="q-gutter-md">
            <div class="text-overline">Opciones adicionales</div>
            <q-input filled v-model="dominios" label="Dominios validos" />
            <q-input filled type="number" v-model="fails" label="Maximos intentos fallidos" lazy-rules :rules=basicRules />
            <q-input filled type="number" v-model="timeout" label="Tiempo de espera maximo" lazy-rules :rules=basicRules />
          </q-card-section>
        </q-expansion-item>
        <div class="q-pa-md">
          <q-btn color="primary" class="full-width q-mb-md" label="Guardar" type="submit" />
        </div>
      </q-card>
    </q-form>
  </div>
</template>

<script setup>
import { basicRules, advancedRules } from '../utils/validationRules.js';
import SiteService from "../services/SiteService.js"
import { ref } from 'vue'
const props = defineProps({
  site: String
});

//basico
const name = ref('')
const URL = ref('')
const profundidad = ref('')
const frecuencia = ref('')
const options = [
  { label: 'Diaria', value: 'Diaria' },
  { label: 'Semanal', value: 'Semanal' },
  { label: 'Mensual', value: 'Mensual' }
]
//  avanzado
const dominios = ref('')
const fails = ref(3)
const timeout = ref(10000)

function onSubmit() {
  const payload = {
    "nombre": name.value,
    "URL": URL.value,
    "profundidad_hojas": parseInt(profundidad.value),
    "document_extractor": "extract",
    "max_retrys": parseInt(fails.value),
    "timeout": parseInt(timeout.value),
  }

  SiteService.create(payload).then(result => {
    console.log(result)
  })

}
</script>
