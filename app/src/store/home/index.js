//home模块小仓库
//引入api
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const actions = {
    //通过api里面的接口函数调用，向服务器发请求
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        //console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
            //console.log(result);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
        //console.log(result);
    }
}
//获取首页轮播图数据
const getters = {};
export default ({
    state,
    mutations,
    actions,
    getters
})