/**
 * @Author       : guth
 * @Date         : 2022-12-24 12:27:18
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-24 12:27:23
 * @FilePath     : /study-javascript-data-structures/Dictionary/Dictionary.js
 * @Description  : 8.1字典实现 相当于es5中的Map
 */

const { ValuePair } = require('../utils/models')
const { defaultToString } = require('../utils/utils')

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  /**
   * 向字典中添加一对键值
   * @param {*} key
   * @param {*} value
   * @returns {Boolean}
   */
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  /**
   * 移除一个键值对
   * @param {*} key
   * @returns {Boolean}
   */
  remove(key) {
    if (this.haskey(key)) {
      const tableKey = this.toStrFn(key)
      delete this.table[tableKey]
      return true
    }
    return false
  }
  /**
   * 字典中是否存在key
   * @param {*} key
   * @returns {Boolean}
   */
  haskey(key) {
    return this.table[this.toStrFn(key)] != null
  }
  /**
   * 返回传入key的value值
   * @param {*} key
   * @returns
   */
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  /**
   * 清空字典
   */
  clear() {
    this.table = {}
  }
  /**
   * 返回字典大小
   * @returns {Number}
   */
  size() {
    return Object.keys(this.table).length
  }
  /**
   * 字典是否为空
   * @returns {Boolean}
   */
  isEmpty() {
    return this.size() === 0
  }
  /**
   * 以数组形式返回字典的全部key
   * @returns {Array}
   */
  keys() {
    const keys = this.keyValues().map(([key, valuePair]) => key)
    return keys
  }
  /**
   * 以数组形式返回字典的全部value
   * @returns {Array}
   */
  values() {
    const values = this.keyValues().map(([key, valuePair]) => valuePair.value)
    return values
  }
  /**
   * 以数组形式返回字典的全部键值对
   * @returns {Array}
   */
  keyValues() {
    return Object.values(this.table)
  }
  /**
   * 字典的迭代方法
   * @param {Function} callback
   */
  forEach(callback) {
    const valuePair = this.keyValues()
    for (let i = 0; i < valuePair.length; i++) {
      const key = valuePair[i].value
      const value = valuePair[i].value
      const res = callback(key, value)
      if (res === false) {
        break
      }
    }
  }

  /**
   * 
   * @returns {String}
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objStr = `${valuePairs[0]}`
    for (let i = 0; i < valuePairs.length; i++) {
      const str = valuePairs[i].toString()
      objStr = `${objStr}, ${str}`
    }
    return objStr
  }
}

module.exports = Dictionary