<template>
  <el-button
    type="primary"
    :disabled="loading || countdown > 0"
    @click="handleClick"
  >
    <span v-if="countdown === 0">获取验证码</span>
    <span v-else>{{ countdown }} 秒后重试</span>
  </el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

// props: 是否加载中 & 请求验证码的函数
defineProps<{
  loading?: boolean;
  onGetCode?: () => Promise<void> | void;
}>();

// emit: 获取验证码成功后
const emit = defineEmits<{
  (e: "success"): void;
}>();

const countdown = ref(0);
let timer: number | null = null;

// 点击获取验证码
const handleClick = async () => {
  if (countdown.value > 0) return;
  try {
    // 占位，请求验证码接口
    startCountdown();
    emit("success");
  } catch (err) {
    console.error("获取验证码失败:", err);
  }
};

// 开始倒计时
const startCountdown = () => {
  countdown.value = 60; // 倒计时秒数
  timer && clearInterval(timer);
  timer = window.setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      timer && clearInterval(timer);
      timer = null;
    }
  }, 1000);
};
</script>
