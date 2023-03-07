/*
* @Name: login
* @description: login.js
* @Date: 2023/3/7 21:15
* @Author: yf_hu
* @LastEditors: yf_hu
* @LastEditTime: 2023/3/7 21:15
* */
import axios from "~/plugins/axios";

export const loginApi = (data) => {
  return axios({
    url: "/login",
    method: "post",
    data,
  });
}
