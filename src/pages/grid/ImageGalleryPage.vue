/* COMPONENT DEFINITION */

<template>
  <q-page id="background" class="row justify-center items-center">
    <div id="container" class="row justify-center items-center">
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

const galleryElements: Ref<ImageGalleryElement[]> = ref(galleryData);
</script>

/* COMPONENT STYLE */

<style lang="scss" scoped>
#background {
  background-color: #141414;
}

#container {
  max-width: 80%;
  margin: 20px 0;
  gap: 25px;
}
</style>