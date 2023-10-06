/* COMPONENT TEMPLATE */

<template>
  <q-expansion-item
    expand-separator
    :content-inset-level="0.2"
    :icon="menuItem.icon"
    :label="menuItem.label"
    v-if="menuItem.pages?.length && !menuItem.to"
  >
    <q-list>
      <PageItem
        v-for="page in menuItem.pages"
        :key="page.label"
        :label="page.label"
        :caption="page.caption"
        :icon="page.icon"
        :to="page.to"
      />
    </q-list>
  </q-expansion-item>

  <PageItem
    v-else
    :label="menuItem.label"
    :caption="menuItem.caption"
    :icon="menuItem.icon"
    :to="menuItem.to"
  />
</template>

/* COMPONENT DEFINITION */
<script lang="ts">
// import { defineComponent } from 'vue';
// import PageItem from 'src/components/menu/PageItem.vue';
// export default defineComponent({
//   name: 'MenuItem',
//   component: {
//     PageItem,
//   },
// });
</script>
/* COMPONENT SETUP */

<script lang="ts" setup>
import { MenuItemModel } from 'src/models/menu.model';
import PageItem from 'src/components/menu/PageItem.vue';
import { PropType } from 'vue';

/*--- Props ---*/

const props = defineProps({
  menuItem: {
    type: Object as PropType<MenuItemModel>,
    required: true,
  },
});
</script>
