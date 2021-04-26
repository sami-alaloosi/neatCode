/** @format */

import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return axios.create({
    baseURL: "https://neatcode2.herokuapp.com/",
    headers: {
      Authorization: token,
      username,
    },
  });
};
