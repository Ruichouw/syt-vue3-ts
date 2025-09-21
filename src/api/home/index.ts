import request from "@/utils/request";

import type {
  HospitalResponseData,
  HospitalLevelAndRegionResponseData,
  Search,
} from "./type";

// 通过枚举管理接口地址
enum API {
  //获取已有医院数据的接口地址
  HOSPITAL_URL = "hosp/hospital/",
  //获取医院的等级与地区的接口
  HOSPITAL_LEVELANDREGION_URL = "/cmn/dict/findByDictCode/",
  //根据关键字医院的名字获取数据
  HOSPITAL_INFO_URL = "/hosp/hospital/findByHosname/",
}

export const HomeApi = {
  //获取医院的数据
  getreqHospital: (
    page: number,
    limit: number,
    hostype = "",
    districtCode = ""
  ) =>
    request.get<any, HospitalResponseData>(
      API.HOSPITAL_URL +
        `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
    ),

  //获取医院的等级与地区
  reqHospitalLevelAndRegion: (dictCode: string) =>
    request.get<any, HospitalLevelAndRegionResponseData>(
      API.HOSPITAL_LEVELANDREGION_URL + dictCode
    ),

  //根据关键字获取医院的数据进行展示
  reqHospitalInfo: (hostName: string) =>
    request.get<any, Search>(API.HOSPITAL_INFO_URL + hostName),
};
