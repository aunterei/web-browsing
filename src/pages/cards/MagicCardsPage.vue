/* COMPONENT DEFINITION */

<template>
  <q-page id="container" class="row justify-center items-center">
    <MagicCardComponent
      v-for="card in cards"
      :key="card.imgSrc"
      :cardInfos="card"
    />
  </q-page>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MagicCardsPage',
});
</script>

/* COMPONENT SETUP */

<script setup lang="ts">
import { ref } from 'vue';
import MagicCardComponent from 'components/cards/magic-cards/MagicCardComponent.vue';

const cards = ref([
  {
    scaleFactor: 0.7,
    imgSrc:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4b455f08b954e92374187978d18df48a0136687909e8e5e819170f4e8b8eebd7.png',
  },
  {
    scaleFactor: 0.7,
    imgSrc:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1e84fea4ea18e2a3bbea85bf5577b04fd1b83bc6d1e421c32b522dd13d79848e.png',
  },
  {
    scaleFactor: 0.7,
    imgSrc:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e5db90538a847f67242357fc8b9f706e67ba9d6fce201d840d4665ca4325e945.png',
  },
  {
    scaleFactor: 0.7,
    imgSrc:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7c7680a306aef84fb3b497d3a631e12e2e003fa113c936aa262bf412e512b03f.png',
  },
]);
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