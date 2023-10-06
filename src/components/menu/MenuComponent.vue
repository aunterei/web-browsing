/* COMPONENT TEMPLATE */

<template>
  <q-list>
    <MenuItem
      v-for="item in menuItemsList"
      :key="item.label"
      :menuItem="item"
    />
  </q-list>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
// import { defineComponent, ref, Ref } from 'vue';
// import MenuItem from 'src/components/menu/MenuItem.vue';
// import { MenuItemModel, menuItems } from 'src/models/menu.model';

// export default defineComponent({
//   name: 'MenuComponent',

//   components: {
//     MenuItem,
//   },
// });
</script>

/* COMPONENT SETUP */

<script setup lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import MenuItem from 'src/components/menu/MenuItem.vue';
import { MenuItemModel, menuItems } from 'src/models/menu.model';

const menuItemsList: Ref<MenuItemModel[]> = ref(menuItems);
</script>

<style></style>
