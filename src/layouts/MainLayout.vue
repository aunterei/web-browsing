<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <MenuItem
          v-for="menuItem in menuItems"
          :key="menuItem.label"
          :to="menuItem.to"
          :label="menuItem.label"
          :caption="menuItem.caption"
          :icon="menuItem.icon"
          :pages="menuItem.pages"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuItem from 'src/components/menu/MenuItem.vue';

const menuItems = [
  {
    label: 'Homepage',
    icon: 'home',
    to: '/',
  },
  {
    label: 'Cards',
    icon: 'contact_mail',
    pages: [
      {
        label: 'Club Pale',
        caption: 'Product card inspired by Pepsi',
        icon: 'sports_bar',
        to: '/cards/club-pale',
      },
      {
        label: 'Earthstone Cards',
        caption: 'Rotation animation on mouse move',
        icon: 'auto_fix_normal',
        to: '/cards/earthstone',
      },
    ],
  },
  {
    label: 'Grid',
    icon: 'dashboard',
    pages: [
      {
        label: 'Image Gallery',
        caption: 'Images with info on hover',
        icon: 'image',
        to: '/grid/image-gallery',
      },
    ],
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuItem,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuItems: menuItems,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
