---
author: Nandini Ramanan
title: "WebKB"
permalink: /datasets/webkb/
excerpt: "WebKB is a dataset consisting of web pages and hyperlinks from four computer science departments: Cornell University, The University of Texas, The University of Washington, and The University of Wisconsin."
---

### Overview

The [Alchemy WebKB Dataset](https://alchemy.cs.washington.edu/data/webkb/) was adapted from a [dataset by the same name](http://www.biostat.wisc.edu/~craven/webkb) from Mark Craven's website (from the University of Wisconsin-Madison). **WebKB** consists of web pages and hyperlinks "from four computer science departments: Cornell University, The University of Texas, The University of Washington, and The University of Wisconsin."

This version contains the necessary background and train/test folders.

Target: `faculty`

The facts contain information on five labels: `courseprof`, `courseta`, `project`, `sameperson`, `student`.

---

### Download

Download: [WebKB.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/WebKB/WebKB.zip?raw=true) (41.1 KB)

* `md5sum`:
  <p style="word-break: break-all;">977e62fca51bfa7fe9c27bdf8af5d478</p>

* `sha256sum`:
  <p style="word-break: break-all;">7b36e85cc99483a98c68fc868ba9890398339eaca20b48b80e4b56d16ddc1522</p>

---

### Setup


1. After downloading, unzip WebKB.zip

    `unzip WebKB.zip`

2. If you're using a jar file, move it into the WebKB directory:

    `mv (BoostSRL jar file) WebKB/`  
    `mv (auc jar file) WebKB/`  

3. Learning:

    `java -jar BoostSRL.jar -l -train train/ -target faculty -trees 10`

4. Inference:

    `java -jar BoostSRL.jar -i -test test/ -model train/models/ -aucJarPath . -target faculty -trees 10`

---

### Modes

```text
setParam: loadAllLibraries = false.
setParam: treeDepth=3.
setParam: nodeSize=3.
setParam: numOfClauses=8.
mode:courseprof(-Course, +Person).
mode:courseprof(+Course, -Person).
mode: courseta(+Course, -Person).
mode: courseta(-Course, +Person).
mode:faculty(+Person).
mode:project(-Proj, +Person).
mode:project(+Proj, -Person).
mode:sameperson(-Person, +Person).
mode:student(+Person).
```
