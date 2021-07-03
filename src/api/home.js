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
 * 关联案件
 * @param params
 * @returns {AxiosPromise}
 */
export function relationFileToCase(params) {
  return service({
    url: '/fsga/sw/jfs-ws/glaj',
    method: 'post',
    data: params,
  });
}
