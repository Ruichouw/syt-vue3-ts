import { defineStore } from "pinia";
import { reqHospitalDetail, reqHospitalDeparment } from "@/api/hospital";
import type { DetailState } from "./interface/type";
import type { HosPitalDetailData } from "@/api/hospital/type";

const useDetailStore = defineStore("detail", {
  state: (): DetailState => {
    return { detailData: {} as HosPitalDetailData, deparmentArr: [] };
  },
  actions: {
    async getDetailData(hoscode: string) {
      const res = await reqHospitalDetail(hoscode);
      this.detailData = res.data;
    },
    async getHospitalDeparment(hoscode: string) {
      const res = await reqHospitalDeparment(hoscode);
      this.deparmentArr = res.data;
    },
  },
});
export default useDetailStore;
