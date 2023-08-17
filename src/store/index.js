// Utilities 將拿到的 jwt 放到 localstorage 裡面
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persistedstate)

export default pinia

