import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { apiAuth } from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const cart = ref(0)
  const phoneNumber = ref('')
  const role = ref(UserRole.USER)

  const login = (data) => {
    token.value = data.token
    account.value = data.account
    cart.value = data.cart
    phoneNumber.value = data.phoneNumber
    role.value = data.role
  }

  // 判斷有沒有登入
  const isLogin = computed(() => {
    return token.value.length > 0
  })

  // 判斷是否為管理員
  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/120/${account.value}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`
  })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      phoneNumber.value = data.result.phoneNumber
      cart.value = data.result.cart
      role.value = data.result.role
    } catch (error) {
      token.value = ''
    }
  }

  const logout = () => {
    token.value = ''
    account.value = ''
    phoneNumber.value = ''
    cart.value = 0
    role.value = UserRole.USER
  }

  return {
    token,
    account,
    cart,
    phoneNumber,
    role,
    login,
    isLogin,
    isAdmin,
    avatar,
    getProfile,
    logout
  }
}, {
  persist: {
    key: '20230726',
    paths: ['token']
  }
})