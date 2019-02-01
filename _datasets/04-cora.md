---
author: Alexander Hayes
title: "Cora: Citation Matching"
permalink: /datasets/cora/
excerpt: "Cora is a dataset based on citations in scientific papers, the goal is to match citation information."
---

### Overview

**Cora** is a dataset based on citations in scientific papers. The original dataset is available on the [Alchemy website](https://alchemy.cs.washington.edu/data/cora/), this version contains the necessary background and train/test folders.

There are four possible targets:

  * `sameauthor`
  * `samebib`
  * `sametitle`
  * `samevenue`

The facts contain information on six labels: `author`, `haswordauthor`, `haswordtitle`, `haswordvenue`, `title`, `venue`.

---

### Download

Download: [Cora.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/Cora/Cora.zip?raw=true) (489 KB)

* `md5sum`:
  <p style="word-break: break-all;">905ad622d003da817c00f9835f36dc2f</p>

* `sha256sum`:
  <p style="word-break: break-all;">0a8b1f138d6827344c840bc3e3cccbe1eb40f2c102f929a05f4bc8f96ebbdae7</p>

---

### Setup


1. After downloading, unzip Cora.zip

    `unzip Cora.zip`

2. If you're using a jar file, move it into the Cora directory:

    `mv (BoostSRL jar file) Cora/`  
    `mv (auc jar file) Cora/`  

3. Learning:

    `java -jar BoostSRL.jar -l -train train/ -target sameauthor -trees 10`

4. Inference:

  `java -jar BoostSRL.jar -i -test test/ -model train/models/ -aucJarPath . -target sameauthor -trees 10`

---

### Modes

```text
usePrologVariables: false.
setParam: maxTreeDepth=3.
setParam: nodeSize=2.
setParam: numOfClauses=4.
setParam: numOfCycles=4.
setParam: minLCTrees=5;
setParam: incrLCTrees=5;
setParam: loadAllBasicModes=false.
setParam: loadAllLibraries=false.
queryPred: samebib/2.
queryPred: sametitle/2.
queryPred: samevenue/2.
queryPred: sameauthor/2.
mode: author(+paper, -auth).
mode: haswordauthor(+auth, -word).
mode: haswordtitle(+title, -word).
mode: haswordvenue(+venue, -word).
mode: title(+paper, -title).
mode: venue(+paper, -venue).
mode: author(-paper, +auth).
mode: haswordauthor(-auth, +word).
mode: haswordtitle(-title, +word).
mode: haswordvenue(-venue, +word).
mode: title(-paper, +title).
mode: venue(-paper, +venue).
mode: samebib(+paper, +paper).
mode: sametitle(+title, +title).
mode: samevenue(+venue, +venue).
mode: sameauthor(+auth, +auth).
mode: recursive_samebib(+paper, `paper).
mode: recursive_sametitle(+title, `title).
mode: recursive_samevenue(+venue, `venue).
mode: recursive_sameauthor(+auth, `auth).
mode: recursive_samebib(`paper, +paper).
mode: recursive_sametitle(`title, +title).
mode: recursive_samevenue(`venue, +venue).
mode: recursive_sameauthor(`auth, +auth).
mode: samebib(+paper, -paper).
mode: sametitle(+title, -title).
mode: samevenue(+venue, -venue).
mode: sameauthor(+auth, -auth).
mode: samebib(-paper, +paper).
mode: sametitle(-title, +title).
mode: samevenue(-venue, +venue).
mode: sameauthor(-auth, +auth).
usePrologVariables: true.
okIfUnknown: recursive_sametitle/2.
okIfUnknown: recursive_samebib/2.
okIfUnknown: recursive_samevenue/2.
okIfUnknown: recursive_sameauthor/2.
```
