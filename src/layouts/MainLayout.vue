<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          roundqbtnicon
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Web Browsing </q-toolbar-title>

        <div>Antoine Untereiner</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="t">
      <q-list>
        <MenuComponent />
      </q-list>
    </q-drawer>

    <q-page-container id="viewContainer">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuComponent from 'src/components/menu/MenuComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
#viewContainer {
  background-color: #1b1b1b;
  color: white;
}
:deep(.q-drawer),
.toolbar {
  background-color: #242424 !important;
  color: white;
}
</style>
