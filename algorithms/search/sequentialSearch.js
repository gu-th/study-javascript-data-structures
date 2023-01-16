/*
 * @Author       : guth
 * @Date         : 2023-01-16 15:08:59
 * @LastEditors  : guth
 * @LastEditTime : 2023-01-16 17:02:04
 * @FilePath     : /study-javascript-data-structures/algorithms/search/sequentialSearch.js
 * @Description  : 顺序搜索 （效率比较低）
 */

const { DOES_NOT_EXIST } = require("../../utils/constant");
const { defaultEquals } = require("../../utils/utils");

function sequentialSearch (arr, value, equalsFn = defaultEquals) {
  for (let i = 0; i < arr.length; i++) {
    if (equalsFn(value, arr[i])) {
      return i
    }
  }
  return DOES_NOT_EXIST
}
