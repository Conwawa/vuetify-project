<template>
  <div style="background: #ECEFF1; width: 100%;">
    <VContainer>
      <VRow class="d-flex flex-column align-center">
        <VCol cols="12"></VCol>
        <VCol cols="11" md="8" class="d-flex" style="padding-top: 3rem;color: #4ea1d3; font-size: 1.5rem">
          <VIcon icon="mdi-shopping"></VIcon>訂單管理
        </VCol>
        <VCol cols="11" md="8">
          <VTable style="border: 0.5px solid #4ea1d3;">
            <thead>
              <tr style="background: #E1F5FE;">
                <!-- <th>ID</th> -->
                <th>交易日期</th>
                <th>訂購人</th>
                <th>金額</th>
                <th class="text-center">商品</th>
              </tr>
            </thead>
            <tbody style="font-size: 13px;">
              <tr v-for="order in orders" :key="order._id">
                <!-- <td>{{ order._id }}</td> -->
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td>{{ order.user.account }}</td>
                <td class="text-red">${{ + order.total }}</td>
                <td class="py-2">
                  <ul>
                    <li v-for="(item, i) in order.cart" :key="item._id" class="li-decoration">
                      <span class="text-green">★ NO.{{ i + 1 }}</span>
                      <span class="text-primary ml-2">{{ item.product.name }} * {{
                        item.quantity
                      }}</span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
      </VRow>
    </VContainer>
  </div>
  <div id="footer"></div>
</template>
<style>
#footer {
  height: 100vh;
  background: #ECEFF1;
}

.li-decoration {
  list-style: none;
}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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