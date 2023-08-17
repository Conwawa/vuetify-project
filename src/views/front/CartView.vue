<template>
  <div style="background: #ECEFF1; width: 100%;height:102%">
    <!-- calc(100vh - 96px - 112px) -->
    <VRow class="d-flex flex-column align-center">
      <VCol cols="12"></VCol>
      <VCol cols="11" md="8" class="d-flex" style="padding-top: 7rem;color: #4ea1d3; font-size: 1.5rem">
        <VIcon icon="mdi-cart"></VIcon>購物車
      </VCol>
      <VCol cols="11" md="8">
        <VTable style="border: dotted 1px #999;">
          <thead>
            <tr style="background: #E1F5FE;">
              <th class="text-center border-right">商品圖</th>
              <!-- <th class="text-center">名稱</th> -->
              <th class="text-center border-right">價格</th>
              <th class="text-center border-right">數量</th>
              <th class="text-center border-right">小計</th>
              <th class="text-center">移除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
              <td class="d-flex justify-start align-center" style="height: 150px;">
                <span>
                  <VImg :src="item.product.image" cover width="90" aspect-ratio="1"></VImg>
                </span>
                <span class="ml-3">{{ item.product.name }}</span>
              </td>
              <!-- <td class="text-center"></td> -->
              <td class="price-text">{{ `$` + item.product.price }}</td>
              <td class="text-center">
                <VBtn color="primary" variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></VBtn>
                {{ item.quantity }}
                <VBtn color="primary" variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></VBtn>
              </td>
              <td class="text-center">{{ item.quantity * item.product.price }}</td>
              <td class="text-center">
                <VBtn color="#BDBDBD" variant="text" icon="mdi-delete" class="icon-delete"
                  @click="updateCart(item.product._id, item.quantity * -1)"></VBtn>
              </td>
            </tr>
            <tr v-if="cart.length === 0" style="height: 360px;">
              <td colspan="6" class="text-center">沒有商品</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>
      <VCol cols="11" md="8" class="d-flex justify-end my-8" style="background: #ECEFF1;">
        <p style="font-size: 1.5rem; font-weight: 500;color: #1A237E;">總金額：{{ `$` + total }}</p>
        <VBtn color="danger" variant="elevated" @click="submit" :disabled="!canCheckout" class="ml-6">結帳</VBtn>
      </VCol>

    </VRow>
  </div>
</template>
<style scoped>
.price-text {
  color: red;
}

.icon-delete:hover {
  border: 1px solid #ECEFF1;
}

.border-right {
  border-right: dotted 1px #999;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const submit = async () => {
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    console.log(error)
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

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
})()
</script>
