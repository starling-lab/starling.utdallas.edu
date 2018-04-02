---
title: "Approximate Counting"
author: Mayukh Das
permalink: /software/boostsrl/wiki/approximate-counting/
excerpt: "How to use approximate counting with BoostSRL."
---

### Overview

***Notice: v1.0 of BoostSRL.jar does not include Approximate Counting, but it is available in the source.***

**MLN-Boost** [(Khot et al. 2011)](#references) requires counting over satisfied groundings of First-Order Logic formulas (could be partially grounded) given the facts/evidence (ground atoms that are true in the world). This counting operation may occur multiple times both for computing probabilities while learning and during inference.

The vanilla implementation of the software performs this counting in a brute force manner via combinatorial search which is *#P-complete*. Hence, scaling to large evidence is a significant concern. [(Das et. al. 2016)](#references) proposed an approach (FACT algorithm) to compute these counts in an approximate fashion via graph databases in order to elevate efficiency without sacrificing performance. **Approximate Counting** has been integrated into the software for scalability to large datasets.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Parameters

Approximate counting can be enabled for MLN-Boost by adding a flag to the command-line arguments. There are several other minor additional points that one needs to be aware of while running MLN-Boost with approximate counting.

* `-approxCount`
* `-mln`

*Example:*

* `java -jar BoostSRL.jar -l -train train/ -target (target) -trees 10 -mln -approxCount`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Limitations

There are certain limitations to using the approximate counting module (as discussed in the original paper).

* **Arity**: Presently, the approximation module supports only unary and binary predicates. If that data has predicates of arity greater than two we advise against using approximate counting.
* **Delta-size vs. Performance**: MLN-Boost works well with approximate counting for data sets of reasonable to large size (> 100 facts). For small datasets it will run without errors but the efficiency gain may not be significant and performance may be worse than the original.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Dependencies:

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### References

1. Khot, T.; Natarajan, S.; Kersting, K.; and Shavlik, J. 2011. Learning markov logic networks via functional gradient boosting. In ICDM.
2. Das, M.; Wu, Y.; Khot, T.; Kersting, K.; and Natarajan, S. 2016. Scaling Lifted Probabilistic Inference and Learning Via Graph Databases. In SIAM International Conference on Data Mining (SDM).

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
