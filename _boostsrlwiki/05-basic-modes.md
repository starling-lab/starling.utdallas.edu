---
title: "Basic Modes Guide"
author: Sriraam Natarajan
permalink: /software/boostsrl/wiki/basic-modes/
excerpt: "Overview of how set modes in BoostSRL."
---

[**Contact us**](http://www.indiana.edu/~iustarai/people.html) if your particular mode file does not work.

**Modes** are used to restrict/guide the search space and are a powerful tool in getting relational algorithms such as BoostSRL to work. If your algorithm does not learn anything useful, then the *first debug point* would be the modes (in the background.txt file).

The modes of our system follow the [Aleph modes definitions](http://www.cs.ox.ac.uk/activities/machinelearning/Aleph/aleph), the key difference being that we use the form:

```
mode: predicateName(ModeTypeArg1,...).
```

---

### By Definition

The modes supported by our system are `+`, `-`, and `#` (following the definitions of Aleph). Variables are associated with one (or more) of them.

Consider the famous 'trains' [testbed of Michalski](http://slidewiki.org/deck/1232_michalski-s-train-problem#tree-0-deck-1232-1-view):

```text
mode: eastbound(+train).
mode: short(+car).
...
mode: shape(+car, #shape).
mode: has_car(+train, -car).
```

1. `+v`  
  indicates that variable `v` must have already been mentioned in the current rule. For instance, let us assume that the goal is to learn if the train is eastbound (i.e., `eastbound(train)` is the target)). The search algorithm first considers only the predicates that has a modeType `+train` in them. If no predicates has the modeType `+train`, the algorithm terminates. In this case, it will add `has_car` as it has the modeType `+train`.  
2. `-v`  
  indicates that a new variable `v` can be introduced into the clause (essentially an *existential*). Continuing the above example, `has_car` can be added because it has both `+train` and `-car`. `-car` allows for a new variable to be added and `+train` will allow for the algorithm to consider this predicate. It should be mentioned that if the mode definition had been `has_car(+train,+car)`, it would be ignored by the search. Though `train` has been declared earlier (in the target), `car` was not defined earlier and this predicate will be ignored. Therefore, to add a clause `has_car(X,Y) -> eastbound(X)` it is essential that the car is of type `-`.
3. `#v`  
  indicates that `v` is of type constant. This is the simplest of all the modes since the variables are grounded and their specific values are searched over.

Finally, if one observes closely, `has_car(X,Y) -> eastbound(X)` is not informative in that all the trains will have at least one car. Hence, the algorithm can never learn this clause. To enable learning of this clause, one has to increase the lookahead of the search algorithm. This can be achieved in two ways:

1. Setting a **parameter**. `nodeSize=2` will allow for two predicates to be considered at the same time. So it is possible to learn `has_car(X,Y) ^ big(Y) -> eastbound(X)`.

2. Defining a **bridger**. The *bridger* predicate will not be scored during search but will serve to introduce new objects in the search space (in this case, a car). This is defined as follows:

  `bridger: has_car/2.`

  *The number after the* `/` *sign indicates the number of parameters of that predicate.*

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### By Example

Here are basic modes for some of the small datasets, the *full* modes can be found on their associated page.

1. [Toy Cancer Dataset](Toy-Cancer-Dataset#modes)

  ```text
useStdLogicVariables: true.
setParam: treeDepth=4.
setParam: nodeSize=2.
setParam: numOfClauses=8.
mode: friends(+Person, -Person).
mode: friends(-Person, +Person).
mode: smokes(+Person).
mode: cancer(+Person).
bridger: friends/2.
  ```

2. Father Dataset (from the ["Getting Started"](Getting-Started) guide)

  ```text
//Parameters
setParam: maxTreeDepth=3.
setParam: nodeSize=1.
setParam: numOfClauses=8.
//Modes
mode: male(+name).
mode: childof(+name,+name).
mode: siblingof(+name,-name).
mode: father(+name,+name).
  ```

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
