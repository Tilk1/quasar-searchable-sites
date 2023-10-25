<template>
  <q-btn icon="ion-logo-googleplus" @click="handleSignUp" label="Registrarse" />
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleSignUp = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
    authorizationParams: {
      screen_hint: "signup",
    }
  });
};
</script>
