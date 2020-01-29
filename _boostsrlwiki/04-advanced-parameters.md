---
title: Advanced Parameters
author: Sriraam Natarajan
permalink: /softwares/boostsrl/wiki/advanced-parameters/
excerpt: "Advanced parameters for restricting the search space of BoostSRL."
---
Few Advanced Parameters are set in the background file while few can be included as command line arguments.

## Advanced Arguments

* `-lc` : print learning curve wth varying number of trees.

## Parameters in Background file

Include the following lines in the background file (folder_bk.txt) to set the parameters:

**maxTreeDepth**

Set the maximum number of nodes from root to leaf (height) in the tree.

    setParam: maxTreeDepth=3.

**nodeSize**

Set the maximum number of literals in the node. Default value is **2**.

    setParam: nodeSize=2.

**numOfClauses**

Set the maximum number of clauses in the tree (i.e. maximum number of leaves). Default value is **100**.

    setParam: numOfClauses=8.

**numOfCycles**

Set the maximum number of times the code should loop to learn clauses. Similar to numOfClauses but the counter increases even when no clause is learned. Default value is **100**.

    setParam: numOfCycles=8.

**recursion**

Allow reusing the literal from head of the clause in the body of the clause. Default is false.

    setParam: recursion=true.

**lineSearch**

Performs line search for deciding step length for functional gradient instead of using the fixed step length provided as `-step` in [basic parameters]({{ site.baseurl }}{% link _boostsrlwiki/03-basic-parameters.md%}). Default value is **false**.

    setParam: lineSearch=true.


**loadAllLibraries**

Prevent loading of all the existing libraries: `arithmeticInLogic`, `comparisonInLogic`, `differentInLogic`, `listsInLogic` by setting it to **false**. Individual libraries can then be loaded using `importLibrary` parameters. Default value is **true**.

    setParam: loadAllLibraries = false.

**loadAllBasicModes**

Prevent loading of all the basic modes: `modes_arithmeticInLogic`, `modes_comparisonInLogic`, `modes_differentInLogic`, `modes_listsInLogic` by setting it to **false**. This might use a lot of cycles, so use with care. Default value is **true**

    setParam: loadAllBasicModes = false.

**minLCTrees**

Set the minimum number of trees used for printing learning curves. Used only when `-lc` is set. Default value is **20**

    setParam: minLCTrees=5.

**incrLCTrees**    

Set the number of trees to be increased every step while printing learning curve. Used only when `-lc` is set. Default value is **2**

    setParam: incrLCTrees=5.  

**treeDepth**

Deprecated. Use maxTreeDepth instead

**resampleNegs**

Deprecated.

## Advanced settings

**Warm Start**  

RDN Boost supports warm start, which allows you to add more trees to an already fitted model. To warm start learning, rename the existing `<target_predicate>.model` file in the model directory to `<target_predicate>.model.ckpt` and use the learn command as before.
