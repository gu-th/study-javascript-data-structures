/*
 * @Author       : guth
 * @Date         : 2022-12-23 09:34:09
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 11:00:36
 * @FilePath     : /study-javascript-data-structures/Stack/StackArray.js
 * @Description  : 栈-后进先出 （数组实现方式）
 */
/**
 * 栈：后进先出 此处是数组的实现方式
 */ 
class StackArray {
  constructor(props) {
    this.items = []
    if (props && Array.isArray(props)) {
      this.items = props
      this.count = props.length
    } else if (props && !Array.isArray(props)) {
      throw new Error('param need array')
    }
  }

  size () {
    return this.count
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const res = this.items.pop()
    this.count --
    return res
  }
  push(item) {
    this.items.push(item)
    this.count ++
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.size() - 1]
  }
  clear() {
    this.items = []
  }
  isEmpty() {
    return this.size() === 0
  }
}

function test() {
  const a = new StackArray()
  a.push('a')
  a.push('b')
  console.log(a.size())
  console.log(a.peek())
  console.log(a.pop(), a)
}

test()
