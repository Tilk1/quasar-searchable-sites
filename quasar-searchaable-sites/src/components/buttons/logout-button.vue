<template>
  <q-btn icon="logout" @click="handleLogout" label="Cerrar sesion" />
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

const handleLogout = () =>
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    }
  });
</script>
