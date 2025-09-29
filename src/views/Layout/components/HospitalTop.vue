<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../../assets/images/logo.png" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p>帮助中心</p>
        <p @click="showLogin">登录注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();

const showLogin = () => {
  userStore.setLoginVisible(true);
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 75px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 1200px;
    height: 100%;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-size: 22px;
        color: #4da3ff;
      }
      img {
        width: 50px;
        height: 50px;
      }
    }
    .right {
      display: flex;
      color: #bfbfbf;
      font-size: 14px;
      gap: 10px;
      cursor: pointer;
    }
  }
}
</style>
