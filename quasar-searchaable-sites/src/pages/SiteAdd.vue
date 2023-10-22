<template>
  <div class="q-pa-md q-mx-auto q-my-md" style="max-width: 600px">
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-overline">Basico</div>

        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input filled v-model="name" label="Nombre del sitio" lazy-rules
            :rules="[val => val && val.length > 0 || 'Este campo es obligatorio']" />
          <q-input filled v-model="URL" label="URL" hint="Puede ser en formato www.ypf.com.ar" lazy-rules
            :rules="[val => val && val.length > 0 || 'Este campo es obligatorio']" />
          <q-input filled type="number" v-model="profundidad" label="Profundidad maxima" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Ingrese la profundidad maxima',
            val => val > 0 && val < 4 || 'No debe ser menor a 1 ni mayor a 3'
          ]" />
          <q-select filled v-model="frecuencia" :options="options" label="Frecuencia" />
        </q-form>
      </q-card-section>

      <q-expansion-item expand-separator label="Avanzado" default-closed>
        <q-card-section class="q-gutter-md">
          <div class="text-overline">Opciones adicionales</div>
          <q-input filled v-model="dominios" label="Dominios validos" />
          <q-input filled type="number" v-model="fails" label="Maximos intentos fallidos" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Ingrese la cantidad maxima',
            val => val > 0 && val < 6 || 'No debe ser menor a 1 ni mayor a 5'
          ]" />
          <q-input filled type="number" v-model="timeout" label="Tiempo de espera maximo" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Ingrese la cantidad maxima',
            val => val > 0 && val < 100001 || 'No debe ser menor a 1 ni mayor a 100000'
          ]" />
        </q-card-section>
      </q-expansion-item>
      <div class="q-pa-md">

        <q-btn color="primary" class="full-width q-mb-md" label="Submit" type="submit" @click.prevent="onSubmit" />

        <q-btn color="secondary" class="full-width" label="Reset" type="reset" @click.prevent="onReset" />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      accept: false,
      expanded: false,
      advancedField: '',
      URL: '',
      profundidad: 2,
      frecuencia: 'Diaria',
      options: ['Diaria', 'Semanal', 'Mensual'],
      fails: 3,
      timeout: 10000,
      dominios: '',
    };
  },
  methods: {
    onSubmit() {
      // Lógica para enviar el formulario básico
      // this.name, this.age, this.accept contienen los valores del formulario básico
    }
  },


};
</script>
