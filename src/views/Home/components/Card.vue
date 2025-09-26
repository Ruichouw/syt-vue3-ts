<template>
  <div class="card" @click="$router.push(`/hospital/${hospitalList.hoscode}`)">
    <div class="left">
      <div class="title">{{ hospitalList.hosname }}</div>
      <div class="description">
        <span
          ><i class="iconfont icon-a-039_dianzan4" style="font-size: 18px"></i
          >{{ hospitalList.param.hostypeString }}</span
        >
        <span>
          <el-icon><AlarmClock /></el-icon>每天{{
            hospitalList.bookingRule?.releaseTime
          }}放号</span
        >
      </div>
    </div>
    <div class="right">
      <img :src="`data:image/png;base64,${hospitalList.logoData}`" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlarmClock } from "@element-plus/icons-vue";
import type { Hospital } from "@/api/home/type";
interface Props {
  hospitalList: Hospital;
}
defineProps<Props>();
</script>

<style scoped lang="scss">
@import "@/style/icon.css";
.card {
  width: calc(50% - 20px);
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    .title {
      font-size: 18px;
    }
    .description {
      display: flex;
      align-items: center;
      gap: 40px;
      color: #7f7f7f;
      font-size: 14px;
    }
  }
  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
