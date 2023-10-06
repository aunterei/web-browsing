<template>
  <q-page class="column justify-center items-center">
    <p class="q-mt-md" :style="{ color: 'pink' }" v-if="$q.platform.is.mobile">
      Tap on card to reveal description
    </p>
    <div
      class="row justify-center items-center"
      :class="$q.platform.is.mobile ? 'q-mb-md' : 'q-my-md'"
    >
      <div
        class="card row items-center"
        ref="card"
        @mouseenter="toggleDescription(false)"
        @mouseleave="toggleDescription(false)"
        @click="toggleDescription(true)"
      >
        <div class="circle"></div>
        <div class="description">
          <h2 class="text-weight-bold">Club Pale</h2>
          <p>
            This is a placeholder text. The image rights go to the bison beer
            company. Check their website by clicking the button below.
          </p>
          <a href="https://www.bisonbeer.co.uk/" target="_blank"
            >Go to website</a
          >
        </div>
        <img src="~/assets/cards/test/can.png" />
      </div>
    </div>
  </q-page>
</template>

/* COMPONENT DEFINITION */

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
  name: 'ClubPalePage',
});
</script>

/* COMPONENT SETUP */

<script lang="ts" setup>
/*--- Data ---*/
const card: Ref<HTMLElement | null> = ref(null);
const $q = useQuasar();
let isDescriptionVisible = false;

/*--- Method ---*/

function toggleDescription(isMobile: boolean) {
  if (
    !card.value ||
    (isMobile && !$q.platform.is.mobile) ||
    (!isMobile && $q.platform.is.mobile)
  )
    return;

  card.value?.classList.toggle('hovered');
  isDescriptionVisible = !isDescriptionVisible;
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 600px;
  height: 300px;
  border-radius: 20px;
  transition: 0.5s;

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #d83133;
      clip-path: circle(120px at center);
      transition: 0.5s;
    }
  }

  img {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    transition: 0.5s;
  }

  .description {
    position: relative;
    color: #fff;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    h2 {
      text-transform: uppercase;
      font-size: 3em;
      margin-bottom: 5px;
    }

    a {
      position: relative;
      color: #000;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: #fff;
      margin-top: 10px;
      display: inline-block;
    }
  }
}

.hovered {
  img {
    left: 75%;
    width: 225px;
  }

  .circle::before {
    background-color: #0065c3;
    clip-path: circle(400px at center);
  }

  .description {
    left: 0;
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 900px) {
  .card {
    width: auto;
    max-width: 350px;
    align-items: flex-start;

    .description {
      width: 100%;
      left: 0;
      padding: 30px;
    }
  }

  .hovered {
    height: 600px;

    img {
      top: 70%;
      left: 50%;
      width: 175px;
    }
  }
}
</style>
