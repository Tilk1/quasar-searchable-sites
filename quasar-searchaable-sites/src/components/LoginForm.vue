<template>
  <div class="q-pa-md q-mx-auto q-my-md" style="max-width: 600px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card class="q-mb-md">
        <div class="q-pa-md flex flex-center">
          <div class="text-h6 q-mb-md">¡Bienvenido!</div>
          <div class="q-mb-md">
            <p>Para disfrutar de todas las características de nuestra aplicación, inicia sesión con tu cuenta de Google.</p> <!-- Mensaje descriptivo -->
          </div>
          <q-btn color="primary" class="full-width q-mb-md google-btn">
            <q-icon name="ion-logo-google" class="q-mr-sm" />
            Iniciar sesión con Google
          </q-btn>
        </div>
      </q-card>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ionMdSquareOutline } from '@quasar/extras/ionicons-v4'


</script>

