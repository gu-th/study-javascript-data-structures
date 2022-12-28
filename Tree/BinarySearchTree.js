/*
 * @Author       : guth
 * @Date         : 2022-12-25 14:57:22
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-27 12:53:47
 * @FilePath     : /study-javascript-data-structures/Tree/BinarySearchTree.js
 * @Description  : 10.3 二叉搜索树
 */
const { COMPARE } = require('../utils/constant')
const { TreeNode } = require('../utils/models')
const { defaultCompare } = require('../utils/utils')

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null // 根节点
  }
  inserNode(node, key) {
    if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key)
      } else {
        this.inserNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key)
      } else {
        this.inserNode(node.right, key)
      }
    }
  }
  /**
   * 插入节点
   * @param {*} key
   */
  insert(key) {
    if (this.root == null) {
      this.root = new TreeNode(key)
    } else {
      this.inserNode(this.root, key)
    }
  }
  /**
   * 中序遍历
   * @param {Function} callback
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * 中序遍历节点  以上行顺序访问BST所有节点的遍历方式（从小到大 可用作对树进行排序）
   * @param {TreeNode} node
   * @param {Function} callback
   */
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  /**
   * 先序遍历
   *  @param {Function} callback
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * 先序遍历节点 以优先于每个后代节点的顺序访问节点
   *  @param {TreeNode} node
   *  @param {Function} callback
   */
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.postOrderTraverse(node.left, callback)
      this.postOrderTraverse(node.right, callback)
    }
  }
  /**
   * 后序遍历
   * @param {Function} callback
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  /**
   * 后序遍历节点 先访问后代节点，再访问节点本身的遍历
   *  @param {TreeNode} node
   *  @param {Function} callback
   */
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  /**
   * @returns 返回树的最小值
   */
  min() {
    return this.minNode(this.root)
  }

  /**
   * 放回树的最小子节点
   * @param {TreeNode} node
   */
  minNode(node) {
    if (node != null && node.left != null) {
      this.minNode(node.left)
    }
    return node
    // let current = node
    // while (current != null && current.left != null) {
    //   current = current.left
    // }
    // return current
  }
  /**
   * @returns 返回树的最大值
   */
  max() {
    return this.minNode(this.root)
  }

  /**
   * 放回树的最大子节点
   * @param {TreeNode} node
   */
  maxNode(node) {
    if (node != null && node.right != null) {
      this.minNode(node.right)
    }
    return node
    // let current = node
    // while (current != null && current.right != null) {
    //   current = current.right
    // }
    // return current
  }

  /**
   * 在树中搜索一个值是否存在
   * @param {*} key
   * @returns {Boolean}
   */
  serch(key) {
    return this.serchNode(this.root, key)
  }

  /**
   * 在树中搜索一个值是否存在
   * @param {TreeNode} node
   * @param {*} key
   * @returns {Boolean}
   */
  serchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      return this.serchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === COMPARE.BIGGER_THAN) {
      return this.serchNode(node.right, key)
    }
    return true
  }

  /**
   * 从树中移除一个值
   * @param {*} key
   */
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  /**
   * 移除树中的一个节点
   * @param {TreeNode} node
   * @param {*} key
   */
  removeNode(node, key) {
    if (node == null) {
      return null
    }
    if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key === COMPARE.BIGGER_THAN)) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 1、无左右子节点
      if (node.left == null && node.right == null) {
        node = null
        return node
      }
      // 2、只有左/右节点
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }
      // 3、既有左节点，也有右节点
      let temp = this.minNode(node.right) // 找到右节点中最小值
      node.key = temp.key // 右侧的值都比左侧的大, 用右侧最小值替换节点值
      node.right = this.removeNode(node.right, temp.key) // 移除右侧最小值
      return node
    }
  }
}

module.exports = BinarySearchTree

function test() {
  const tree = new BinarySearchTree()
  tree.insert(4)
  tree.insert(1)
  tree.insert(2)
  tree.insert(3)
  tree.insert(5)
  tree.insert(7)
  tree.insert(6)
  tree.insert(-1)
  console.log(tree.root)
  tree.inOrderTraverse((k) => {
    console.log(k) // -1 1 2 3 4 5 6 7
  })
}
test()
