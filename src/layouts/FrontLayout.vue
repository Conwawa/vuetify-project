<template>
  <VNavigationDrawer v-if="isMobile" v-model="drawer" location="left" temporary style="position: absolute;left: 0px;">
    <VList>
      <template v-for="navitem in navItems" :key="navitem.to">
        <VListItem :to="navitem.to">{{ navitem.text }}</VListItem>
      </template>
      <VListGroup value="會員專區">
        <template v-slot:activator="{ props }">
          <VListItem v-bind="props" title="會員專區" style="color: dark;"></VListItem>
        </template>
        <VListItem to="/register" prepend-icon="mdi-account-plus" v-if="!isLogin">註冊</VListItem>
        <VListItem to="/login" prepend-icon="mdi-login" v-if="!isLogin">登入</VListItem>
        <VListItem to="/order" prepend-icon="mdi-format-list-numbered" v-if="isLogin && !isAdmin">訂單</VListItem>
        <VListItem to="/admin" prepend-icon="mdi-cog" v-if="isLogin && isAdmin">管理</VListItem>
        <VListItem prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout">登出</VListItem>
      </VListGroup>
    </VList>
  </VNavigationDrawer>
  <!-- **************************************************************************************************** -->
  <VAppBar class="p-1 app-bar" :elevation="7">
    <!-- logo -->
    <VBtn to="/" :active="false" class="logo-absolute " height="86px" width="86px">
      <VAppBarTitle style="color:secondary">
        <VImg src="@/assets/logo.png" width="85px"></VImg>
      </VAppBarTitle>
    </VBtn>
    <!-- ---- -->
    <VContainer class="d-flex align-center justify-lg-center">
      <VAppBarNavIcon @click="drawer = true" v-if="isMobile"></VAppBarNavIcon>
      <template v-if="!isMobile">
        <template v-for="navitem in navItems" :key="navitem.to">
          <VBtn :to="navitem.to" class="app-bar-text">{{ navitem.text }}</VBtn>
        </template>
        <VMenu location="bottom">
          <template v-slot:activator="{ props }">
            <VBtn v-bind="props" class="app-bar-text">會員專區</VBtn>
          </template>
          <VList>
            <VListItem to="/register" v-if="!isLogin" color="primary">註冊</VListItem>
            <VListItem to="/login" v-if="!isLogin">登入</VListItem>
            <VListItem to="/orders" v-if="isLogin && !isAdmin">訂單</VListItem>
            <VListItem to="/admin" v-if="isLogin && isAdmin">管理</VListItem>
            <VListItem v-if="!isMobile && isLogin" @click="logout">登出</VListItem>
          </VList>
        </VMenu>
      </template>
      <!-- <VSpacer></VSpacer> -->
      <!--        右邊icon        -->
    </VContainer>
    <VBtn to="/cart">
      <VBadge floating :content="cart.toString()" color="danger">
        <VIcon icon="mdi-cart"></VIcon>
      </VBadge>
    </VBtn>
  </VAppBar>
  <VMain>
    <RouterView key="$route.path"></RouterView>
  </VMain>
  <!-- footer -->

  <div class="footer">
    <div> <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn></div>
    Copyright © 僅為泰山網頁前端班蘇莉鈞做專題用
  </div>
</template>

<style scoped>
.v-main {
  /* --v-layout-top: 108px !important; */
  padding-top: var(--v-layout-top) !important;
}

.input {
  border: 1px solid #fff;
  border-radius: 3px;
}

.search {
  border: 0.5px solid #fff;
  border-radius: 1%;
  width: 8rem;
}

.logo-absolute {
  position: absolute;
  top: -10px;
  left: 37%;
}

@media (min-width: 1280px) {
  .logo-absolute {
    top: -10px;
    left: 0px;
  }
}

@media (min-width: 1920px) {
  .v-container {
    max-width: 1300px;
  }
}

.p-1 {
  padding: 1rem 0;
}

.app-bar {
  background: linear-gradient(20deg, #7ed9fc, #023e7d);
  color: #d8e9ef;
}

.app-bar-text {
  font-size: 18px;
}

.app-bar-text:hover {
  background: linear-gradient(20deg, #7474BF, #348AC7);
}

.footer {
  background: linear-gradient(20deg, #7474BF, #348AC7);
  width: 100%;
  /* height: 6rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 20px 10px;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
// import { api } from '@/plugins/axios'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)


const drawer = ref(false)


const navItems = computed(() => {
  return [
    { to: '/fish', text: '鮮魚本舖', },
    { to: '/shrimpcrab', text: '鮮蝦螃蟹' },
    { to: '/shellmollusk', text: '貝類軟體' },
    { to: '/preparedfood', text: '調理珍饌' },
    { to: '/meat', text: '嚴選肉品' },
    { to: '/othersitems', text: '其他鮮貨' }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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


const icons =
  [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]

</script>