---
title: "Getting Started"
author: Alexander Hayes
permalink: /softwares/boostsrl/wiki/getting-started/
excerpt: "Getting started with BoostSRL."
---

### Background

_Prerequisites:_
  1. programming experience is strongly recommended
  2. basic shell experience (moving between folders, viewing files)
  3. an Apple/Linux machine (Windows coming soon)

At its core, this is a brief "Inductive Logic Programming" (ILP) tutorial. However, we are learning probabilistic (weighted) clauses. Following any standard logic learner, we assume that the data is structured i.e., consists of objects and relationships between the objects. The goal is to induce a theory (regression trees with logical variables in them) from a set of examples (positive and negative as separate files), facts (values of the attributes and/or relationships) and some background knowledge, all in predicate logic format. More on the background knowledge later. Like a typical ILP learner, ours is a discriminative learner and hence requires both positive and negative examples.

Like many things in computer science, usually the best way to learn something is by doing it.

[Download the data](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Toy-Father/Toy-Father.zip?raw=true), a copy of the [jar file](https://github.com/boost-starai/BoostSRL-Misc/blob/master/VersionHistory/Version1.0/v1-0.jar?raw=true), and the [AUC jar](https://github.com/boost-starai/BoostSRL-Misc/blob/master/VersionHistory/Version1.0/auc.jar?raw=true) and follow along!

1. `unzip Father.zip`
2. `mv v1.0.jar Father/BoostSRL.jar`
3. `mv auc.jar Father/auc.jar`
4. `cd Father`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Setup as Tables

  * Suppose we have data about some people and some of their relationships. (we'll refer to this information as "facts," more on that later)

  | Name | Sex | Child | Sibling
  :---:|:---:|:---:|:---:
  James Potter | Male | [Harry Potter] | -
  Lily Potter | Female | [Harry Potter] | -
  Harry Potter | Male | - | -
  Arthur Weasley | Male | [Ron, Fred, Ginny] | -
  Molly Weasley | Female | [Ron, Fred, Ginny] | -
  Ron | Male | - | [Fred, Ginny]
  Fred | Male | - | [Ron, Ginny]
  Ginny | Female | - | [Ron, Fred]

Note that the Child and Sibling are multi-arity relations and hence can have sets of values instead of a single value.

  * Assume that the goal is to learn _father(X)_?. This means that the goal is to learn logic rules for the father of any given domain object X (persons in this case), given the information in the tables, i.e. given that you know the names of the domain objects, their sex, their children and their siblings.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### From Tables to First-order Predicate Logic Notation

Once we have the high-level idea of what these relationships look like, the next step is to convert this into predicate logic format. This is the standard format for most Prolog-based systems but based on feedback from the users of the previous version, we provide a more detailed tutorial on its construction. However, we recommend that a script be used for this automatic construction.

A key difference to standard Prolog systems is that our system makes a restrictive assumption - no function symbols. We only handle predicate (boolean) symbols for ease of learning. However, note that a n-valued function can be represented using n different binary predicates with a mutual exclusive constraint.

A few things to consider during the transition:
  1. 'Name' is an identifier.
  2. 'Sex' is assumed to be either male or female, so we can simplify by making it a True/False value.
  3. childof, siblingof, and fatherof are binary relations, i.e., they encode the relation between two people (e.g. childof(mrbennet,jane), denotes that Jane is the parent of Mr. Bennet)

The target we want to learn is _father(x,y)_. To learn this rule, the algorithm learns a decision tree that most effectively splits the positive and negative examples. This example is fairly small, and hence a few trees should suffice. However, for more complex problems we need more trees to learn a robust model. In most of our experiments, we use at least 20 trees.

> _Positive Examples_

  ```text
  father(harrypotter,jamespotter).
  father(ginnyweasley,arthurweasley).
  father(ronweasley,arthurweasley).
  father(fredweasley,arthurweasley).
  ...
  ```

> _Negative Examples_

  ```text
  father(harrypotter,mollyweasley).
  father(georgeweasley,jamespotter).
  father(harrypotter,arthurweasley).
  father(harrypotter,lilypotter).
  father(ginnyweasley,harrypotter).
  father(mollyweasley,arthurweasley).
  father(fredweasley,georgeweasley).
  father(georgeweasley,fredweasley).
  father(harrypotter,ronweasley).
  father(georgeweasley,harrypotter).
  father(mollyweasley,lilypotter).
  ...
  ```

> _Facts_

  ```text
  male(jamespotter).
  male(harrypotter).
  male(arthurweasley).
  male(ronweasley).
  male(fredweasley).
  male(georgeweasley).
  siblingof(ronweasley,fredweasley).
  siblingof(ronweasley,georgeweasley).
  siblingof(ronweasley,ginnyweasley).
  siblingof(fredweasley,ronweasley).
  siblingof(fredweasley,georgeweasley).
  siblingof(fredweasley,ginnyweasley).
  siblingof(georgeweasley,ronweasley).
  siblingof(georgeweasley,fredweasley).
  siblingof(georgeweasley,ginnyweasley).
  siblingof(ginnyweasley,ronweasley).
  siblingof(ginnyweasley,fredweasley).
  siblingof(ginnyweasley,georgeweasley).
  childof(jamespotter,harrypotter).
  childof(lilypotter,harrypotter).
  childof(arthurweasley,ronweasley).
  childof(mollyweasley,ronweasley).
  childof(arthurweasley,fredweasley).
  childof(mollyweasley,fredweasley).
  childof(arthurweasley,georgeweasley).
  childof(mollyweasley,georgeweasley).
  childof(arthurweasley,ginnyweasley).
  childof(mollyweasley,ginnyweasley).
  ...
  ```

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Training a Model

There's one more piece we need: the _background_.

> _background_

  ```text
  // Parameters
  setParam: maxTreeDepth=3.
  setParam: nodeSize=1.
  setParam: numOfClauses=8.
  // Modes
  mode: male(+name).
  mode: childof(+name,+name).
  mode: siblingof(+name,-name).
  mode: father(+name,+name).
  ```

Enter the directory and run the jar file to train the model.

`java -jar BoostSRL.jar -l -combine -train train/ -target father -trees 10`

First it finds childof(B,A):

_"fathers are parents"_

<img src="https://raw.githubusercontent.com/boost-starai/BoostSRL-Misc/master/Images/WILLTreeFor_fatherOf1.png" style="display: block; margin: auto; padding-top: 0.4em; padding-bottom: 0.4em;">

Next, if the person is male, they are also more likely to be a father:

_"fathers are male"_

<img src="https://raw.githubusercontent.com/boost-starai/BoostSRL-Misc/master/Images/WILLTreeFor_fatherOf9.png" style="display: block; margin: auto; padding-top: 0.4em; padding-bottom: 0.4em;">

Each tree builds on the error of the previous tree. By combining the trees the model learned, we can see the decision the model finds most accurate.

<img src="https://raw.githubusercontent.com/boost-starai/BoostSRL-Misc/master/Images/CombinedTreesfatherOf.png" style="display: block; margin: auto; padding-top: 0.4em; padding-bottom: 0.4em;">

This tree shows that a male father _E_ is the parent of child _D_. Alternatively, the person is also the father to his child's siblings.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Testing a Model

_Technically_ we're querying a model for an answer here, but we'll call it the testing phase.

1. We have a new set of data, and we want to know about the _father(x)_ relationship:

  | Name | Sex | Child | Sibling | Father
  :---:|:---:|:---:|:---:|:---:
  Mr. Bennet | Male | [Elizabeth, Jane] | - | ?
  Mrs. Bennet | Female | [Elizabeth, Jane] | - | ?
  Elizabeth | Female | - | [Jane] | ?
  Jane | Female | [Elizabeth] | - | ?
  Mr. Lucas | Male | [Charlotte] | - | ?
  Mrs. Lucas | Female | [Charlotte] | - | ?
  Charlotte | Female | - | - | ?

2. Outline the facts and "positive examples" to test:

  > _Facts_

  ```text
  male(mrbennet).
  male(mrlucas).
  male(darcy).
  childof(mrbennet,elizabeth).
  childof(mrsbennet,elizabeth).
  childof(mrbennet,jane).
  childof(mrsbennet,jane).
  childof(mrlucas,charlotte).
  childof(mrslucas,charlotte).
  siblingof(jane,elizabeth).
  siblingof(elizabeth,jane).
  ```

  > _Positive Examples_

  In this case, we'll only add the examples we want to test.

  ```text
  father(elizabeth,mrbennet).
  father(jane,mrbennet).
  father(charlotte,mrlucas).
  father(charlotte,mrsbennet).
  father(jane,mrlucas).
  father(mrsbennet,mrbennet).
  father(jane,elizabeth).
  ```

3. Run the testing command from the `Father` directory:

  `java -jar BoostSRL.jar -i -model train/models -test test/ -target father -aucJarPath . -trees 10`

4. Enter the `test` directory and look at the results:

  * `cd test`
  * `less results_father.db`

  The results will look something like this:

  ```text
  father(elizabeth, mrbennet) 0.8469089683281722
  father(jane, mrbennet) 0.8469089683281722
  father(charlotte, mrlucas) 0.8469089683281722
  father(charlotte, mrsbennet) 0.03200025741806517
  father(jane, mrlucas) 0.06111079239086714
  father(mrsbennet, mrbennet) 0.06111079239086714
  father(jane, elizabeth) 0.03200025741806517
  ```

5. Results in a nicer format:

  | Person A | Person B | Probability of B being the father of A
  :---:|:---:|:---:
  Elizabeth | Mr. Bennet | 84.691%
  Jane | Mr. Bennet | 84.691%
  Charlotte | Mr. Lucas | 84.691%
  Charlotte | Mrs. Bennet | 3.200%
  Jane | Mr. Lucas | 6.111%
  Mrs. Bennet | Mr. Bennet | 6.111%
  Jane | Elizabeth | 3.200%

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

<script>
function topOfPage() {
	$('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
