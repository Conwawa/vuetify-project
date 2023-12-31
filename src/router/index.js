// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '禾家HoJia',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/front/RegisterView.vue'),
        meta: {
          title: '禾家HoJia | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/front/LoginView.vue'),
        meta: {
          title: '禾家HoJia | 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/front/ProductView.vue'),
        meta: {
          title: '禾家HoJia | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/front/CartView.vue'),
        meta: {
          title: '禾家HoJia | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/front/OrdersView.vue'),
        meta: {
          title: '禾家HoJia | 訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'fish',
        name: 'Fish',
        component: () => import(/* webpackChunkName: "fish" */ '@/views/front/FreshFish.vue'),
        meta: {
          title: '禾家HoJia | 鮮魚本舖',
          login: false,
          admin: false
        }
      },
      {
        path: 'shrimpcrab',
        name: 'Shrimpcrab',
        component: () => import(/* webpackChunkName: "shrimpcrab" */ '@/views/front/ShrimpCrab.vue'),
        meta: {
          title: '禾家HoJia | 鮮蝦螃蟹',
          login: false,
          admin: false
        }
      },
      {
        path: 'shellmollusk',
        name: 'Shellmollusk',
        component: () => import(/* webpackChunkName: "shellmollusk" */ '@/views/front/ShellMollusk.vue'),
        meta: {
          title: '禾家HoJia | 貝類軟體',
          login: false,
          admin: false
        }
      },
      {
        path: 'preparedfood',
        name: 'Preparedfood',
        component: () => import(/* webpackChunkName: "preparedfood" */ '@/views/front/PreparedFood.vue'),
        meta: {
          title: '禾家HoJia | 調理珍饌',
          login: false,
          admin: false
        }
      },
      {
        path: 'meat',
        name: 'Meat',
        component: () => import(/* webpackChunkName: "meat" */ '@/views/front/FreshMeat.vue'),
        meta: {
          title: '禾家HoJia | 嚴選肉品',
          login: false,
          admin: false
        }
      },
      {
        path: 'othersitems',
        name: 'Othersitems',
        component: () => import(/* webpackChunkName: "othersitems" */ '@/views/front/OthersItems.vue'),
        meta: {
          title: '禾家HoJia | 其他鮮貨',
          login: false,
          admin: false
        }
      }
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/HomeView.vue'),
        meta: {
          title: '禾家HoJia | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/ProductsView.vue'),
        meta: {
          title: '禾家HoJia | 商品註冊',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin-orders" */ '@/views/admin/OrdersView.vue'),
        meta: {
          title: '禾家HoJia | 訂單管理',
          login: true,
          admin: true
        }
      }
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  // 剛進網頁時的第一次路由跳轉
  if (from === START_LOCATION) {
    // 取得使用者資訊
    await user.getProfile()
  }

  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
    // 如果有登入，去註冊或登入頁，導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果沒登入，去需要登入的頁面，導向回登入頁
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果不是管理員，去需要管理員，導向回首頁
    next('/')
  } else {
    // 不做導向
    next()
  }
})

export default router
