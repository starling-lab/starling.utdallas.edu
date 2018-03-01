---
title: "Lifted Relational Random Walks"
author: Navdeep Kaur
permalink: /software/boostsrl/wiki/lifted-relational-random-walks/
excerpt: "How to perform lifted relational random walks with BoostSRL."
---

### Overview

*"Lifted Relational Random Walks"* has been integrated into BoostSRL to obtain random walks in relational domains. Relational data schema can often be represented as a lifted graph where the nodes represent entity types and edges represent relations between two entities. A random walk on such graph may result in exploration of some interesting structure present in the relational schema. For example, the following random walk can be interpreted as a person taught a course that has a `courseLevel` of `levelid`:

Consider the random walk: `personid -> taught -> courseid -> courseLevel -> levelid`

This random walk can be converted into clausal form as: `taught(personid,courseid) ^ courseLevel(courseid,levelid)`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

### Parameters

Random Walks can be obtained by running the following command in BoostSRL:

<code style="display: inline-block; word-break: break-all;">java -cp edu.iu.cs.RelationalRandomWalks.RunRelationalRandomWalks -rw -train "./facts.txt" -startentity "personid" -endentity "personid" -maxRWlen 6</code>

As shown above the following flags need to be set:

 * `-rw`: Perform lifted relational random walks.

 * `-startentity`: Set the entity type from which the random walk should always start (e.g. _personid_ in the above example).

 * `-endentity`: Set the entity type at which the random walk should always end, (e.g. _levelid_ in above example).

 * `-maxRWlen`: Set the maximum length (number of relations) of any random walks.

 * `-train`: Set the path to schema file.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

### Input File
 
The input file ('facts.txt') will consist of the schema of the relational dataset. An example of schema to be input to the system is shown as follows:

```
courseLevel(courseid,levelid)|NoBF
student(personid,tudentype)|NoBF
professor(personid,rofessortype)|NoBF
inPhase(personid,haseid)|NoBF
yearsInProgram(personid,yearid)|NoBF
hasPosition(personid,ositiontype)|NoBF
B_taughtBy(courseid,personid)|NoTwin|NoBB
```

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

### Setting Flags in Input File

As can be seen from the above examples, some flags can be set in schema file after vertical bars (|) for each relation. For more information on importance of these flags, please refer to [1]. This code supports the following flags:
NoTwin: This code allows an inverse relation for every relation present in schema file, which is represented by putting an underscore (_) character in front relation. For e.g. inverse of `courseLevel(coursid,levelid)` will be represented as `_courseLevel(levelid, courseid)` such that `courseLevel` and `_courseLevel` are two distinct relations. Setting *NoTwin* disallows the inverse of a relation to be present in random walks.

 * `NoTwin`: Disallow the inverse of a relation from being present in random walks.

 * `NoBB`: Restrict an _inverse_ relation to immediately follow itself in random walk.

 * `NoFF`: Restrict a _non-inverse_ relation to immediately follow itself in random walk.

 * `NoFB`: Restrict an _inverse_ relation to immediately follow its ‘non-inverse’ counterpart in random walk.

 * `NoBF`: Restrict a _non-inverse_ relation to immediately follow its inverse counterpart in random walk.

**_Caution: these flags are case sensitive. So set them carefully._**

### Output File

The output will be stored in 'RWRPredicates.txt' file in the same folder as input file.

### References

 1. Ni Lao and William W. Cohen, "Relational Retrieval Using a Combination of Path-Constrained Random Walks", ECML 2011.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
