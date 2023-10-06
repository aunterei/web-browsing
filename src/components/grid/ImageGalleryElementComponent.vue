/* COMPONENT TEMPLATE */
<template>
  <div
    class="galleryElement"
    :style="{ color: galleryElement.textColor }"
    ref="galleryCard"
    @mouseenter="toggleDescription(false)"
    @mouseleave="toggleDescription(false)"
    @click="toggleDescription(true)"
  >
    <div class="galleryElement__description column justify-between items-start">
      <h2 class="text-weight-bold">{{ galleryElement.title }}</h2>
      <p>
        {{ galleryElement.description }}
      </p>
      <span v-html="galleryElement.copyrights"></span>
    </div>

    <img
      class="galleryElement__img"
      :src="galleryElement.imgSrc"
      :alt="galleryElement.imgAlt"
    />
  </div>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
  name: 'ImageGalleryElementComponent',
});
</script>

/* COMPONENT SETUP */

<script lang="ts" setup>
import { PropType } from 'vue';
import { ImageGalleryElement } from '../../models/image-gallery-element.model';

/*--- Props ---*/

const props = defineProps({
  galleryElement: {
    type: Object as PropType<ImageGalleryElement>,
    required: true,
  },
});

/*--- Data ---*/
const galleryCard: Ref<HTMLElement | null> = ref(null);
const $q = useQuasar();
let isDescriptionVisible = false;

/*--- Method ---*/

function toggleDescription(isMobile: boolean) {
  if (
    !galleryCard.value ||
    (isMobile && !$q.platform.is.mobile) ||
    (!isMobile && $q.platform.is.mobile)
  )
    return;

  if (isDescriptionVisible) {
    galleryCard.value.classList.remove('slideIn');
    galleryCard.value.classList.add('slideOut');
  } else {
    galleryCard.value.classList.add('slideIn');
    galleryCard.value.classList.remove('slideOut');
  }
  isDescriptionVisible = !isDescriptionVisible;
}
</script>

/* COMPONENT STYLE */

<style lang="scss" scoped>
.galleryElement {
  position: relative;
  width: 350px;
  height: 350px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .galleryElement__img {
    width: 100%;
    height: 100%;
  }

  .galleryElement__description {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 200;

    right: 100%;

    padding: 40px;
    opacity: 1;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    h2 {
      text-transform: uppercase;
      font-size: 3em;
    }
  }

  @keyframes slideIn {
    0% {
      right: 100%;
    }
    100% {
      right: 0;
    }
  }

  //Needed to affect v-html elements
  :deep(a) {
    color: inherit;
  }
}

.slideIn {
  &:after {
    animation: slideIn 0.5s forwards;
    -webkit-animation: slideIn 0.5s forwards;
  }

  .galleryElement__description {
    animation: slideIn 0.7s forwards;
    -webkit-animation: slideIn 0.7s forwards;
  }
}

.slideOut {
  &:after {
    right: 0;
    animation: slideOut 0.5s forwards;
    animation-delay: 0.7s;
    -webkit-animation: slideOut 0.5s forwards;
    -webkit-animation-delay: 0.7s;
  }

  .galleryElement__description {
    right: 0;
    animation: textSlideOut 0.7s forwards;
    -webkit-animation: textSlideOut 0.7s forwards;
  }
}

@keyframes slideOut {
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
}

@keyframes textSlideOut {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .galleryElement {
    width: 300px;
    height: 300px;

    .galleryElement__description {
      padding: 30px 20px;
    }
  }
}
</style>
