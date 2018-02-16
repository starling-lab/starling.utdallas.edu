---
author: Nandini Ramanan
permalink: /datasets/toy-cancer/
---

### Overview

This is referred to as a "Toy Dataset" because of its small size and the fact that it uses made-up data. However, it is meant to show that the probability of someone having cancer increases if they smoke or have friends who smoke.

Target: `cancer`

The facts contain information on two labels: `friends`, `smokes`.

* train_facts :

```text
friends(Alice, Bob).
friends(Alice, Fred).
friends(Chuck, Bob).
friends(Chuck, Fred).
friends(Dan, Bob).
friends(Earl, Bob).
friends(Bob, Alice).
friends(Fred, Alice).
friends(Bob, Chuck).
friends(Fred, Chuck).
friends(Bob, Dan).
friends(Bob, Earl).
smokes(Alice).
smokes(Chuck).
smokes(Bob).
```

* train_pos :

```text
cancer(Alice).
cancer(Bob).
cancer(Chuck).
cancer(Fred).
```

* train_neg :

```text
cancer(Dan).
cancer(Earl).
```

---

### Download

Download: [Toy-Cancer.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Toy-Cancer/Toy-Cancer.zip?raw=true) (2.83 KB)

* `md5sum`: fa15b64583f9b1abc7fd78b93025792d

* `sha256sum`: 618d9283caa5459711b01d7b535aa1e91c8c98945ed4085248368a373ce880c2

---

### Setup

**Linux/Mac:**

1. After downloading, unzip Toy-Cancer.zip
  
  `unzip Toy-Cancer.zip`

2. If you're using a jar file, move it into the Toy-Cancer directory:
  
  `mv (jar file) Toy-Cancer/`

3. Learning:

  * `java -jar BoostSRL.jar -l -train train/ -target cancer -trees 10`

4. Inference:
  
  * `java -jar BoostSRL.jar -i -test test/ -model train/models/ -target cancer -trees 10`

---

### Modes

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
//precompute1: 
num_of_smoking_friends(x, n) :- 
   friends(x, y), // grounding x first
   countUniqueBindings((friends(x,z)^smokes(z)), n).
mode: num_of_smoking_friends(+Person, #Number).
```
