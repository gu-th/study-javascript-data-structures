/*
 * @Author       : guth
 * @Date         : 2022-12-27 12:51:17
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-28 09:29:54
 * @FilePath     : /study-javascript-data-structures/Tree/AVLTree.js
 * @Description  : 10.6 二叉树-自平衡树 Adelson-Velskii-Landi树
 */

/**
 * AVL树是一种自平衡树。添加或移除节点时，会尝试保持自平衡，任意节点的左子树和右子树高度最多相差 1
 * AVL树会尽可能尝试转换为完全树
 */

const { BALANCE_FACTOR, COMPARE } = require('../utils/constant')
const { TreeNode } = require('../utils/models')
const { defaultCompare } = require('../utils/utils')
const BinarySearchTree = require('./BinarySearchTree')

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  /**
   * 返回树的高度
   * @param {TreeNode} node
   * @returns {Number}
   */
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max(this.getNodeHeight(node.left) + this.getNodeHeight(node.right)) + 1
  }

  /**
   * 返回树的平衡因子
   * @param {TreeNode} node
   * @returns {Number}
   */
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2:
        return BALANCE_FACTOR.UNBALANCED_RIGHT
      case -1:
        return BALANCE_FACTOR.SLIGHTLY_UNBALANCE_RIGHT
      case 1:
        return BALANCE_FACTOR.SLIGHTLY_UNBALANCE_LEFT
      case 2:
        return BALANCE_FACTOR.UNBALANCED_LEFT
      default:
        return BALANCE_FACTOR.BALANCED
    }
  }

  /**
   * 向右的单旋转 （左节点重，且左节点平衡或左节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationLL(node) {
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }
  /**
   * 向左的单旋转 （右节点重，且右节点平衡或右节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationRR(node) {
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }

  /**
   * 向右的双旋转 （左节点重，且左节点的右节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationLR(node) {
    node.left = this.ratationRR(node.left)
    return this.ratationLL(temp)
  }

  /**
   * 向左的双旋转 （右节点重，且右节点的左节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationRL(node) {
    node.right = this.ratationLL(node.right)
    return this.ratationRR(temp)
  }

  /**
   * 添加节点
   * @param {TreeNode} node 
   * @param {*} key 
   * @returns {TreeNode}
   */
  inserNode(node, key) {
    if (this.root == null) {
      this.root = new TreeNode(key)
    } else if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key)
      } else {
        this.inserNode(node.left, key)
      }
    } else if (this.compareFn(key, node.key) === COMPARE.BIGGER_THAN) {
      if (node.right == null) {
        node.right = new TreeNode(key)
      } else {
        this.inserNode(node.right, key)
      }
    } else {
      return node // 重复的键
    }
    // 获取平衡因子 如果不平衡 根据哪边的节点重
    const factor = this.getBalanceFactor(node)
    if (factor === BALANCE_FACTOR.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === COMPARE.LESS_THAN) {
        this.ratationLL(node)
      } else {
        this.ratationLR(node)
      }
    } 
    if (factor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
      if (this.compareFn(key, noed.right.key) === COMPARE.BIGGER_THAN) {
        this.ratationRR(node)
      } else {
        this.ratationRL(node)
      }
    }
    return node    
  }
  /**
   * 插入节点
   * @param {*} key
   */
  insert(key) {
    this.root = this.inserNode(this.root, key)
  }

  /**
   * 移除节点
   * @param {*} key 
   * @returns {TreeNode}
   */
  removeNode(node, key) {
    node = super.removeNode(node, key)
    if (node == null) {
      return node
    }
    const factor = this.getBalanceFactor(node)
    // 左侧不平衡
    if (factor === BALANCE_FACTOR.UNBALANCED_LEFT) {
      const factorLeft = this.getBalanceFactor(node.left)
      // 左左不平衡
      if (factorLeft === BALANCE_FACTOR.BALANCED || factorLeft === BALANCE_FACTOR.SLIGHTLY_UNBALANCE_LEFT) {
        this.ratationLL(node)
      }
      // 左右不平衡
      if (factorLeft === BALANCE_FACTOR.SLIGHTLY_UNBALANCE_RIGHT) {
        this.ratationLR(node)
      }
    }
    // 右侧不平衡
    if (factor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
      const factorRight = this.getBalanceFactor(node.right)
      // 右右不平衡
      if (factorRight === BALANCE_FACTOR.BALANCED || factorRight === BALANCE_FACTOR.SLIGHTLY_UNBALANCE_RIGHT) {
        this.ratationRR(node)
      }
      // 右左不平衡
      if (factorRight === BALANCE_FACTOR.SLIGHTLY_UNBALANCE_LEFT) {
        this.ratationRL(node)
      }
    }
    return node
  }
}
