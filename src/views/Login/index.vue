<template>
  <div class="login">
    <el-dialog v-model="dialogVisible" title="用户登陆">
      <div class="login-content">
        <div class="left">
          <div class="loginform">
            <el-form>
              <el-form-item prop="phone">
                <el-input
                  placeholder="请输入手机号码"
                  :prefix-icon="User"
                  v-model="loginParam.phone"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input
                  placeholder="请输入手机验证码"
                  :prefix-icon="Lock"
                  v-model="loginParam.code"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <VerifyCodeButton
                  :loading="loading"
                  :onGetCode="sendCode"
                  @success="onSendSuccess"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="default" style="width: 100%"
                  >用户登 录</el-button
                >
              </el-form-item>
            </el-form>
            <div class="switchLogin">
              <span>微信扫码登录</span>
              <i class="iconfont icon-weixin" style="font-size: 30px"></i>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="qcode">
            <div class="r-left">
              <img
                src="../../assets/images/code_login_wechat.png"
                alt=""
                style="width: 100%"
              />
              <div class="description">
                <i class="iconfont icon-weixin" style="font-size: 15px"></i>
                <p>微信扫一扫关注</p>
                <p>快速预约挂号</p>
              </div>
            </div>
            <div class="r-right">
              <img
                src="../../assets/images/code_login_wechat.png"
                alt=""
                style="width: 100%"
              />
              <div class="description">
                <el-icon><Iphone /></el-icon>
                <p>扫一扫下载</p>
                <p>"预约挂号"APP</p>
              </div>
            </div>
          </div>
          <h2 style="color: #606266; font-weight: 700">尚医通官方指定平台</h2>
          <h2 style="color: #606266; font-weight: 700">快速挂号，安全放心</h2>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" size="default" @click="closeDialog()"
            >离开窗口</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { User, Lock } from "@element-plus/icons-vue";
import VerifyCodeButton from "./components/VerifyCodeButton.vue";
import { Iphone } from "@element-plus/icons-vue";
const userStore = useUserStore();
const codeVisble = ref(false);
const loading = ref(false);
const sendCode = async () => {};
const onSendSuccess = () => {
  loading.value = false;
};

const loginParam = {
  phone: "",
  code: "",
};
const dialogVisible = computed({
  get: () => userStore.loginVisible,
  set: (val) => (userStore.loginVisible = val),
});

const closeDialog = () => {
  userStore.setLoginVisible(false);
};

const getCode = () => {
  codeVisble.value = true;
};
</script>

<style scoped lang="scss">
.login-content {
  display: flex;
  padding: 10px;
  width: 100%;
  height: 400px;
  .left {
    width: 50%;
    // background-color: aqua;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginform {
      width: 90%;
      padding: 20px;
      border: 1px solid #e8e8e8;
      .switchLogin {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .right {
    width: 50%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
    .qcode {
      display: flex;
      justify-content: space-between;
      .r-left,
      .r-right {
        width: 45%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .description {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
      }
    }
  }
}
.dialog-footer {
  padding-right: 10px;
}
::v-deep(.el-dialog__header) {
  border-bottom: 1px solid #e8e8e8;
}
::v-deep(.el-dialog__footer) {
  border-top: 1px solid #e8e8e8;
}
</style>
