const Queue = require('./Queue')
/**
 * 双端队列: 结合了队列和栈的方法
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

test2()