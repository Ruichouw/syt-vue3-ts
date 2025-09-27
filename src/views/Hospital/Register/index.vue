<template>
  <div class="register">
    <div class="msg">
      <div class="title">
        <h2>
          {{ detailStore.detailData.hospital?.hosname }}
        </h2>
        <div class="description">
          <i class="iconfont icon-a-039_dianzan4" style="color: red"></i
          >三级甲等
        </div>
      </div>
      <div class="t-content">
        <div class="left">
          <img
            :src="
              `data:image/jpeg;base64,` +
              detailStore.detailData.hospital?.logoData
            "
            alt=""
          />
        </div>
        <div class="right">
          <div class="t-title">挂号规则</div>
          <span
            >预约周期:{{ detailStore.detailData.bookingRule?.cycle }}天
            放号时间:{{
              detailStore.detailData.bookingRule?.releaseTime
            }}
            停挂时间:{{ detailStore.detailData.bookingRule?.stopTime }}</span
          >
          <span
            >具体位置:{{
              detailStore.detailData.hospital?.param.fullAddress
            }}</span
          >
          <span style="line-height: 20px"
            >具体路线:{{ detailStore.detailData.hospital?.route }}</span
          >
          <span
            >退号时间:就诊前一工作日{{
              detailStore.detailData.bookingRule?.quitTime
            }}前取消
          </span>
          <div class="t-title">预约挂号规则</div>
          <span v-for="item in detailStore.detailData.bookingRule?.rule">{{
            item
          }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in detailStore.deparmentArr"
            @click="changeActive(index)"
            :class="{ active: currentIndex == index }"
          >
            {{ item.depname }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="deparment" v-for="item in detailStore.deparmentArr">
          <h3 class="cur">{{ item.depname }}</h3>
          <div>
            <ul class="dep-content">
              <li v-for="iitem in item.children">{{ iitem.depname }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDetailStore from "@/store/modules/detail";
import { onMounted, onBeforeUnmount } from "vue";
import { ref } from "vue";
const detailStore = useDetailStore();
const currentIndex = ref(0);
const changeActive = (index: number) => {
  currentIndex.value = index;
  //点击导航获取右侧科室（大的科室H1标题）
  let allH1 = document.querySelectorAll(".cur");
  //滚动到对应科室的位置
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth", //过渡动画效果
    block: "start", //滚动的位置，起始位置
  });
};
</script>

<style scoped lang="scss">
.register {
  margin-bottom: 70px;
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
        padding-left: 10px;
        span {
          color: #7f7f7f;
        }
      }
    }
  }
  .content {
    height: 500px;

    margin-top: 10px;
    display: flex;
    .left {
      width: 90px;
      background-color: aqua;
      ul {
        display: flex;
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
        background-color: #f8f8f8;
        color: #7f7f7f;
        li {
          width: 100%;
          text-align: center;
          line-height: 40px;

          &.active {
            border-left: 1px solid red;
            color: red;
            background: white;
          }
        }
      }
    }
    .right {
      padding-left: 10px;
      flex: 1;
      width: 100%;
      overflow: auto;
      margin-top: -10px;
      color: #7f7f7f;
      .deparment {
        h3 {
          margin-bottom: 10px;
          margin-top: 15px;
          background-color: #f8f8f8;
        }
        .dep-content {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: flex-start;

          li {
            width: 33%;
            line-height: 35px;
            font-size: 16px;
            white-space: nowrap;
            font-weight: normal;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>
