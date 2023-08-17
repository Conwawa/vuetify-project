<template >
  <div style="padding-bottom: 100px;" class="background">
    <div class="routename"></div>
    <VContainer>
      <VRow class="d-flex justify-center ">
        <VCol cols="12"></VCol>
        <VCol cols="12"></VCol>
        <VCol cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
          <ProductCard v-bind="product"></ProductCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
<style scoped>
.background {
  background: url(../../assets/ocean.jpg) no-repeat 100% 100%/cover;
  /* background-size: 100% 100%; */
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: relative;
}

.routename {
  background: url(../../assets/woodshrimp.png) no-repeat;
  position: absolute;
  top: 0.6%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 150px;
  z-index: 1000;
  background-size: contain;
  margin-bottom: 100px;
}

.v-container {
  position: relative;
  padding-top: 50px;
}

@media (min-width: 960px) {
  .routename {
    top: 1.6%;
  }
}

@media (min-width: 1280px) {
  .routename {
    top: 2.6%;
  }
}
</style>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

const products = ref([]);
const createSnackbar = useSnackbar();



(async () => {
  try {
    const { data } = await api.get('/products/shrimpcrab')
    console.log(data);
    products.value.push(...data.result)
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