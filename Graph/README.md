
#### 图

图是一组由`边`连接的`节点（或顶点）`

##### 下面是图的一些基本概念
- 由一条边连接在一起的顶点，称为`相邻顶点`
- 一个顶点的`度`是其相邻顶点的数量
- 路径是顶点v1, v2, ... vk的一个连续序列，其中Vi 和 Vi+1 是相邻的
- 简单路径要求不包含重复的顶点
- `环`也是一条简单路径
- 如果图中不存在环，则称该图是`无环的`，如果图中的每两个顶点间都存在路径，则该图是`连通的`。
- 如果图中每两个顶点在双向上都存在路径，则该图是`强连通`的。
- 图还可以是`未加权的`或是`加权的`

##### 图的表示
1. 邻接矩阵
2. 邻接表
3. 关联矩阵