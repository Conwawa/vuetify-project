<template>
  <div class="thumbtack"></div>
  <VCard max-width="344" class="card text-center">
    <div class="card-header">
      <VImg :src="image" height="250px" cover class="card-img"></VImg>
    </div>
    <VCardTitle>
      <RouterLink :to="'/products/' + _id" class="text-dark text-decoration-none" style="font-size: 18px;">
        {{ name }}
      </RouterLink>
    </VCardTitle>
    <div class="d-flex justify-space-between align-center mb-4">
      <VCardSubtitle class="price">${{ price }}</VCardSubtitle>
      <VCardActions class=" d-flex align-center">
        <VBtn color="primary" variant="elevated" prepend-icon="mdi-cart" class="btn-cart " @click="addCart">加入購物車
        </VBtn>
      </VCardActions>
    </div>
  </VCard>
</template>

<style>
.thumbtack {
  width: 100px;
  height: 100px;
  position: relative;
  top: 60px;
  left: -137px;
  background: url(../assets/red.png);
  background-size: contain;
  z-index: 10;
  margin: auto;
}

.card {
  border-radius: 6px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  /* background: rgba(255, 255, 255, 0.9); */
  position: relative;
  margin: auto;
}

.card-header {
  height: 35%;
  width: 100%;
  padding: 0px;
  overflow: hidden;
}

.price {
  color: red;
  font-weight: bolder;
  font-size: 1.5rem;
}

.btn-cart {
  margin-right: 0.5rem;
}

.btn-cart:hover {
  background: #e85a7e !important;
}

.card-img {
  object-position: center bottom;
  transition: 1s;
}

.card-img:hover {
  transform: scale(1.25) rotate(2deg);
  overflow: hidden;
}

@media (min-width: 1280px) {
  .thumbtack {
    left: -108px;
  }
}

@media (min-width: 1920px) {
  .thumbtack {
    left: -140px;
  }
}
</style>

<script setup>
// import { defineProps } from 'vue';
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {
    type: Boolean,
    default: () => true
  }
})

const addCart = async () => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>