/**
 * @Author       : guth
 * @Date         : 2022-12-23 14:48:39
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 14:48:44
 * @FilePath     : /study-javascript-data-structures/Set/Set.js
 * @Description  : 集合
 */

class Set {
  constructor () {
    this.items = {}
  }

  /**
   * 向集合中添加一个元素
   * @param {*} el 
   * @returns {Boolean}
   */
  add (el) {
    if (!this.has(el)) {
      this.items[el] = el
      return true
    }
    return false
  }

  /**
   * 从集合中删除一个元素
   * @param {*} el 
   * @returns {Boolean}
   */
  delete(el) {
    if (this.has(el)) {
      delete this.items[el]
      return true
    }
    return false
  }

  /**
   * 清空集合
   */
  clear() {
    this.items = {}
  }

  /**
   * 返回集合元素数量
   * @returns {Number}
   */
  size() {
    return Object.keys(this.items).length
  }

  /**
   * 兼容写法
   * @returns {Number}
   */
  sizeLegacy () {
    let count = 0
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key) && this.has(key)) {
        count ++
      }
    }
    return count
  }

  
  /**
   * 返回集合元素组成的数组
   * @returns {Array}
   */
  values() {
    return Object.values(this.items)
  }

  /**
   * 兼容写法
   * @returns {Array}
   */
  valuesLegacy() {
    const values = []
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key) && this.has(key)) {
        const element = this.items[key];
        values.push(element)
      }
    }
    return values
  }

  /**
   * 判断元素是否存在在集合中
   * @param {*} el 
   * @returns {Boolean} boolean 
   */
  has(el) {
    return Object.prototype.hasOwnProperty.call(this.items, el)
  }

  /**
   * 返回并集运算结果
   * @param {*} otherSet
   * @returns {Set} 
   */
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(val => unionSet.add(val))
    otherSet.values().forEach(val => unionSet.add(val))
    return unionSet
  }

  /**
   * 返回交集运算结果
   * @param {*} otherSet 
   * @returns {Set}
   */
  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.items.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (values.length < otherValues.length) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(val => {
      if (!biggerSet.has(val)) {
        intersectionSet.add(val)
      }
    })
    return intersectionSet
  }

  /**
   * 返回差集运算结果
   * @param {*} otherSet 
   * @returns {Set} differenceSet
   */ 
  difference(otherSet) {
    const differenceSet =  new Set()
    this.values().forEach(val => {
      if (!otherSet.has(val)) {
        differenceSet.add(val)
      }
    })
    return differenceSet
  }

  /**
   * 判断集合是否是另一个集合的子集
   * @param {*} otherSet 
   * @returns {Boolean}
   */
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSub = true
    this.values().every(val => {
      if (!otherSet.has(val)) {
        isSub = false
        return false
      }
      return true
    })
    return isSub
  }

}


function test () {
  const set = new Set()
  set.add('a')
  set.add('b')
  set.add('c')
  set.add('d')
  set.delete('b')
  console.log(set.values());
  const otherSet = new Set()
  otherSet.add('b')
  otherSet.add('c')
  console.log(otherSet.isSubsetOf(set));
}

test()