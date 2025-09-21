<template>
  <div class="pagination">
    <el-config-provider :locale="zhCn">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[10, 20, 30, 40]"
        :size="size"
        :disabled="disabled"
        background
        layout="prev, pager, next, jumper, ->,sizes,total "
        :total="taotalpage"
        @size-change="(e:number) => emit('update-size', e)"
        @current-change="(e:number) => emit('update-page', e)"
      />
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import type { ComponentSize } from "element-plus";
const currentPage4 = ref(1);
const pageSize4 = ref(10);
const size = ref<ComponentSize>("default");
const disabled = ref(false);

defineProps<{
  taotalpage: number;
}>();

const emit = defineEmits<{
  (e: "update-page", value: number): void;
  (e: "update-size", value: number): void;
}>();
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 20px;
  padding-right: 20px;
}
</style>
