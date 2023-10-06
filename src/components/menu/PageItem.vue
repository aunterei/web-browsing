/* COMPONENT TEMPLATE */

<template>
  <q-item clickable tag="router-link" :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption class="caption">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PageItem',
});
</script>

/* COMPONENT SETUP */

<script lang="ts" setup>
/*--- Props ---*/

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  to: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.caption {
  color: white;
}
</style>
