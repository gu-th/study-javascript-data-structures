/**
 * 队列
 * 1、队列 先进先出
 * 2、双端队列： 同时结合了栈和队列的方法，首尾都能添加/移除元素
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
    this.lowestCount ++
    return res
  }
  /**
   * 查看队列队首元素
   * @returns 
   */
  peek () {
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

function test() {
  const queue = new Queue();
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  queue.enqueue('d', 'e', 'f')
  console.log(queue);
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue);
  const queue2 = new Queue(queue);
  console.log(queue2);
}
// test()

/**
 * 双端队列
 * 因为元素结构和普通队列一致，且同样拥有 size、peek、clear、toString、isEmpty 方法
 * 所以这里图方便直接继承了Queue， 正常情况需要全部自己实现
 */
class Deque extends Queue {
  /**
   * 在队首添加一个元素
   * @param {*} item 
   * @returns 
   */
  addFront (item) {
    if (this.isEmpty()) {
      this.addBack(item)
      return
    }
    if (this.lowestCount > 0) {
      this.lowestCount --
      this.items[this.lowestCount] = item
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.items[0] = item
      this.count ++
    }
  }
  /**
   * 在队尾添加一个元素
   * @param {*} item 
   */
  addBack (item) {
    this.items[this.count] = item
    this.count ++
  }
  /**
   * 在队首移除一个元素
   * @returns 
   */
  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount ++
    return res
  }
  /**
   * 在队尾移除一个元素
   * @returns 
   */
  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count --
    const res = this.items[this.count]
    delete this.items[this.count]
    return res
  }
  /**
   * 返回队首元素
   * @returns 
   */
  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  /**
   * 返回队尾元素
   * @returns 
   */
  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
}
function test2() {
  const deque = new Deque()
  console.log(deque.isEmpty());
  deque.addBack('John')
  deque.addBack('Jack')
  console.log(deque);
  deque.addBack('Nike')
  console.log(deque.size());
  console.log(deque.isEmpty());
  console.log(deque.removeFront());
  console.log(deque);
  deque.addFront('Demon')
  deque.addFront('Lucy')
  console.log(deque);
}

// test2()