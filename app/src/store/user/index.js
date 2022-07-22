//user模块小仓库
//引入api
import { reqGetCode, reqUserRegister,reqUserLogin,reqUserInfo,reqUserULogout } from '@/api'
import {setToken,getToken,removeToken} from '@/untils/token'
const state = {
    code: '',
    token:getToken(),
    userInfo:{},
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state,token,userInfo){
        state.token='',
        state.userInfo={},
        removeToken()
    }
}
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //用户注册
    async userRegister({ commit },user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //用户登录
   async userLogin({commit},data){
        let result = await reqUserLogin(data)
        //服务器下发token，用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN",result.data.token)
            //持久化存储token
            setToken(result.data.token)
            return "ok"
        } else {
             return Promise.reject(new Error("faile"))
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit("GETUSERINFO",result.data)
            return "ok"
        } 
    },
    //退出登录
    //退出登录需要做的事情
    //1:需要发请求，通知服务器退出登录【清除一些数据：token】
    //2:清除项目当中的数据【userInfo、token】
    async userLogout({commit}){
        let result = await reqUserULogout()
        if(result.code == 200){
            commit("CLEAR")
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters = {

}
export default ({
    state,
    mutations,
    actions,
    getters,
})