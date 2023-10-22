<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Searchable sites
        </q-toolbar-title>
            <!-- Botón de modo oscuro -->
        <q-btn
          flat
          dense
          round
          icon="dark_mode"
          aria-label="Toggle Dark Mode"
          @click="toggleDarkMode"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Panel de navegación
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'; // Importa useQuasar desde Quasar
import EssentialLink from 'components/EssentialLink.vue'; // Asegúrate de importar EssentialLink correctamente

const linksList = [
  {
    title: 'Inicio',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Iniciar sesion',
    icon: 'login',
    link: '/#/login'
  },
  {
    title: 'Agregar sitio',
    icon: 'add_circle_outline',
    link: '/#/sites/add'
  },
  {
    title: 'Mis sitios',
    icon: 'code',
    link: '/#/sites'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const $q = useQuasar(); // Accede a Quasar

    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const toggleDarkMode = () => {
      $q.dark.toggle(); // Toggle del modo oscuro
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
      toggleDarkMode // Agrega la función de cambio de modo oscuro
    };
  }
});
</script>

