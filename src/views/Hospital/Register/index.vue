<template>
  <div class="register">
    <div class="msg">
      <div class="title">
        <h2 style="font-weight: 900">北京人民医院</h2>
        <div class="description">
          <i class="iconfont icon-a-039_dianzan4" style="color: red"></i
          >三级甲等
        </div>
      </div>
      <div class="t-content">
        <div class="left">
          <img src="../../../assets/images/auth_example.png" alt="" />
        </div>
        <div class="right">
          <div class="t-title">挂号规则</div>
          <span>预约周期:10天 放号时间:08:30 停挂时间:11:30</span>
          <span>具体位置:北京市市辖区西城区大望路</span>
          <span
            >具体路线:乘车路线：12、14、18、19、28、31、34、38、39、40路到中医院；顺2、11、15、16、17、20、21、22、23、24、25、26、27、29、32、33、36、37、41、43、45路、945到国泰下车，向南行300米即到</span
          >
          <span>退号时间:就诊前一工作日15:30前取消 </span>
          <div class="t-title">预约挂号规则</div>
          <span>西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号</span>
          <span>西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号</span>
        </div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.register {
  .msg {
    padding-bottom: 10px;
    .title {
      display: flex;
      align-items: flex-end;
      gap: 10px;
    }
    .t-content {
      padding-top: 20px;
      display: flex;

      .left {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex: 1;
        img {
          margin-top: 20px;
          width: 80px;
        }
      }
      .right {
        flex: 9;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 20px;
        span {
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>
