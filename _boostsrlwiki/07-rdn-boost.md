---
title: "Relational Dependency Networks (RDNs)"
author: Sriraam Natarajan
permalink: /softwares/boostsrl/wiki/rdn-boost/
excerpt: "Overview of RDNs and how they can be learned with BoostSRL."
---

Relational Dependency Networks (RDNs) are graphical models that extend dependency networks to relational domains where the joint probability distribution over the variables is approximated as a product of conditional distributions. This higher expressivity, however, comes at the expense of of a more complex model-selection problem: an unbounded number of relational abstraction levels might need to be explored. 

Whereas current learning approaches for RDNs learn a single probability tree per random variable, RDN-Boost learns a series of relational function-approximation problems using gradient-based boosting In doing so, one can easily induce highly complex features over several iterations and in turn estimate quickly a very expressive model. 

By default, if multiple target predicates are provided, the code learns a relational dependency network.

The software provided here can also learn a single relational probability tree with -noBoost flag though the main contribution is the functional gradient boosting of RDNs. 

For more details on learning RDN please refer to

> Sriraam Natarajan, Tushar Khot, Kristian Kersting, Bernd Gutmann and Jude Shavlik. Gradient-based Boosting for Statistical Relational Learning: The Relational Dependency Network Case, Special issue of Machine Learning Journal (MLJ), Volume 86, Number 1, 25-56, 2012.
