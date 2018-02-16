---
title: "Learning with Advice"
author: Phillip Odom
permalink: /software/boostsrl/wiki/advice/
excerpt: "Guide for knowledge-based probabilistic logic learning (KBPLL) with BoostSRL."
---

### Overview

**Knowledge-based Probabilistic Logic Learning (KBPLL)** learns a model using training data and expert advice, extending Relational Functional Gradient Boosting (RFGB).

Knowledge and advice are interchangeable in this context, and both are specified by label preferences. **Label preferences** are a set that are more _preferred_ (and therefore more likely) than another set. A conjunction of literals in logic specifies a set of examples to which the label preferences should apply.

For example:

  * For the clause:

  `Patient(x) && BloodPressure(x, HIGH) && Cholesterol(x, HIGH)`

  * The preferred label is:

  `{Heart Attack}`

  * The non-preferred label is:

  `{Stroke, Cancer}`

This advice says that patients with high blood pressure and high cholesterol are more likely to have a heart attack and less likely to have cancer or a stroke.

The key notion behind RFGB is to calculate the current error (gradient) in the model for every example and fit a tree to that error. By adding that tree to the current model, the algorithm is pushed toward correcting its error. In order to incorporate expert knowledge, we introduce an advice gradient that pushes preferred labels toward 1 and non-preferred labels toward 0.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Advice

Advice preferences are specified in a single file, and each piece of advice is specified in three lines.

1. The first line contains the preferred label(s), preferred label(s), preferred label(s)
2. The second line contains the non-preferred label(s), non-preferred label(s)
3. The final line contains the path to the file that specifies advice clauses. These clauses define the examples where the advice should apply.

The advice file could contain multiple pieces of advice, each read in three line chunks.

Example:

```text
heartattack
stroke,cancer
C:\path\to\advice\file.txt
```

In the binary case, `heartattack` and `!heartattack` can be used as the preferred/non-preferred labels.

The file defining the clauses must use the following format:

```text
4.0 target(Arg1,...,ArgN) :- predicate1(...) ^ predicate2(...) ^ ... predicateN(...).
-4.0 target(Arg1,...,ArgN) :- !.
```

The file must define a clause for every possible example.
1. Clauses lead by a positive value (use 4.0) define examples where the advice will apply.
2. Clauses lead by a negative value (use -4.0) define examples where the advice will _not_ apply.
3. The cut (!) is used in the last clause to define all possible examples not covered by the previous clause.

Advice is compiled into a single value for every example. This is written to the "gradients_target.adv_grad" file in the training directory. It is useful to check this file to ensure that there are non-zero values.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### KBPLL Parameters

Two key parameters: `-adviceFile` and `-adviceWt`

1. `-adviceFile` should be set as the path to the file that contains the advice. Specifying a value for this parameter should ensure that KBPLL runs correctly.

2. `-adviceWt` controls the trade-off between the gradient with respect to the training data and the gradient with respect to the advice. 0.5 is the default value, but this parameters only needs to be specified if you want to change it.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Download

Here is a basic dataset to help with understanding advice and its associated file setup:

![Basic file structure for the Toy-Advice dataset](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Images/ToyAdviceFileStructure.png "Basic file structure for the Toy-Advice dataset")

Download: [Toy-Advice.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Toy-Advice/Toy-Advice.zip?raw=true) (27.5 KB)

* `md5sum`: 7ad05a6cfa3b9cde55a96669cb94ed15

* `sha256sum`: df60f5399a41ff8ef38f136366a55e4886d0af8705bfce55b761710a1f3848c7

advice.txt:
```
ha
!ha
adviceFile.txt
```

adviceFile.txt:
```
-4.0 ha(A) :- chol(A, 4).
-4.0 ha(A) :- chol(A, 3).
4.0 ha(A) :- !.
```

Train with advice using:

`java -jar v1-0.jar -l -train train/ -target ha -adviceFile "advice.txt" -trees 3`

Test with:

`java -jar v1-0.jar -i -model train/models/ -test test/ -target ha -trees 3`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### References

1. Odom, P.; Khot, T.; Porter, R.; and Natarajan, S. 2015. Knowledge-based Probabilistic Logic Learning. In AAAI.
2. Odom, P.; Bangera, V.; Khot, T.; Page, D.; and Natarajan, S. 2015. Extracting Adverse Drug Events from Text using Human Advice. In AIME.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scroll: 0 }, 'fast');
}
</script>
