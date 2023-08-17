<template>
  <div class="background">
    <VContainer class="mt-4 h-100">
      <VRow class="h-100  " justify="center" align-content="center">
        <VCol cols="11" md="6" class="backdrop-filter" style="padding: 50px 20px;">
          <h1 class="text-center" style="color: #333;">登入會員</h1>
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField label="帳號" type="email" v-model="account.value.value"
              :error-messages="account.errorMessage.value">
            </VTextField>
            <VTextField label="密碼" counter maxlength="20" type="password" v-model="password.value.value"
              :error-messages="password.errorMessage.value"></VTextField>
            <div class="text-center">
              <VBtn color="primary" type="submit">登入</VBtn>
            </div>
          </VForm>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
<style scoped>
.background {
  background: url(../../assets/sea-background.jpeg) no-repeat 100% 100%/cover;
  /* background-size: 100% 100%; */
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.backdrop-filter {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 3%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
}
</style>

<script setup>
import { useForm, useField } from 'vee-validate'
import validator from 'validator'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(6, '密碼最少 6 個字')
    .max(20, '密碼最多 20 個字')
})
/* useform() 才能 usefield() 順序有差 */

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      cart: data.result.cart,
      phoneNumber: data.result.phoneNumber,
      role: data.result.role
    })

    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    console.log(error);
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
</script>