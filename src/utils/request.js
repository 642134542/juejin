import axios from 'axios';
import router from '@/router';
// eslint-disable-next-line import/no-cycle
import store from '@/store';
import { getCookie } from '@/utils/auth';

const cookie = '_ga=GA1.2.30481023.1606661605; passport_csrf_token_default=b926c9e34dd15661447f1f1d612ef1b6; passport_csrf_token=b926c9e34dd15661447f1f1d612ef1b6; sid_guard=8c18a29b5b495389b6b573167232b23a%7C1622041390%7C5184000%7CSun%2C+25-Jul-2021+15%3A03%3A10+GMT; uid_tt=8f9064ae950608c3cfad6a2492d391f3; uid_tt_ss=8f9064ae950608c3cfad6a2492d391f3; sid_tt=8c18a29b5b495389b6b573167232b23a; sessionid=8c18a29b5b495389b6b573167232b23a; sessionid_ss=8c18a29b5b495389b6b573167232b23a; n_mh=k24tzON0vkJnnByCiOTmem24DZQXDjjfyL6CQwKB7Kw; MONITOR_WEB_ID=7e9318cf-aed2-45cc-aac6-55b68af48090; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _gid=GA1.2.489625417.1625280315'
const service = axios.create({
  timeout: 1000 * 60 * 5, // request timeout
});

const tokenHeader = 'token'; // token自定义头部名称
service.interceptors.request.use((config) => {
  // const { token } = store.state.user;
  // if (token) {
  //   /* eslint-disable no-param-reassign */
  //   config.headers[tokenHeader] = getCookie();
  // }
  config.headers[tokenHeader] = cookie;
  return config;
}, (error) => {
  Promise.reject(error);
});

service.interceptors.response.use((res) => res, (err) => {
  return Promise.reject(err);
});

export default service;
