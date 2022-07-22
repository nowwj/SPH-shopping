//trade模块小仓库
import { reqAddressInfo ,reqOrderInfo } from "@/api"
const state = {
   address:[],
   orderInfo:{}
}
const mutations = {
    GETADDRESSINFO(state,address){
        state.address = address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions = {
   async getAddressInfo({commit}){
      let result = await reqAddressInfo()
      if(result.code == 200){
          commit("GETADDRESSINFO",result.data)
      }
   },
   async getOrderInfo({commit}) {
    let result = await reqOrderInfo()
    if(result.code == 200){
        commit("GETORDERINFO",result.data)
    } 
 },
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters,
}