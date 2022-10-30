<template>
  <q-expansion-item
    expand-separator
    :content-inset-level="0.2"
    :icon="icon"
    :label="label"
    :caption="caption"
    v-if="pages.length && !to"
  >
    <q-list>
      <PageItem
        v-for="page in pages"
        :key="page.label"
        :label="page.label"
        :caption="page.caption"
        :icon="page.icon"
        :to="page.to"
      />
    </q-list>
  </q-expansion-item>

  <PageItem v-else :label="label" :caption="caption" :icon="icon" :to="to" />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import PageItem from 'src/components/menu/PageItem.vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    pages: {
      type: Array,
      default: () => [],
    },
    to: {
      type: String,
    },
  },
  components: {
    PageItem,
  },
});
</script>
