<template>
  <q-btn icon="ion-logo-google" @click="handleLogin" label="Iniciar sesion" />
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/#/",
    },
  });
};
</script>
