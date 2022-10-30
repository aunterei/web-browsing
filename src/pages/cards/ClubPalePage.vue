<template>
  <q-page id="container" class="row justify-center items-center">
    <div class="card row items-center">
      <div class="circle"></div>
      <div class="description">
        <h2 class="text-weight-bold">Club Pale</h2>
        <p>
          This is a placeholder text. The image rights go to the bison beer
          company. Check their website by clicking the button below.
        </p>
        <a href="https://www.bisonbeer.co.uk/">Go to website</a>
      </div>
      <img src="~/assets/cards/test/can.png" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
#container {
  background-color: #141414;
}

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
  &:hover .circle::before {
    background-color: #0065c3;
    clip-path: circle(400px at center);
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

  &:hover img {
    left: 75%;
    width: 225px;
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

  &:hover .description {
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

    &:hover {
      height: 600px;
    }

    .description {
      width: 100%;
      left: 0;
      padding: 30px;
    }

    &:hover img {
      top: 70%;
      left: 50%;
      width: 175px;
    }
  }
}
</style>