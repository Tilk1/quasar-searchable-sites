<template>
  <q-page>
    <q-list bordered>
      <q-item v-for="site in sites" :key="site.Id">
        <q-item-section avatar>
          <q-avatar>
            <q-icon name="web" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          {{ site.nombre }}
        </q-item-section>
        <q-item-section side>
          <router-view>
          <q-btn icon="settings" @click="navigateToDetail(site.Id)" />
          </router-view>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="delete" @click="eliminar(site.Id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeMount } from 'vue';
import SiteService from "../services/SiteService.js"
import { useRouter } from 'vue-router';
const router = useRouter();

const sites = ref([]);

function setSites() {
  SiteService.getsites().then(result => { sites.value = result })
}

onBeforeMount(() => {
  setSites();
})

function navigateToDetail(id) {
  router.push('/sites/edit/' + id);
}


function eliminar(id) {
  SiteService.delete(id).then(result => {
    setSites();
  })
}

</script>
