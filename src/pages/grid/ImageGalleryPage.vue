/* COMPONENT TEMPLATE */

<template>
  <q-page class="column justify-center items-center">
    <p class="q-mt-md" :style="{ color: 'pink' }" v-if="$q.platform.is.mobile">
      Tap on card to reveal description
    </p>
    <div
      id="container"
      class="justify-center items-center"
      :class="$q.platform.is.mobile ? 'q-mb-md' : 'q-my-md'"
    >
      <ImageGalleryElementComponent
        v-for="galleryElement in galleryElements"
        :key="galleryElement.title"
        :galleryElement="galleryElement"
      />
    </div>
  </q-page>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent, Ref } from 'vue';

export default defineComponent({
  name: 'ImageGalleryPage',
});
</script>

/* COMPONENT SETUP */

<script setup lang="ts">
import { ref } from 'vue';
import ImageGalleryElementComponent from 'src/components/grid/ImageGalleryElementComponent.vue';
import {
  galleryData,
  ImageGalleryElement,
} from 'src/models/image-gallery-element.model';
import { useQuasar } from 'quasar';

const galleryElements: Ref<ImageGalleryElement[]> = ref(galleryData);
const $q = useQuasar();

console.log($q.platform);
</script>

/* COMPONENT STYLE */

<style lang="scss" scoped>
#container {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 25px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  #container {
    grid-template-columns: repeat(auto-fill, 300px);
  }
}
</style>
