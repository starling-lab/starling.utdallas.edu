---
title: "Grounded Relational Random Walks"
author: Navdeep Kaur
permalink: /software/boostsrl/wiki/grounded-relational-random-walks/
excerpt: "How to perform grounded relational random walks with BoostSRL."
---

### Overview

We obtain valued structure of relational data by randomly walking on a lifted relational graph whose nodes represent different object types and edges denote relations between them. We can obtain _first order clauses_ from these relational random walks; where each random walk forms the body of the clause and object types at the end points of random walks form the arguments of a target predicate.

This idea is now extended to grounded random walks from the given lifted random walks that are expressed in clausal form by unifying them with the fact base. In the following tutorial, we explain how to obtain grounded random walks from the lifted random walks by building on inference in MLN-Boost models.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Formulating Lifted Random Walks as Clauses

Suppose we are provided with a lifted random walk as follows:

![PersonID1 -> SamePerson -> PersonID -> IsA -> Designation -> not(isA) -> PersonID -> tempAdvisedBy -> PersonID2](https://raw.githubusercontent.com/boost-starai/BoostSRL-Misc/master/Images/liftedrandomwalkExample.png)

We are inferring the target relation `advisedBy(personid1,personid2)` by converting it into a clausal form that is acceptable to MLN-Boost inference.

`( advisedBy(A,B,0) :- SamePerson(A, C), isa(C, D), _isa(D,E), tempAdvisedBy(E, B), !).`

Convert the lifted random walks in clausal form above and save them in `./train/models/bRDNs/Trees/advisedByTree0.tree`

The name of the output file (*advisedByTree0.tree*) should always be *targetPredicate* name followed by *Tree0.tree*. The third argument of the `advisedBy` predicate is the regression value of MLN-Boost. It can be set to any real number for executing grounded random walks.

Refer to our tutorial on [Lifted Relational Random Walks](Lifted-Relational-Random-Walks) to generate the lifted random walks.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Facts File

`/test/test_facts.txt`

The facts file should contain all of the facts that would be used to ground the lifted random walks. It should not contain the inverted facts (those starting with underscore: `_`) as they are generated internally at runtime.

### Background File

`/test/test_bk.txt`

1. Background (bk file) should contain modes set for all predicates and all modes should be set to `+`. No modes should be set for inverted predicates.
2. Random walk constraints should be set for each predicate by utilizing the keyword `randomwalkconstraint`. This constraint will be used to generate the inverse predicates (e.g. `_is(designation,personid).`) for facts at runtime. These constraints should be set the same way as they were set during generation of lifted random walks. Refer to our tutorial on [Lifted Random Walks](Lifted-Relational-Random-Walks) for more details on setting these constraints.

### Negative Examples File

`/test/test_neg.txt`

The negative examples file can be left empty. Otherwise, the code is capable of generating random walks for negative examples too.

### Target Predicate File

Create a model file named `targetpredicate.model` (in our example: `advisedBy.model`). This is required for the internal workings of MLN-Boost inference. This file should contain the following:

```
1
targetpredicatename
[1.0]
-1.8
targetpredicatename
```

Store this file in `./train/models/bRDNs/advisedBy.model`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Usage Commands

`java -cp edu.wisc.cs.will.GroundRelationalRandomWalks.RunGroundRelationalRandomWalks -grw -mln -i -test ".\test" -target advisedBy -trees 1 -model ".\train\models"`

The output grounded random walks are stored inside `./test/OutputRW.txt` Kindly ignore all the AUC-ROC values and AUC-PR values, they are generated as part of MLN-Boost execution.

### References

1. Tushar Khot, Sriraam Natarajan, Kristian Kersting, Jude Shavlik, "Learning Markov Logic Networks via Functional Gradient Boosting," In ICDM 2011.

2. Ni Lao and William W. Cohen, "Relational Retrieval Using a Combination of Path-Constrained Random Walks," ECML 2011.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scroll: 0 }, 'fast');
}
</script>
