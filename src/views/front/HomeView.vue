<template>
  <!-- <VContainer> -->
  <VRow>
    <VCol cols="12" style="padding: 0;">
      <v-carousel :show-arrows="false" hide-delimiters height="600">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
        </v-carousel-item>
      </v-carousel>
      <div class="header">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
        <!-- <div class="shadow"></div> -->
      </div>

    </VCol>
    <VCol cols="12">
    </VCol>
  </VRow>

  <!-- </VContainer> -->
</template>

<style scoped>
.header {
  position: relative;
  text-align: center;
  color: white;
  bottom: 88px;
}


.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}



@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 100px;
    min-height: 70px;
    width: 100%;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}

@media (max-width: 992px) {
  .header {
    bottom: 150px;
  }

  .content {
    height: 40vh;
  }
}

@media (max-width: 1200px) {
  .header {
    bottom: 150px;
  }

  .waves {
    height: 150px;
    min-height: 70px;
    width: 100%;
  }

  .content {
    height: 60vh;
  }
}

@media (max-width: 1500px) {
  .header {
    bottom: 100px;
  }

  .waves {
    height: 100px;
    min-height: 50px;
    width: 100%;
  }
}
</style>

<script>

export default {
  data () {
    return {
      items: [
        {
          src: '@/assets/seafood.png',
        },
        {
          src: 'src/assets/seafood.png',
        },
        {
          src: 'src/assets/seafood.png',
        },
        {
          src: 'src/assets/seafood.png',
        },
      ],
    }
  },
}
</script>