<template>
  <div class="hospital">
    <div class="left">
      <div class="filterPanel">
        <h4 style="font-weight: 800">医院</h4>
        <div class="level">
          <div class="title">等级:</div>
          <div class="list">
            <span
              :class="{ active: activeLevelFlag == '' }"
              @click="changeLevel('')"
              >全部</span
            >
            <template v-for="item in levelArr" :key="item.id">
              <span
                :class="{
                  active: activeLevelFlag === item.value ? 'active' : '',
                }"
                @click="changeLevel(item.value)"
                >{{ item.name }}</span
              >
            </template>
          </div>
        </div>
        <div class="address">
          <div class="title">地址:</div>
          <div class="list">
            <span
              :class="{ active: activeRegionFlag == '' }"
              @click="changeRegion('')"
              >全部</span
            >
            <template v-for="item in regionArr" :key="item.id">
              <span
                :class="{
                  active: activeRegionFlag === item.value ? 'active' : '',
                }"
                @click="changeRegion(item.value)"
                >{{ item.name }}</span
              >
            </template>
          </div>
        </div>
      </div>
      <div class="cardPanel" v-loading="loading" v-if="hospitalList.length > 0">
        <Card
          v-for="item in hospitalList"
          :key="item.id"
          :hospitalList="item"
        ></Card>
      </div>
      <el-empty :image-size="200" v-else />
      <Pagination
        @update-page="handleUpdate"
        @update-size="handleUpdateSize"
        :taotalpage
        v-if="hospitalList.length > 0"
      ></Pagination>
    </div>
    <div class="right">
      <div class="rightCard">
        <div class="title">
          <span
            ><i
              class="iconfont icon-icon"
              style="font-size: 20px; color: #55aefe"
            ></i
            >常见科室</span
          >
          <span
            >全部 <i class="iconfont icon-gengduo" style="font-size: 15px"></i
          ></span>
        </div>
        <div class="content">
          <span v-for="item in 8">神经内科</span>
        </div>
      </div>
      <div class="notice">
        <div class="title">
          <span
            ><i
              class="iconfont icon-gonggao"
              style="font-size: 20px; color: #55aefe; color: #55aefe"
            ></i
            >平台公告</span
          >
          <span
            >全部 <i class="iconfont icon-gengduo" style="font-size: 15px"></i
          ></span>
        </div>
        <div class="content">
          <span v-for="item in 3"
            >关于延长xx大学国际医科大学的新消息新消息问问额长春市</span
          >
        </div>
      </div>
      <div class="notice">
        <div class="title">
          <span
            ><i
              class="iconfont icon-gonggao1"
              style="font-size: 20px; color: #eb9e52"
            ></i
            >停诊公告</span
          >
          <span
            >全部 <i class="iconfont icon-gengduo" style="font-size: 15px"></i
          ></span>
        </div>
        <div class="content">
          <span v-for="item in 3"
            >关于延长xx大学国际医科大学的新消息新消息问问额长春市</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";
import { HomeApi } from "@/api/home/index";
import { onMounted, ref } from "vue";
import type { HospitalLevelAndRegionArr, Content } from "@/api/home/type";
const activeLevelFlag = ref("");
const activeRegionFlag = ref("");
const levelArr = ref<HospitalLevelAndRegionArr>([]);
const regionArr = ref<HospitalLevelAndRegionArr>([]);
const hospitalList = ref<Content>([]);
const currentPage = ref(1);
const taotalpage = ref(10);
const loading = ref(false);
const pageSize = ref(10);

// 存储筛选的医院等级
const filterLevel = ref("");
const filterRegion = ref("");
const getlevel = async () => {
  const res = await HomeApi.reqHospitalLevelAndRegion("HosType");
  console.log(res);
  //存储医院等级数据
  levelArr.value = res.data;
};

const getRegion = async () => {
  const res = await HomeApi.reqHospitalLevelAndRegion("beijin");
  regionArr.value = res.data;
};

onMounted(() => {
  getlevel();
  getRegion();
  getreqHospital();
});
const changeLevel = (value: string) => {
  activeLevelFlag.value = value;
  filterLevel.value = value;
  console.log(value);
  getreqHospitalPag();
};
const changeRegion = (value: string) => {
  activeRegionFlag.value = value;
  console.log(value);
  filterRegion.value = value;
  getreqHospitalPag();
};

const getreqHospital = async () => {
  loading.value = true;
  const res = await HomeApi.getreqHospital(1, 10);
  hospitalList.value = res.data.content;
  taotalpage.value = res.data.totalElements;
  loading.value = false;
};

const getreqHospitalPag = async () => {
  loading.value = true;
  const res = await HomeApi.getreqHospital(
    currentPage.value,
    pageSize.value,
    filterLevel.value,
    filterRegion.value
  );
  hospitalList.value = res.data.content;
  taotalpage.value = res.data.totalElements;
  loading.value = false;
};
const handleUpdate = (val: number) => {
  currentPage.value = val;
  getreqHospitalPag();
};
const handleUpdateSize = (val: number) => {
  pageSize.value = val;
  getreqHospitalPag();
};
</script>

<style scoped lang="scss">

.hospital {
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 70px;
  justify-content: space-between;
  .left {
    width: calc(100% * 5 / 6);
    flex-grow: 1;
    .filterPanel {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #7f7f7f;
      cursor: pointer;
      .level {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        .list {
          display: flex;
          gap: 10px;
        }
      }
      .address {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        .title {
          white-space: nowrap;
        }
        .list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
      }
      .active {
        color: #55aefe;
      }
    }
    .cardPanel {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  .right {
    width: calc(100% / 6);
    flex-shrink: 1;
    // background-color: aquamarine;
    padding: 10px 10px;
    color: #83898b;
    cursor: pointer;
    .rightCard,
    .notice {
      margin-bottom: 20px;
      .title {
        display: flex;
        justify-content: flex-start;
        gap: 40px;
        align-items: center;
      }
      .content {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px 40px;
      }
    }
    .notice {
      .content {
        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
