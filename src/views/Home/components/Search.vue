<template>
  <div class="search">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="fetchData"
      placeholder="请输入医院名称"
      @select="handleSelect"
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { HomeApi } from "@/api/home/index";
import { useRouter } from "vue-router";
const router = useRouter();

const state = ref("");
const fetchData = async (keyword: string, cb: any) => {
  const res = await HomeApi.reqHospitalInfo(keyword);
  const list = (res.data || []).map((item) => {
    return { value: item.hosname, hostCode: item.hoscode };
  });
  cb(list);
};

const handleSelect = (item: any) => {
  router.push({ name: "Hospital", params: { id: item.hostCode } });
};
</script>

<style scoped lang="scss">
.search {
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
