/**
 * @Author       : guth
 * @Date         : 2022-12-25 01:38:52
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-25 01:39:02
 * @FilePath     : /study-javascript-data-structures/Dictionary/HashTableLinearProbing.js
 * @Description  : 8.2.4 散列表实现（线性探查法） 当某hash存在时 hash + 1
 */

const { ValuePair } = require('../utils/models')
const { defaultToString } = require('../utils/utils')

class HashTableLinearProbing {
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
   *
   * @param {*} key
   * @param {Number} removedPosition
   * @return {*}
   */
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }

  /**
   * 另一种散列实现 （8.2.5）
   * @param {*} key
   * @return {Number}
   */  
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
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
      while (this.table[hash] != null) {
        hash++
      }
      this.table[hash] = new ValuePair(key, value)
      return true
    }
    return false
  }
  /**
   * 从散列表中移除一个元素
   * @param {*} key
   * @returns {Boolean}
   */
  remove(key) {
    const hash = this.hashCode(key)
    let current = this.table[hash]
    if (current != null) {
      while (current != null && current.key !== key) {
        current = this.table[hash + 1]
      }
      if (this.table[hash] != null) {
        delete this.table[hash]
        this.verifyRemoveSideEffect(key, hash)
        return true
      }
    }
    return false
  }
  /**
   * 从散列表中取出一个元素
   * @param {*} key
   * @returns
   */
  get(key) {
    let hash = this.hashCode(key)
    let current = this.table[hash]
    if (current != null) {
      while (current != null && current.key !== key) {
        current = this.table[hash + 1]
      }
      if (current != null && current.key === key) {
        return current.value
      }
    }
    return undefined
  }
}

function test () {
  const table = new HashTableLinearProbing()
  table.put('abc', 'abc')
  table.put('cba', 'cba')
  table.put('cab', 'cab')
  table.put('acb', 'acb')
  table.put('ddde', 'ddde')
  table.put('ff66', 'ff66')
  table.put('dded', 'dded')
  table.put('qwe', 'qwe')
  table.put('rty', 'rty')

  console.log(table.table);
  table.remove('abc')
  table.remove('qwe')
  table.remove('qe')
  console.log(table.table);
}

test()