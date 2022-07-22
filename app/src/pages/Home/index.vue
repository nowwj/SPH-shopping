<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav/>
  
    <!-- 其他组件 -->
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages//Home/Recommend'
import Like from '@/pages//Home/Like'
import Brand from '@/pages//Home/Brand'
import Rank from '@/pages//Home/Rank'
import Floor from '@/pages//Home/Floor'
import {mapState} from 'vuex'
export default {
  name: "",
  components:{
    ListContainer,
    Recommend,
    Like,
    Brand,
    Rank,
    Floor,
  },
  mounted() {
    //派发一个action||获取floor数据
    this.$store.dispatch("getFloorList");
  },
  computed:{
   ...mapState({
     floorList: (state) => {
        return state.home.floorList;
      },
   })
  },
};
</script>

<style>
</style>