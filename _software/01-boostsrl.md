---
layout: splash
permalink: /software/boostsrl/
title: 'BoostSRL: "Boosting for Statistical Relational Learning"'
author: Sriraam Natarajan
excerpt: 'BoostSRL (Boosting for Statistical Relational Models) is a gradient-boosting based approach to learning different types of SRL models.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=boost-starai&repo=BoostSRL&type=star&count=true&size=large" frameborder="0" scrolling="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=boost-starai&repo=BoostSRL&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  cta_label: '<i class="fas fa-download"></i> Install Now'
  cta_url: "https://github.com/boost-starai/BoostSRL/releases"
  caption: 'Copyright © 2016-2018 AI Conflux Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

Developed by [Jude Shavlik](http://pages.cs.wisc.edu/~shavlik/), [Tushar Khot](http://pages.cs.wisc.edu/~tushar/), [Sriraam Natarajan](http://utdallas.edu/~sxn177430/), and [members of the StARLinG Lab](/people/).

As with the standard gradient-boosting approach, our approach turns the model-learning problem to learning a sequence of regression models. The key difference to the standard approaches is that we learn relational regression models (i.e. regression models that operate on relational data). We assume the data to be in predicate-logic format and the output are essentially first-order regression trees where the inner nodes contain conjunctions of logical predicates.

| Latest Release | License | Wiki |
| :---: | :---: | :---: |
| [![release img]][release] | [![license img]][license] | [Documentation](/software/boostsrl/wiki/){: .btn .btn--info .btn--large} |



## Getting Started

**Prerequisites**:

* Java (tested with *openjdk 1.8.0_144*)

**Installation**:

* Download stable jar file.  
* Download stable source with git.  
  `git clone -b master https://github.com/boost-starai/BoostSRL.git`
* Nightly builds with git.  
  `git clone -b development https://github.com/boost-starai/BoostSRL.git`

## Basic Usage

<img src="https://raw.githubusercontent.com/boost-starai/BoostSRL-Misc/master/Images/basicFileStructure.png" alt="Basic file structure for the Cora dataset which BoostSRL assumes for most operations." width="558" display="block" margin="auto">

BoostSRL assumes that data are contained in files with data structured in predicate-logic format.

*Positive Examples:*

    father(harrypotter,jamespotter).
	father(ginnyweasley,arthurweasley).
	father(ronweasley,arthurweasley).
	...

*Negative Examples:*

	father(harrypotter,mollyweasley).
	father(harrypotter,lilypotter).
	father(harrypotter,ronweasley).
	...

*Facts:*

	male(harrypotter).
	male(jamespotter).
	siblingof(ronweasley,fredweasley).
	siblingof(ronweasley,georgeweasley).
	childof(jamespotter,harrypotter).
	childof(lilypotter,harrypotter).
	...

*Learning a Relational Dependency Network:*

    [~/BoostSRL/]$ java -jar v1-0.jar -l -train train/ -target father -trees 10

*Inference with the Relational Dependency Network:*

    [~/BoostSRL/]$ java -jar v1-0.jar -i -model train/models/ -test test/ -target father -trees 10

## Acknowledgements

We would like to thank our users, our supporters, and Professor Natarajan.

[license]:https://github.com/boost-starai/BoostSRL/blob/master/license.txt
[release]:https://github.com/boost-starai/BoostSRL/releases
[license img]:https://img.shields.io/github/license/boost-starai/BoostSRL.svg
[release img]:https://img.shields.io/github/tag/boost-starai/BoostSRL.svg
