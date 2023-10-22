<script setup>
import { ref } from 'vue'
import { onBeforeMount } from 'vue';
import SiteService from "../services/SiteService.js"

const sites = ref([]);

function getSubtitle(site){
    return `${site.url} | Cada ${site.frecuencia} | ${site.ultima}`
}


function setSites() {
    SiteService.getsites().then(result => {
        console.log(result);
        sites.value = result;
    }).catch(error => {
        console.error(error);
    });
}

onBeforeMount(() => {
    setSites();
})
</script>

<template>
  <q-page>
    <q-container>
      <q-list bordered>
        <q-item
          v-for="site in sites"
          :key="site.Id"
        >
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="web" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            {{ site.nombre }}
          </q-item-section>
          <q-item-section side>
            <q-btn icon="settings" @click="navigateToDetail(site.Id)" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-container>
  </q-page>
</template>

