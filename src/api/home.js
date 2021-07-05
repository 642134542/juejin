import service from '@/utils/request';

/**
 * 获取掘金小册
 * @param params
 */
export function getBrochure(params) {
  return service({
    url: '/resources/book',
    method: 'post',
    data: params,
  });
}

/**
 * 获取掘金的文章
 * @param params
 * @returns {AxiosPromise}
 */
export function getGoldList(params) {
  return service({
    url: 'resources/gold',
    method: 'post',
    data: params,
  });
}

/**
 * 获取github的文章
 * @param params
 */
export function getGithubList(params) {
  return service({
    url: 'resources/github',
    method: 'post',
    data: params,
  });
}

/**
 * 获取沸点
 * @param params
 */
export function getPinsList(params) {
  return service({
    url: 'resources/pins',
    method: 'post',
    data: params,
  });
}
