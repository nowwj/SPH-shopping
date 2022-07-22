//detail模块小仓库
import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api'
import {getUUID} from '@/untils/uuid_token'
const state={
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
    state.goodInfo = goodInfo
    },
}
const actions={
   async getGoodInfo({commit},skuid){
    let result = await reqGoodsInfo(skuid)
    if (result.code == 200){
        commit("GETGOODINFO",result.data)
    }
   },
   async addOrUpdateShopCart({commit},{skuid,skuNum}){
     //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
    //不需要在三连环（仓库存储数据了）
    //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
       let result = await reqAddOrUpdateShopCart(skuid,skuNum)
       if(result.code==200){
           //返回的是成功的标记
           return "OK"
       }else{
           //返回的是失败的标记
           return Promise.reject(new Error("Faile"))
       }
   },
}
//项目当中getters主要的作用是:简化仓库中的数据(简化数据而生)
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters={
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
}