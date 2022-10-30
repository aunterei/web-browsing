/* COMPONENT DEFINITION */

<template>
  <q-page id="container" class="row justify-center items-center">
    <EarthstoneCardComponent
      v-for="card in cards"
      :key="card.imgSrc"
      :cardInfos="card"
    />
  </q-page>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { defineComponent, Ref } from 'vue';
export default defineComponent({
  name: 'EarthstoneCardsPage',
});
</script>

/* COMPONENT SETUP */

<script setup lang="ts">
import { ref } from 'vue';
import EarthstoneCardComponent from 'components/cards/earthstone-cards/EarthstoneCardComponent.vue';
import {
  magicCardData,
  MagicCardInfos,
} from 'src/models/earthstone-cards.model';

const cards: Ref<MagicCardInfos[]> = ref(magicCardData);
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