import requests from "./ajax";
//发请求：axios发请求返回的结果是promise对象
//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqCategoryList = () => requests({ url: `/product/getBaseCategoryList` })
import mockRequests from "./mockAjax"
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')
//获取floor
export const reqGetFloorList = () => mockRequests.get("/floor")
//获取search数据,地址:/api/list  请求方式:post  参数:需要带参数
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })
//获取产品详情信息接口，URL: /api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuid) => requests({ url: `/item/${ skuid }`, method: "get" })
//将产品添加购物车接口，URL:/api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
//获取购物车信息接口，URL:/api/cart/cartList   method:get
export const reqCartList = ()=>requests({url:"/cart/cartList",method:"get"})
//获取删除购物车当前商品接口，URL:/api/cart/deleteCart/{skuId}   method:DELETE 
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})
//修改商品的选中状态,URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get 
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
//获取验证码,URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:"get"})
//注册接口url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})
//登录接口，URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'})
////获取用户信息【需要带着用户的token向服务器要用户信息】,URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录,URL:/api/user/passport/logout  get
export const reqUserULogout = ()=>requests({url:'/user/passport/logout',method:'get'})
//获取用户地址信息，URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
//获取商品清单,URL:/api/order/auth/trade   method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});
//提交订单的接口,URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post,
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//支付的接口，URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
//获取支付订单状态,URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取订单数据,api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})