//引入路由组件
//import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupBuy from '@/pages/Center/groupOrder'
export default [
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false },
    },
    {
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: { show: true },
        name: "search",
    },
    {
        path: "*",
        redirect: "/home",
    },
    {
        path: "/detail/:skuid?",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/addCartSuccess",
        component: AddCartSuccess,
        meta: { show: true },
        name: "addcartsuccess",
    },
    {
        path: "/shopCart",
        component: ShopCart,
        meta: { show: true },
        name: "shopCart",
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        name: "trade",
        /* 只能从购物车界面, 才能跳转到交易界面 */
        beforeEnter(to, from, next) {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        name: "pay",

        /* 只能从交易界面, 才能跳转到支付界面 */
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true },
        name: "paysucess",
        /* 只有从支付界面, 才能跳转到支付成功的界面 */
        beforeEnter: (to, from, next) => {
            if (from.path === 'pay') {
                next()
            } else {
                next('pay')
            }
        }
    },
    {
        path: '/center',
        component: Center,
        children: [
            {
                // path: '/center/myorder',
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'groupbuy',
                component: GroupBuy,
            },

            {
                path: '',
                redirect: 'myorder'
            }
        ]
    },
]
