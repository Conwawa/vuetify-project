<template>
  <div class="background">
    <VContainer class="mt-4 h-100">
      <VRow class="h-100" justify="center" align-content="center">
        <!-- <VCol cols="11" md="8">
          <h1 class="text-center" style="color: #777;">會員註冊</h1>
        </VCol> -->
        <VCol cols="11" md="6" class="backdrop-filter py-5">
          <h1 class="text-center" style="color: #333;">會員註冊</h1>
          <VForm v-model="valid" @submit.prevent="register">
            <VTextField v-model="form.account" label="帳號" type="email" :rules="[rules.required, rules.email]">
            </VTextField>
            <VTextField v-model="form.password" label="密碼" type="password" maxLength="20"
              :rules="[rules.min, rules.max, rules.required]" ref="elPassword"
              @update:modelValue="elPasswordConfirm.validate()"></VTextField>
            <VTextField v-model="form.confirmPassword" type="password" label="確認密碼"
              :rules="[rules.min, rules.max, rules.required, rules.confirm]" ref="elPasswordConfirm"
              @update:modelValue="elPassword.validate()"></VTextField>
            <VTextField v-model="form.phoneNumber" label="手機" :rules="[rules.required, rules.phone]"></VTextField>
            <div class="text-center">
              <VBtn color="primary" type="submit" style="height: 2.5rem;">確認送出</VBtn>
            </div>
          </VForm>
        </VCol>
      </VRow>
    </VContainer>>
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
import { ref, reactive } from 'vue'
import validator from 'validator'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const valid = ref(false)

const form = reactive({
  account: '',
  password: '',
  confirmPassword: '',
  phoneNumber: ''
})

const elPassword = ref(null)
const elPasswordConfirm = ref(null)

const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '格式錯誤',
  min: (value) => value.length >= 6 || '密碼至少六個字',
  max: (value) => value.length <= 20 || '密碼最多六個字',
  confirm: () => form.confirmPassword === form.password || '密碼不一致',
  phone: (value) => validator.isMobilePhone(value, 'zh-TW') || '手機錯誤'
}

const register = async () => {
  try {
    await api.post('/users', form)

    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/login')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'danger',
        location: 'bottom'
      }
    })
  }
}

</script>