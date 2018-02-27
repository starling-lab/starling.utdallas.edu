---
author: Navdeep Kaur
title: "Boston Housing Prices: Regression"
permalink: /datasets/boston-housing/
excerpt: "Using regression to predict housing values in Boston suburbs."
---

### Overview

This dataset concerns housing values in Boston suburbs. It's based on the "[Boston Housing Dataset](https://archive.ics.uci.edu/ml/datasets/Housing)" from _University of California, Irvine_, which in turn was taken from the StatLib library maintained at _Carnegie Mellon University_.

The target is `medv`: median value of owner-occupied homes in terms of thousands of dollars ($1000s).

Features:

1. `crim`: per-capita crime rate by town.
2. `zn`: proportion of residential land zoned for lots over 25,000 sq.ft.
3. `indus`: proportion of non-retail business acres per town.
4. `chas`: Charles River dummy variable (=1 if tract bounds river; 0 otherwise)
5. `nox`: nitric oxides concentration (parts per 10 million)
6. `rm`: average number of rooms per dwelling.
7. `age`: proportion of owner-occupied units built prior to 1940.
8. `dis`: weighted distances to five Boston employment centres.
9. `rad`: index of accessibility to radial highways.
10. `tax`: full-value property-tax rate per $10,000.
11. `ptratio`: pupil-teacher ratio by town.
12. `b`: 1000(Bk-0.63)^2 where Bk is the proportion of black people by town.
13. `lsat`: percent lower status of the population.
14. `medv`: median value of owner-occupied homes in terms of thousands of dollars ($1000s).

---

### Download

Download: [Boston-Housing.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Boston-Housing/Boston-Housing.zip?raw=true) (19 KB)

* `md5sum`: 
  <p style="word-break: break-all;">735bf2c6f0eb220950846a89cb973545</p>

* `sha256sum`: 
  <p style="word-break: break-all;">5ed2fa475cfa45d5e0327cdc6ff60f98a9621ff68f1fa4118ecfc20fc507754e</p>

---

### Setup

**Linux/Mac:**

1. After downloading, unzip Boston-Housing.zip
  
  `unzip Boston-Housing.zip`

2. If you're using a jar file, move it into the Boston-Housing directory:
  
  `mv (jar file) Boston-Housing/`

3. For learning/inference, full explanations are available on the ["Regression Tutorial"](https://github.com/boost-starai/BoostSRL/wiki/Regression). Commands are also listed below.

  * Learning: `java -cp BoostSRL.jar edu.wisc.cs.will.Boosting.Regression.RunBoostedRegressionTrees -reg -l -train train/ -target medv -trees 20`

  * Inference: `java -cp BoostSRL.jar edu.wisc.cs.will.Boosting.Regression.RunBoostedRegressionTrees -i -test test/ -target medv -model train/models/ -trees 20`

---

### Modes

Notice that since the values have been discretized, we can treat the values as constants and therefore we can use an octothorpe (#) in the modes file.

```text
mode: crim(+id,#varsrim).
mode: zn(+id,#varzn).
mode: indus(+id,#varindus).
mode: chas(+id,#varchas).
mode: nox(+id,#varnox).
mode: rm(+id,#varrm).
mode: age(+id,#varage).
mode: dis(+id,#vardis).
mode: rad(+id,#varrad).
mode: tax(+id,#vartax).
mode: ptratio(+id,#varptrat).
mode: b(+id,#varb).
mode: lstat(+id,#varlstat).
mode: medv(+id).
```
