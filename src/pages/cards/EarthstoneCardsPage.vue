/* COMPONENT DEFINITION */

<template>
  <q-page id="container" class="row justify-center items-center">
    <div
      id="cardsContainer"
      class="row justify-center items-center"
      ref="cardsContainer"
    >
      <EarthstoneCardComponent
        v-for="card in cards"
        :key="card.imgSrc"
        :cardInfos="card"
        :enableHover="true"
      />
    </div>
  </q-page>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from 'vue';
export default defineComponent({
  name: 'EarthstoneCardsPage',
});

const metaData = {
  link: {
    tinySlider: {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
    },
  },
};
</script>

/* COMPONENT SETUP */

<script setup lang="ts">
import EarthstoneCardComponent from 'components/cards/earthstone-cards/EarthstoneCardComponent.vue';
import {
  magicCardData,
  MagicCardInfos,
} from 'src/models/earthstone-cards.model';
import { useMeta } from 'quasar';
import { tns } from 'tiny-slider';
useMeta(metaData);

/*--- Data ---*/

const cards: Ref<MagicCardInfos[]> = ref(magicCardData);
const cardsContainer: Ref<HTMLElement | null> = ref(null);

/*--- Methods ---*/

// cardsContainer.value.slick();
</script>

/* COMPONENT STYLE */

<style lang="scss" scoped>
#container {
  background-image: url('https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt87edf02f20f6dafb/5f974530ab20b60bdceae855/red-felt-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  flex-wrap: wrap;
}
</style>
