---
author: Alexander Hayes
title: "CiteSeer: Citation Matching"
permalink: /datasets/citeseer/
excerpt: "A relational dataset consisting of publication citations for Alchemy. This version has modifications to work with BoostSRL."
---

### Overview

"CiteSeer" is a relational dataset of publication citations for [Alchemy](https://alchemy.cs.washington.edu/), the original dataset is available on [their website](https://alchemy.cs.washington.edu/data/citeseer/). This version has modifications to work with BoostSRL; including the associated background, train/test folders, and the positives/negatives/facts.

Three targets are possible:

  * `infield_fauthor`
  * `infield_ftitle`
  * `infield_fvenue`

---

### Download

Download: [CiteSeer.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/CiteSeer/CiteSeer.zip?raw=true) (1.62 MB)

* `md5sum`: 
  <p style="word-break: break-all;">e606e6f3fbe12f62cb5261285b39209c</p>

* `sha256sum`: 
  <p style="word-break: break-all;">f5f6dd960a09d98e80cb2dcb735463dbc7dc5aaf2676f98d938be7df6edd2200</p>

---

### Setup

**Linux/Mac:**

1. After downloading, unzip CiteSeer.zip
  
  `unzip CiteSeer.zip`

2. If you're using a jar file, move it into the CiteSeer directory:
  
  `mv (jar file) CiteSeer/`

3. Learning:

  * **Learning may take a long amount of time on all three targets.**
  * `java -jar BoostSRL.jar -l -train train/ -target infield_fauthor,infield_ftitle,infield_fvenue -trees 10`

4. Inference:
  
  * `java -jar BoostSRL.jar -i -test test/ -model train/models/ -target infield_fauthor,infield_ftitle,infield_fvenue -trees 10`

---

### Modes

```text
// Parameters
usePrologVariables: true.
setParam: treeDepth=4.
setParam: nodeSize=2.
setParam: numOfClauses=8.
setParam: numOfCycles=8.
// Modes & Bridgers
mode: center(+bib, +pos).
mode: center(+bib, -pos).
mode: firstin(+bib, +pos).
mode: firstin(+bib, -pos).
mode: firstnonauthortitletkn(+bib, +pos).
mode: firstnonauthortitletkn(+bib, -pos).
mode: followby(+bib, +pos, #token).
mode: hascomma(+bib, +pos).
mode: hascomma(+bib, -pos).
mode: haspunc(+bib, +pos).
mode: haspunc(+bib, -pos).
mode: infield_ftitle(+bibpos).
mode: infield_fauthor(+bibpos).
mode: infield_fvenue(+bibpos).
mode: isalphachar(+token).
mode: isdate(+token).
mode: isdigit(+token).
mode: lastinitial(+bib, +pos).
mode: lastinitial(+bib, -pos).
mode: lessthan(+pos, -pos).
mode: lessthan(-pos, +pos).
mode: next(+pos, -pos).
mode: next(-pos, +pos).
bridger: next/2.
mode: nextbibpos(+bibpos, -bibpos).
mode: nextbibpos(-bibpos, +bibpos).
nextbibpos(BP1,BP2) :- isbibpos(BP1, B,P1), isbibpos(BP2,B,P2), next(P1,P2).
mode: isbibpos(+bibpos, -bib, -pos).
mode: isbibpos(+bibpos, +bib, -pos).
mode: isbibpos(+bibpos, -bib, +pos).
mode: isbibpos(-bibpos, +bib, +pos).
bridger: isbibpos/3.
mode: token(+token, +pos, +bib).
mode: token(+token, -pos, +bib).
mode: token(-token, +pos, +bib).
```
