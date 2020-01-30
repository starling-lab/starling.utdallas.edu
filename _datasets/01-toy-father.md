---
author: Alexander Hayes
title: "Toy Father"
date: 2018-02-26
permalink: /datasets/toy-father/
excerpt: "A toy dataset for predicting who is the father of whom."
---

### Overview

This toy dataset is used in the ["Getting Started"](/software/boostsrl/wiki/getting-started/) section of the BoostSRL Wiki. The goal is to predict who is the father of who.

Target: `father`

The facts contain labels for `male`, `siblingof`, and `childof`.

> train_pos

    father(harrypotter,jamespotter).
    father(ginnyweasley,arthurweasley).
    father(ronweasley,arthurweasley).
    father(fredweasley,arthurweasley).
    ...

> train_neg

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

> train_facts

    male(jamespotter).
    male(harrypotter).
    male(arthurweasley).
    male(ronweasley).
    male(fredweasley).
    male(georgeweasley).
    siblingof(ronweasley,fredweasley).
    siblingof(ronweasley,georgeweasley).
    siblingof(ronweasley,ginnyweasley).
    siblingof(georgeweasley,ginnyweasley).
    siblingof(ginnyweasley,ronweasley).
    siblingof(ginnyweasley,fredweasley).
    siblingof(ginnyweasley,georgeweasley).
    childof(jamespotter,harrypotter).
    childof(lilypotter,harrypotter).
    childof(arthurweasley,ronweasley).
    childof(mollyweasley,georgeweasley).
    childof(arthurweasley,ginnyweasley).
    childof(mollyweasley,ginnyweasley).
    ...

---

### Download

Download: [Toy-Father.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Toy-Father/Toy-Father.zip?raw=true) (4.3 KB)

* `md5sum`:
  <p style="word-break: break-all;">a637cae7ba78997a0d0bb372d1edaf5e</p>

* `sha256sum`:
  <p style="word-break: break-all;">75a45707975977daa7358e4678dd3eaf97293c6d98910e474c133593adb1cfd7</p>

---

### Setup:


1. After downloading, unzip Toy-Father.zip

    `unzip Toy-Father.zip`

2. If you're using a jar file, move it into the Toy-Father directory:

    `mv v1.0.jar Father/BoostSRL.jar`  
    `mv auc.jar Father/auc.jar`

3. Learning:

    `java -jar BoostSRL.jar -l -train train/ -target father -trees 10`

4. Inference:

  `java -jar BoostSRL.jar -i -model train/models -test test/ -target father -aucJarPath . -trees 10`

---

### Modes

    //Parameters
    setParam: maxTreeDepth=3.
    setParam: nodeSize=1.
    setParam: numOfClauses=8.
    //Modes
    mode: male(+name).
    mode: childof(+name,+name).
    mode: siblingof(+name,-name).
    mode: father(+name,+name).
