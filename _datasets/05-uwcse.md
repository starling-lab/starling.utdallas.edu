---
author: Alexander Hayes
title: "UW-CSE: Advised-By Relationships"
permalink: /datasets/uwcse/
excerpt: "An anonymized dataset where based on the University of Washington CS Department. Goal is to predict who advises which student."
---

### Overview

From the UW-CSE [Alchemy Page](https://alchemy.cs.washington.edu/data/uw-cse/).

> "This data set consists of information about the University of Washington Department of Computer Science and Engineering. The data has been anonymized to comply with the University of Washington's privacy guidelines."

As usual, the version here is a .zip with the necessary background and train/test folders.

Target: `advisedby`

The facts contain information on fourteen labels: `courselevel`, `hasposition`, `inphase`, `professor`, `projectmember`, `publication`, `samecourse`, `sameperson`, `sameproject`, `student`, `ta`, `taughtby`, `tempadvisedby`, `yearsinprogram`.

---

### Download

Download: [UW-CSE.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/UW-CSE/UW-CSE.zip?raw=true) (257 KB)

* `md5sum`: 5e8217ebdb835ff8b6ff94eb3880d96b

* `sha256sum`: f16be492805bdac95cded02a3a3e590c29a68145f5ea59eb4180c300fb23b7e2

---

### Setup

**Linux/Mac:**

1. After downloading, unzip UW-CSE.zip
  
  `unzip UW-CSE.zip`

2. If you're using a jar file, move it into the UW-CSE directory:
  
  `mv (jar file) UW-CSE/`

3. Learning:

  * `java -jar BoostSRL.jar -l -train train/ -target advisedby -trees 10`

4. Inference:
  
  * `java -jar BoostSRL.jar -i -test test/ -model train/models/ -target advisedby -trees 10`

---

### Modes

```text
setParam: loadAllLibraries = false.
setParam: treeDepth=3.
setParam: nodeSize=1.
setParam: numOfClauses=8.
setParam: numOfCycles=8.
importLibrary:  listsInLogic.
queryPred: advisedby/2.
mode: professor(+Person).
mode: student(+Person).
mode: publication(+Title, -Person).
mode: publication(-Title, +Person).
mode: taughtby(+Course, +Person, -Quarter).
mode: taughtby(+Course, -Person, +Quarter).
mode: taughtby(-Course, +Person, -Quarter).
mode: courselevel(+Course, +Level).
mode: courselevel(+Course, #Level).
mode: hasposition(+Person, +Position!1).
mode: hasposition(+Person, #Position).
mode: multiclass_hasposition(+Person).
okIfUnknown: multiclass_hasposition/1.
mode: projectmember(+Project, -Person).
mode: projectmember(-Project, +Person).
range: Position={faculty_affiliate,faculty,faculty_adjunct,faculty_emeritus}.
range: Phase={pre_quals,post_generals,post_quals}.
mode: position(+Position).
mode: phase(+Phase).
position(faculty_affiliate).
position(faculty).
position(faculty_adjunct).
position(faculty_emeritus).
phase(pre_quals).
phase(post_generals).
phase(post_quals).
mode: advisedby(+Person, +Person).
mode: inphase(+Person, +Phase!1).
mode: inphase(+Person, #Phase).
mode: multiclass_inphase(+Person).
okIfUnknown: multiclass_inphase/1.
mode: tempadvisedby(-Person, +Person).
mode: tempadvisedby(+Person, -Person).
mode: yearsinprogram(+Person, #Integer).
mode: ta(+Course, -Person, +Quarter).
mode: ta(+Course, +Person, -Quarter).
mode: ta(-Course, +Person, -Quarter).
mode: sameperson(+Person, +Person).
mode: samecourse(+Course, +Course). 
mode: sameproject(+Project, +Project). 
mode: have_more_than_n_pubs(+Person, #PThresh).
mode: have_more_than_n_common_pubs(+Person, -Person, #PThresh).
mode: have_more_than_n_common_pubs(-Person, +Person, #PThresh).
mode: count_taughtby(+Person, -PThresh).
mode: count_publications(+Person, -PThresh).
mode: count_common_pubs(+Person, -Person, -PThresh).
mode: count_common_pubs(-Person, +Person, -PThresh).
usePrologVariables: true.
precompute:
commonpub(Title, P1,P2) :- publication(Title, P1), publication(Title, P2),P1\==P2.
precompute:
commonta(C,Q,P1,P2) :- ta(C,P2,Q), taughtby(C,P1,Q).
precompute1: 
count_taughtby(Person,N) :- taughtby(SomeC, Person, SomeQ), all([Course, Quarter], taughtby(Course, Person, Quarter), AllCourses), N is length(AllCourses).
precompute1: 
count_publications(Person,N) :- publication(Somet, Person), all(Title, publication(Title, Person), AllTitles), N is length(AllTitles).
precompute1: 
count_common_pubs(P1,P2,N) :- commonpub(Somet, P1,P2), all(Title, commonpub(Title, P1,P2), AllTitles),  N is length(AllTitles).
precompute2: 
have_more_than_n_pubs(A,N) :-
	        count_publications(A,N2),
		member(N,[1, 3, 5, 7, 9,11,13,15]),
		        N2 > N.
precompute2: 
have_more_than_n_common_pubs(A1,A2,N) :-
	        count_common_pubs(A1,A2,N2),
		member(N,[1, 3, 5, 7, 9,11,13,15]),
		        N2 > N.
```

