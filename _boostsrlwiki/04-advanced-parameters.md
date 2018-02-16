---
title: Advanced Parameters
author: Sriraam Natarajan
permalink: /software/boostsrl/wiki/advanced-parameters/
excerpt: "Advanced parameters for restricting the search space of BoostSRL."
---

### Parameters

Include the following lines in the background file (folder_bk.txt) to set the parameters:

Set the maximum number of nodes from root to leaf (height) in the tree.

    setParam: maxTreeDepth=3.

Set the maximum number of literals in the node.

    setParam: nodeSize=2.

Set the maximum number of clauses in the tree (i.e. maximum number of leaves).

	setParam: numOfClauses=8.
