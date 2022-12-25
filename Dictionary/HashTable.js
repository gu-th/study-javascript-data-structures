/**
 * @Author       : guth
 * @Date         : 2022-12-24 15:09:53
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-24 15:10:03
 * @FilePath     : /study-javascript-data-structures/Dictionary/HashTable.js
 * @Description  : 8.2.1 散列表实现 此实现会有hash值冲突的情况
 */

const { ValuePair } = require('../utils/models')
const { defaultToString } = require('../utils/utils')

/**
 * 散列表
 */
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * 散列函数 生成hash
   * @param {*} key
   * @returns {Number}
   */
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  /**
   * 返回根据key生成的hashCOde
   * @param {*} key
   * @returns {Number}
   */
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  /**
   * 向散列表中添加一个属性
   * @param {Number} key
   * @param {*} value
   * @returns {Boolean}
   */
  put(key, value) {
    if (key != null && value != null) {
      let hash = this.hashCode(key)
      let valuePair = new ValuePair(key, value)
      this.table[hash] = valuePair
      return true
    }
    return false
  }

  /**
   * 从散列表中移除一个元素
   * @param {*} key
   */
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = new ValuePair(key, value)
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
  /**
   * 从散列表中取出一个元素
   * @param {*} key
   * @returns
   */
  get(key) {
    if (key != null) {
      const tableKey = this.hashCode(key)
      const valuePair = this.table[tableKey]
      return valuePair == null ? undefined : valuePair.value
    }
    return undefined
  }
}
