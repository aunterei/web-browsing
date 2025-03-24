<script setup lang="ts">
import { onMounted, ref } from "vue";
import items from "./menu-items";

let menuItems: Element[] = [];
let backgroundImages: Element[] = [];
let imageContainers: Element[] = [];
let textContainers: Element[] = [];
let titleContainers: Element[] = [];
let circleContainers: Element[] = [];
let titleBigContainers: Element[] = [];
let yearContainers: Element[] = [];
let overlay: Element | null;
let menuOpened = false;
let menuDeployed = false;
let menuText = ref("");

let lastScrollTop = 0;
let scrollingUp = false;

onMounted(() => {
  menuItems = [...document.querySelectorAll(".menuItem")];
  backgroundImages = [...document.querySelectorAll(".backgroundImage")];
  imageContainers = [...document.querySelectorAll(".imageContainer")];
  textContainers = [...document.querySelectorAll(".menuItem__text")];
  titleContainers = [...document.querySelectorAll(".titleContainer")];
  circleContainers = [...document.querySelectorAll(".menuItem__circle")];
  titleBigContainers = [...document.querySelectorAll(".menuItem__titleBig")];
  yearContainers = [...document.querySelectorAll(".menuItem__year")];
  overlay = document.querySelector("#overlay");

  for (let i = 0; i < 60; i++) {
    menuText.value +=
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex\n" +
      "        harum incidunt labore laborum saepe similique ut? Ad, ipsa, magnam! Ab\n" +
      "        adipisci aperiam enim facilis nihil perspiciatis reiciendis sint totam.";
  }
});
function menuItemMouseEnter(index: number) {
  if (!menuOpened) {
    gsap
      .timeline({ ease: "bounce.out" })
      .to(backgroundImages[index], {
        opacity: 1,
        duration: 0.4,
      })
      .to(
        imageContainers[index],
        {
          y: -40,
          duration: 0.4,
        },
        0
      )
      .to(
        titleContainers[index],
        {
          y: -60 - 16,
          duration: 0.4,
        },
        0
      )

      .to(
        titleContainers[index],
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        },
        "<+=0.1"
      )
      .to(
        circleContainers[index],
        {
          y: -20,
          duration: 0.4,
        },
        0
      )
      .to(
        circleContainers[index],
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        },
        "<+=0.1"
      );
    // gsap.to(backgroundImages[index], {
    //   opacity: 1,
    //   duration: 0.4,
    // });
    // gsap.to(imageContainers[index], {
    //   y: -40,
    //   duration: 0.4,
    // });
    // gsap.to(titleContainers[index], {
    //   y: -60 - 16,
    //   duration: 0.4,
    // });
    //
    // gsap.to(titleContainers[index], {
    //   opacity: 1,
    //   ease: "power1.in",
    //   duration: 0.4,
    // });
    // gsap.to(circleContainers[index], {
    //   y: -20,
    //   duration: 0.4,
    // });
    // gsap.to(circleContainers[index], {
    //   opacity: 1,
    //   ease: "power1.in",
    //   duration: 0.4,
    // });
  }
}

function menuItemMouseLeave(index: number) {
  if (!menuOpened) {
    gsap.to(backgroundImages[index], { opacity: 0, ease: "power1.out" });
    gsap.to(imageContainers[index], { y: 0, ease: "power1.out" });
    gsap.to(titleContainers[index], { opacity: 0, y: 0, ease: "power1.out" });
    gsap.to(circleContainers[index], { opacity: 0, y: 0, ease: "power1.out" });
  }
}

function menuItemClick(index: number) {
  if (!menuDeployed) {
    menuOpened = true;
    gsap
      .timeline()
      .set(menuItems[index], {
        zIndex: 5000,
      })
      .to(imageContainers[index], {
        width: `${isLandscapeMode() ? "80vh" : "80vw"}`,
        height: `${isLandscapeMode() ? "80vh" : "80vw"}`,
        top: "50%",
        left: "50%",
        borderRadius: "32px",
        y: 0,
      })
      .to(
        overlay,
        {
          backdropFilter: "blur(3px)",
        },
        "<"
      )
      .to(titleBigContainers[index], { opacity: 1 }, ">")
      .to(yearContainers[index], { opacity: 1 }, "<")
      .set(titleContainers[index], { opacity: 0, y: 0 })
      .set(circleContainers[index], { opacity: 0, y: 0 });
  }
}

function deployMenuItem(index: number) {
  if (menuOpened && !menuDeployed) {
    menuDeployed = true;
    gsap
      .timeline()
      .set(overlay, { zIndex: 4000 })
      .set(backgroundImages[index], { zIndex: 3000 })
      .to(imageContainers[index], {
        width: "calc(100vw - 16px)",
        height: "240px",
        top: "calc(120px + 8px)",
        left: "50%",
        borderRadius: "16px",
        y: 0,
      })
      .to(
        overlay,
        {
          backdropFilter: "blur(7px)",
        },
        "<"
      )
      .to(titleBigContainers[index], { top: "96px" }, "<")
      .to(yearContainers[index], { top: "32px" }, "<")
      .to(
        textContainers[index],
        {
          top: "calc(50% + 120px)",
        },
        ">-=0.25"
      )
      .to(
        textContainers[index],
        {
          opacity: 1,
        },
        "<+=0.15"
      );
  }
}

function getItemLeftPosition(index: number): string {
  return `calc(50% - ${(Math.floor(items.length / 2) - index) * 30}px - ${
    (Math.floor(items.length / 2) - index) * 15
  }px)`;
}
function menuItemTextScroll(index: number) {
  let st = textContainers[index].scrollTop;
  scrollingUp = st < lastScrollTop;
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  if (st <= 0 && scrollingUp) {
    menuDeployed = false;
    menuOpened = false;

    gsap
      .timeline()
      .to(titleBigContainers[index], { y: 40, opacity: 0 })
      .to(yearContainers[index], { y: 40, opacity: 0 }, "<+=0.15")
      .to(
        textContainers[index],
        {
          top: "150%",
          opacity: 0,
        },
        "<+=0.25"
      )
      .to(
        imageContainers[index],
        {
          width: "30px",
          height: "40vh",
          top: "50%",
          left: getItemLeftPosition(index),
          borderRadius: "8px",
        },
        "<"
      )
      .to(
        overlay,
        {
          backdropFilter: "blur(1px)",
        },
        "<"
      )
      .to(backgroundImages[index], { opacity: 0 }, "<")
      .set(overlay, { zIndex: 1 })
      .set(backgroundImages[index], { zIndex: 0 })
      .set(menuItems[index], {
        zIndex: 2,
      })
      .set(titleBigContainers[index], { top: "50%" })
      .set(yearContainers[index], { top: "calc(10vh + 32px)" });
  }
}
function isLandscapeMode(): boolean {
  return window.innerWidth > window.innerHeight;
}
</script>

<template>
  <ul>
    <li class="menuItem" v-for="(item, index) in items" :key="item.title">
      <div
        class="imageContainer"
        @mouseenter="menuItemMouseEnter(index)"
        @mouseleave="menuItemMouseLeave(index)"
        @click="menuItemClick(index)"
        @wheel="deployMenuItem(index)"
        :style="{
          left: getItemLeftPosition(index),
        }"
      >
        <img :src="item.imgSrc" :alt="item.alt" />
      </div>

      <span
        class="titleContainer"
        :style="{
          left: getItemLeftPosition(index),
        }"
      >{{ item.title }}</span
      >

      <span
        class="menuItem__circle"
        :style="{
          left: getItemLeftPosition(index),
        }"
      ></span>

      <div class="menuItem__titleBig">
        <h1 class="menuItem__titleBig--title">{{ item.title }}</h1>
        <p class="menuItem__titleBig--author">by {{ item.author }}</p>
      </div>

      <p class="menuItem__year">{{ item.year }}</p>

      <p class="menuItem__text" @scroll="menuItemTextScroll(index)">
        {{ menuText }}
      </p>
    </li>
  </ul>

  <div id="background">
    <div id="overlay"></div>
    <img
      class="backgroundImage"
      v-for="(item) in items"
      :key="item.title"
      :src="item.imgSrc"
      :alt="item.alt"
    />
  </div>
</template>

<style scoped lang="scss">
ul {
  li {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
    pointer-events: none;

    .imageContainer {
      pointer-events: all;

      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 3;
      border-radius: 8px;
      transform: translate(-50%, -50%);

      width: 30px;
      height: 40vh;
      overflow: hidden;

      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .titleContainer {
      position: absolute;
      left: 50%;
      top: calc(50% - 20vh + 16px);
      opacity: 0;
      transform: translate(-50%, -50%);
      font-weight: 200;
      font-style: italic;
    }

    .menuItem__circle {
      position: absolute;
      left: 50%;
      top: calc(50% + 20vh);
      transform: translate(-50%, -50%);
      border: 1px solid white;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      opacity: 0;
    }

    .menuItem__titleBig {
      position: absolute;
      left: calc(50% - 40vh + 32px);
      top: 50%;
      transform: translate(0, -50%);
      z-index: 6000;
      opacity: 0;
    }

    .menuItem__year {
      position: absolute;
      top: calc(10vh + 32px);
      left: calc(50% - 40vh + 32px);
      z-index: 6000;
      opacity: 0;
    }

    .menuItem__text {
      transform: translate(-50%, -50%);
      top: 150%;
      position: absolute;
      left: 50%;
      width: 100vw;
      height: calc(100vh - 240px - 32px);
      overflow-y: scroll;
      pointer-events: all;
      z-index: 6000;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      opacity: 0;
      padding: 0 calc((100vw - 80vh + 64px) / 2);
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

#background {
  #overlay {
    position: fixed;

    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;

    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
  }
  img {
    position: fixed;

    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    object-fit: cover;
    opacity: 0;
  }
}
</style>
