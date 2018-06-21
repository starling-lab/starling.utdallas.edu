---
author: Nandini Ramanan
title: "IMDB: Internet Movie Database"
permalink: /datasets/imdb/
excerpt: "Internet Movie Database (IMDB) is an online database of movies, television shows, etc. The goal is to predict whether someone is female."
---

### Overview

**Internet Movie Database** (IMDB) is an online database of movies, television shows, the actors/actresses that star in them, and the people that make them.

Target:

  * `female_gender`

---

### Download

Download: [IMDB.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Datasets/IMDB/IMDB.zip?raw=true) (29.6 KB)

* `md5sum`:
  <p style="word-break: break-all;">70f85ae348531b3103008d4e6acfa379</p>

* `sha256sum`:
  <p style="word-break: break-all;">fe636348146f9f0ef0c2a081515abf543e3db9bdab1b441575955095c41e4c4f</p>

---

### Setup

**Linux/Mac:**

1. After downloading, unzip IMDB.zip

  `unzip IMDB.zip`

2. If you're using a jar file, move it into the IMDB directory:

  `mv (jar file) IMDB/`

3. Learning:

  * `java -jar BoostSRL.jar -l -train train/ -target female_gender -trees 10`

4. Inference:

  * `java -jar BoostSRL.jar -i -test test/ -model train/models/ -target female_gender -trees 10`

---

### Modes

```text
setParam: treeDepth=3.
setParam: nodeSize=3.
setParam: numOfClauses=8.
setParam: numOfCycles=8.
setParam: recursion=true.
setParam: lineSearch=true.
setParam: resampleNegs=true.
mode: actor(+person).
mode: recursive_actor(`person).
mode: recursive_movie(+movie, `person).
mode: recursive_movie(`movie, +person).
mode: movie(+movie, +person).
mode: movie(+movie, -person).
mode: movie(-movie, +person).
mode: female_gender(+person).
mode: recursive_female_gender(`person).
mode: genre(+person, +genre).
mode: genre(+person, #genre).
mode: genre(+person, -genre).
mode: genre(-person, +genre).
mode: recursive_genre(+person, `genre).
mode: recursive_genre(`person, +genre).
mode: workedunder(+person, +person).
mode: workedunder(+person, -person).
mode: workedunder(-person, +person).
mode: recursive_workedunder(+person, `person).
mode: recursive_workedunder(`person, +person).
okIfUnknown: recursive_actor/1.
okIfUnknown: recursive_movie/2.
okIfUnknown: recursive_female_gender/1.
okIfUnknown: recursive_genre/2.
okIfUnknown: recursive_workedunder/2.
okIfUnknown: movie_2_1_genre/3.
okIfUnknown: workedunder_2_1_genre/3.
okIfUnknown: workedunder_1_1_gender/2.
okIfUnknown: movie_2_1_gender/2.
usePrologVariables: true.
mode: movie_2_1_genre(+movie, +genre, #count).
mode: movie_2_1_genre(+movie, #genre, #count).
mode: movie_2_1_gender(+movie, #count).
mode: workedunder_2_1_genre(+person, +genre, #count).
mode: workedunder_2_1_genre(+person, #genre, #count).
mode: workedunder_1_1_gender(+person, #count).
mode: movie_1(+person, #count).
mode: movie_2(+movie, #count).
mode: workedunder_1(+person, #count).
mode: workedunder_2(+person, #count).
precompute:
movie_2_1_genre(M, G, C) :- movie(M,P1), genre(P1,G), all(P, movie(M, P)^genre(P,G), AllP), C is length(AllP).
precompute:
movie_2_1_gender(M, C) :- movie(M,P1), female_gender(P1), all(P, movie(M, P)^female_gender(P), AllP), C is length(AllP).
precompute:
workedunder_2_1_genre(M, G, C) :- workedunder(M,P1), genre(P1,G), all(P, workedunder(M, P)^genre(P,G), AllP), C is length(AllP).
precompute:
workedunder_1_1_gender(M, C) :- workedunder(P1,M), female_gender(P1), all(P, workedunder(P, M)^female_gender(P), AllP), C is length(AllP).
precompute:
movie_1(P,C) :- movie(M,P), all(M, movie(M,P), AllM), C is length(AllM).
precompute:
movie_2(M,C) :- movie(M,P), all(P, movie(M,P), AllM), C is length(AllM).
precompute:
workedunder_1(D, C) :- workedunder(A,D), all(A, workedunder(A,D), AllA), C is length(AllA).
precompute:
workedunder_2(A, C) :- workedunder(A,D), all(D, workedunder(A,D), AllD), C is length(AllD).
```
