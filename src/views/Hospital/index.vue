<!-- 详情页架子 -->
<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span>/ 医院信息</span>
      </div>
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="changeActive('Register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="2" @click="changeActive('Detail')">
          <el-icon>
            <document />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="3" @click="changeActive('Notice')">
          <el-icon>
            <setting />
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="4" @click="changeActive('Info')">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="5" @click="changeActive('Operate')">
          <el-icon>
            <search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//左侧菜单需要用到的图标
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled,
} from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import useDetailStore from "@/store/modules/detail";
const detailStore = useDetailStore();
const changeActive = (path: string) => {
  router.push({ name: path });
};
onMounted(() => {
  detailStore.getDetailData(route.params.id as string);
  detailStore.getHospitalDeparment(route.params.id as string);
});
</script>

<style scoped lang="scss">
.hospital {
  width: 1200px;
  min-height: 700px;
  margin-top: 75px;
  display: flex;
  padding-top: 10px;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .top {
      font-size: 14px;
    }
  }
  .content {
    flex: 8;
  }
}
</style>
