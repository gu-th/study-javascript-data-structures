/**
 * 栈：后进先出 此处进行了两种实现形式
 * 1、数组的实现形式
 * 2、对象的实现形式
 */ 
class StackArray {
  constructor(props) {
    this.items =  []
    if (props && Array.isArray(props)) {
      this.items = props
      this.count = props.length
    } else if (props && !Array.isArray(props)) {
      throw(new Error('param need array'))
    }
  }

  get size() {
    return this.items.length
  }
  // size () {
  //   return this.count
  // }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.pop()
  }
  push(item) {
    this.items.push(item)
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.size - 1]
  }
  clear() {
    this.items = []
  }
  isEmpty() {
    return this.size === 0
  }
}

// const a = new StackArray()
// a.push('a')
// a.push('b')
// console.log(a.size);
// console.log(a.peek());
// console.log(a.pop(), a);

class StackObj {
  constructor (props) {
    if (props) {
      if (props instanceof StackObj) {
        this.count = props.count
        this.items = props.items
      } else {
        throw new Error('error: constructor parameters should be a Stack object')
      }
    } else {
      this.count = 0
      this.items = {}
    }
  }

  size() {
    return this.count
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  push(item) {
    this.items[this.count] = item
    this.count ++
  }
  pop() {
    if (this.isEmpty()){
      return undefined
    }
    this.count --
    const res = this.items[this.count]
    delete this.items[this.count]
    return res
  }
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  isEmpty () {
    return this.count === 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const str = this.items[0]
    for (let i = 1; i<this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str;
  }
}

const t = new StackObj()
t.push('a')
t.push('b')
t.push('c')
const t2 = new StackObj()
console.log(t2);


function tenToTwo(num) {
  const remStack = new StackObj()
  let n = num
  while (n !== 0) {
    let rem = Math.floor(n % 2)
    remStack.push(rem)
    n = Math.floor(n / 2)
  }
  let res = ''
  while (!remStack.isEmpty()) {
    res += remStack.pop().toString()
  }
  return res
}
console.log(tenToTwo(233));
console.log(tenToTwo(10));
console.log(tenToTwo(1000));

// 进制转换
function baseConverter(num, base) {
  if (base < 2 || base > 36) {
    return ''
  }
  const remStack = new StackObj()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let n = num
  while (n > 0) {
    let rem = Math.floor(n % base)
    remStack.push(rem)
    n = Math.floor(n / base)
  }
  let res = ''
  while (remStack.size() > 0) {
    res += digits[remStack.pop()]
  }

  return res
}

console.log(baseConverter(10, 16));