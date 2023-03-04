import axios from 'axios';

import { options } from "./utils";

const fetchIp = (ip: String) => {
  return axios.request({...options, params: {ip}}).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export {
  fetchIp
}