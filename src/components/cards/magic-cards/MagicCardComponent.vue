/* COMPONENT TEMPLATE */
<template>
  <div class="card__container">
    <img
      class="card"
      ref="card"
      @mousemove="onCardMouseMove($event)"
      @mouseenter="onCardMouseEnter"
      @mouseleave="onCardMouseLeave"
      :height="cardHeight"
      :width="cardWidth"
      :src="cardInfos.imgSrc"
    />
  </div>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MagicCardComponent',
});
</script>

/* COMPONENT SETUP */

<script lang="ts" setup>
import { PropType, ref, Ref } from 'vue';
import { MagicCardInfos } from './magic-cards.model';

/*--- Props ---*/

const props = defineProps({
  cardInfos: {
    type: Object as PropType<MagicCardInfos>,
    required: true,
  },
});

/*--- Data ---*/

const cardHeight: Ref<number> = ref(518 * props.cardInfos.scaleFactor);
const cardWidth: Ref<number> = ref(375 * props.cardInfos.scaleFactor);
const card: Ref<HTMLElement | null> = ref(null);

/*--- Methods ---*/

function onCardMouseMove(e: MouseEvent): void {
  if (e.target && card.value) {
    var rect = card.value.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the elemnt
    var y = e.clientY - rect.top; //y position within the element.
    var xPercent = x / cardHeight.value;
    var yPercent = y / cardWidth.value;

    card.value.style.transform = `perspective(1000px) rotateX(${
      -10 + yPercent * 20
    }deg) rotateY(${10 - xPercent * 20}deg)`;
  }
}

function onCardMouseLeave(): void {
  if (card.value) {
    card.value.style.transition =
      'all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s';
    card.value.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }
}

function onCardMouseEnter(): void {
  if (card.value) {
    card.value.style.transition = 'none';
  }
}
</script>

/* COMPONENT STYLE */

<style lang="scss" scoped>
.card__container {
  transform-style: preserve-3d;
  transition: all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    filter: drop-shadow(rgb(255, 255, 255) 0px 0px 15px);
  }

  .card {
    filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
    cursor: pointer;
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg);

    &:hover {
      filter: drop-shadow(rgb(255, 255, 255) 0px 0px 3px);
    }
  }
}
</style>
