<template>
  <div style="background: #ECEFF1; width: 100% ;height: 100%;">
    <VContainer style="padding-top:100px" id="ProductviewContainer">
      <VRow>
        <VCol cols="12" md="6" class="d-flex justify-center">
          <VImg :src="product.image" width="100%" height="100%" class="img"></VImg>
        </VCol>
        <VCol cols="12" md="6">
          <VForm :disabled="isSubmitting" @submit.prevent="submit" class="d-flex flex-column justify-space-between">
            <h1 style="font-size: 40px;">{{ product.name }}</h1>
            <pre style="white-space: pre-line; ">{{ product.description }}</pre>
            <VTextField v-model.number="quantity.value.value" type="number" min="1" variant="outlined" density="compact"
              :error-messages="quantity.errorMessage.value" style="width: 6rem; margin-top: 1rem;" bg-color="#E1F5FE">
            </VTextField>
            <div class="d-flex justify-space-between align-center">
              <p class="price-text">${{ product.price }}</p>
              <VBtn color="primary" variant="elevated" height="45" class="btn-cart" type="submit">加入購物車</VBtn>
            </div>
          </VForm>
          <!-- <VBtn color="primary" variant="elevated">加入購物車</VBtn> -->
        </VCol>
      </VRow>
    </VContainer>
    <VOverlay :model-value="!product.sell" persistent class="align-center text-center justify-center">
      <h1 class="text-white">已下架</h1>
      <VBtn to="/">回上頁</VBtn>
    </VOverlay>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'


const route = useRoute();
const createSnackbar = useSnackbar();
const user = useUserStore()

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '最少為 1')
})

const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 0
  }
})

const quantity = useField('quantity');

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
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
})

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = '購物網 | ' + product.value.name
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

<style scoped>
:deep(.img) {
  width: 300px !important;
  height: 510px !important;
  background-position: center center !important;
}

.v-form {
  height: 510px;
}

.price-text {
  font-size: 45px;
  color: red;
  font-weight: 700;
}

.btn-cart:hover {
  background: #e85a7e;
}

@media (min-width: 1280px) {

  :deep(.v-input__control) {
    display: block;
  }

}

@media (min-width: 1920px) {
  .v-container {
    max-width: 1300px;
  }
}
</style>