---
title: "Markov Logic Networks (MLNs)"
author: Sriraam Natarajan
permalink: /software/boostsrl/wiki/mln-boost/
excerpt: "Overview of Markov Logic Networks and how to learn them with BoostSRL."
---

### Overview

Markov Logic Networks (Richardson and Domingos 2006) are arguably one of the most popular relational probabilistic models. They lifted undirected Markov networks to relational setting. Hence, by design, they are intractable.

In our paper, we convert the problem of learning a MLN to learning a series of RDNs. In essence, this is very similar to our RDN learning with one key difference. In RDNs, when grounding a clause, we use existential semantics i.e., if the clause has at least one grounding, then we treat that clause as true. However, for MLNs, we count the number of groundings of that clause. For more details, please refer to the paper below.

We have also implemented an approximate, fast counting method for MLNs. See the section on Approximate counting to set the appropriate flags.

-mln : Set this flag, if you want to learn MLNs instead of RDNs 

-mlnClause : Set this flag, if you want to learn MLNs via clausal representation. If not set, the tree representation will be used. 

-numMLNClause : If -mlnclause is set, set the number of clauses learned during each gradient step. 

-mlnClauseLen : If -mlnclause is set, set the length of the clauses learned during each gradient step. 



Paper:

> Tushar Khot, Sriraam Natarajan, Kristian Kersting, Jude Shavlik.Learning Markov Logic Networks via Functional Gradient Boosting. In ICDM 2011. 
