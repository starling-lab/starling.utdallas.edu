---
layout: single
title: "Efficient StaRAI"
permalink: /projects/efficientstarai/
excerpt: "We explore multiple research questions/ideas in the context of efficient StaRAI, including, but not limited to, boosted models, scalability , lifted inference/learning for deep/shallow architectures as well as sequential decision making."
---


# Efficient StaRAI
1. [Boosting](#boost)
2. [Scaling](#scaling)
3. [Lifted continuous inference](#lci)
4. [Lifted deep models](#ldm)
5. [Lifted/Relational RL](#lRL)


<a name ="boost"></a>
## 1. Boosting

### People Involved:

### About:

### Sample Publications



<a name ="scaling"></a>
## 2. Scaling

### People Involved:
* Mayukh Das
* Devendra Singh Dhami
### About:
We develop methodologies for fast approximate counting for scalable Statistical Relational AI.
In the age of 'Big Data', *scalability* is one of the key challenges both for learning and (lifted) inference in the context of Statistical Relational models. A major bottleneck towards scalable SRL is **counting** - computing the number of satisfied instances of complex features (# satisfied groundings of First-Order Logic formulas). It is a key operation in SRL (be it for computing the coverage in structure search, for likelihood estimation in parameter learning or for computing cluster size in lifted inference) and is hard, specifically *#P-complete*, which poses increasingly greater challenges with large scale databases. However, exact computation of  counts are inconsequential in context of large/dense data sets. *(Example: There will not be any significant change in the popularity of a professor based on whether the papers (s)he has published has 400 or 419 citations)*
Thus, we develop performance-preserving **approximation strategies** for such counts, paving the way for scalable and efficient SRL. 
### Sample Publications
* Das, M., Wu, Y., Khot, T., Kersting, K. & Natarajan, S., ["Scaling Lifted Probabilistic Inference and Learning Via Graph Databases"](https://starling.utdallas.edu/assets/pdfs/ApproxCounting.pdf), SIAM International Conference on Data Mining (SDM) 2016.


<a name ="lci"></a>
## 3. Lifted Continuous Inference

### People Involved:

### About:

### Sample Publications



<a name ="ldm"></a>
## 4. Lifted Deep Models

### People Involved: 
* Navdeep Kaur
* Changbin Li
### About:
Relational Connectionist Models bring together the complementary strengths of scalability and explainability. Moreover, considering relational aspect of data allows us to handle data in its natural form. In past, we have considered learning Boltzmann machines for relational data; specifically generating features from lifted random walks that form the observed features of Boltzmann machines and produce efficient models which was tested on six relational datasets.

Presently we are proposing a new lifted connectionist model that learns with the help of parameter tying and combining rules. This work is ongoing. Further, as another project, we are proposing a graph neural network for relational data that can learn in the presence of minimal labels provided to it.

### Sample Publications
Navdeep Kaur, Gautam Kunapuli, Tushar Khot, William Cohen, Kristian Kersting and Sriraam Natarajan, [“Relational Restricted Boltzmann Machines: A Probabilistic Logic Learning Approach”](https://ilp2017.sciencesconf.org/data/pages/ILP_2017_paper_9.pdf), ILP 2017.


<a name ="lRL"></a>
## 5. Lifted/Relational Reinforcement Learning

### People Involved:

### About:

### Sample Publications
