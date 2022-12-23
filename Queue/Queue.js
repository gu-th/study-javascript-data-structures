/**
 * @Author       : guth
 * @Date         : 2022-12-22 17:32:21
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-23 10:59:40
 * @FilePath     : /study-javascript-data-structures/Queue/Queue.js
 * @Description  : 队列：先进先出
 */
/**
 * 队列: 先进先出
 */
class Queue {
  constructor(param) {
    if (param) {
      if (param instanceof Queue) {
        this.items = param.items
        this.count = param.count
        this.lowestCount = Object.keys(param.items)[0]
      } else {
        throw new Error('error: constructor parameter should be a Queue Object')
      }
    } else {
      this.items = {}
      this.count = 0
      this.lowestCount = 0
    }
  }

  /**
   * 在队列尾部添加任意数量元素
   * @param  {...any} args
   */
  enqueue(...args) {
    for (let i = 0; i < args.length; i++) {
      const item = args[i]
      this.items[this.count] = item
      this.count++
    }
  }
  /**
   * 在队列头部移除一个元素
   * @returns
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return res
  }
  /**
   * 查看队列队首元素
   * @returns
   */
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  /**
   * 判断队列是否为空
   * @returns {Boolean}
   */
  isEmpty() {
    return this.size() === 0
  }
  /**
   * 查看队列元素数量
   * @returns { Number }
   */
  size() {
    return this.count - this.lowestCount
  }
  /**
   * 清空队列
   */
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  /**
   * 队列元素转字符串
   * @returns { String }
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str}, ${this.items[i]}`
    }
    return str
  }
}

module.exports = Queue

function test() {
  const queue = new Queue()
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  queue.enqueue('d', 'e', 'f')
  console.log(queue)
  console.log(queue.dequeue())
  console.log(queue.peek())
  console.log(queue)
  const queue2 = new Queue(queue)
  console.log(queue2)
}
test()
