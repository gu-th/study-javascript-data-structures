/*
 * @Author       : guth
 * @Date         : 2022-12-28 09:35:51
 * @LastEditors  : guth
 * @LastEditTime : 2022-12-28 17:35:54
 * @FilePath     : /study-javascript-data-structures/Tree/RedBlackTree.js
 * @Description  : 红黑树实现 (红黑树也是自平衡搜索二叉树)
 *
 * 红黑树 规则：
 * （1）每个节点不是红的就是黑的
 * （2）树的根节点是黑的
 * （3）所有的叶节点都是黑的
 * （4）如果一个节点是红的，那么他的两个子节点都是黑的
 * （5）不能有两个相邻的红节点，一个红节点不能有红的父节点或者子节点
 * （6）从给定的节点到它的后代节点（NULL叶节点）的所有路径包含相同数量的黑色节点
 */

const { COLORS, COMPARE } = require('../utils/constant')
const { RedBlackTreeNode } = require('../utils/models')
const { defaultCompare } = require('../utils/utils')
const BinarySearchTree = require('./BinarySearchTree')

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackTreeNode(key, COLORS.BLACK)
    } else {
      const node = this.inserNode(this.root, key)
      this.fixTreePropreties(node)
    }
  }

  /**
   * 插入节点，同二叉树基本一直
   * @param {RedBlackTreeNode} node
   * @param {*} key
   * @returns {RedBlackTreeNode}
   */
  inserNode(node, key) {
    if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackTreeNode(key, COLORS.BLACK, node)
        return node.left
      } else {
        this.inserNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new RedBlackTreeNode(key, COLORS.BLACK, node)
      return node.right
    } else {
      this.inserNode(node.right, key)
    }
  }

  /**
   * 解决树节点的颜色冲突
   * @param {RedBlackTreeNode} node
   */
  fixTreePropreties(node) {
    // 新插入一个节点时，可能会违反规则（5）
    // 当父节点是红色且当前节点是红色，需要变换颜色解决冲突
    while (node && node.parent && node.parent.isRed() && node.isRed()) {
      const parent = node.parent
      const grandParent = parent.parent
      // 如果父节点是左节点
      if (grandParent && grandParent.left === parent) {
        // 获取叔叔节点
        const uncel = grandParent.right
        // 叔叔节点是红的 只需要重写填色即可
        if (uncel && uncel.isRed()) {
          grandParent.color = COLORS.RED
          parent.color = COLORS.BLACK
          uncel.color = COLORS.BLACK
          node = grandParent
        } else {
          // 节点是右侧子节点 - 左旋转
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          }

          // 节点是左侧子节点 - 右旋转
          this.rotationLL(grandParent)
          parent.color = COLORS.BLACK
          grandParent.color = COLORS.RED
          node = parent
        }
      }
      // 父节点是右侧节点
      else {
        // 获取叔叔节点
        const uncle = grandParent.left
        // 叔叔节点是红的，只需重新填色即可
        if (uncle && uncle.isRed()) {
          grandParent.color = COLORS.RED
          parent.color = COLORS.BLACK
          uncle.color = COLORS.BLACK
          node = grandParent
        } else {
          // 节点是左子节点 - 右旋转
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }

          // 节点是右子节点 - 左旋转
          this.rotationRR(grandParent)
          // 交换颜色
          parent.color = COLORS.BLACK
          grandParent.color = COLORS.RED
          node = parent
        }
      }
    }
    this.root.color = COLORS.BLACK
  }

  /**
   * 向右的单旋转 （左节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationLL(node) {
    const temp = node.left
    node.left = temp.right
    if (temp.right && temp.right.key) {
      temp.right.parent = node
    }
    temp.parent = node.parent
    if (!node.parent) {
      this.root = temp
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp
      } else {
        node.parent.right = temp
      }
    }
    temp.right = node
    node.parent = temp
  }
  /**
   * 向左的单旋转 （右节点重）
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  ratationRR(node) {
    const temp = node.right
    node.right = temp.left
    if (temp.left && temp.left.key) {
      temp.left.parent = node
    }
    temp.parent = node.parent
    if (!node.parent) {
      this.root = temp
    } else {
      if (node === node.parent.right) {
        node.parent.right = temp
      } else {
        node.parent.left = temp
      }
    }
    temp.left = node
    node.parent = temp
  }
}
