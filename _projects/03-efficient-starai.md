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

### Publications



<a name ="scaling"></a>
## 2. Scaling

### People Involved:
* Mayukh Das
* Devendra Singh Dhami
### About:
We develop methodologies for fast approximate counting for scalable Statistical Relational AI.
In the age of 'Big Data', *scalability* is one of the key challenges both for learning and (lifted) inference in the context of Statistical Relational models. A major bottleneck towards scalable SRL is **counting** - computing the number of satisfied instances of complex features (# satisfied groundings of First-Order Logic formulas). It is a key operation in SRL (be it for computing the coverage in structure search, for likelihood estimation in parameter learning or for computing cluster size in lifted inference) and is hard, specifically *#P-complete*, which poses increasingly greater challenges with large scale databases. However, exact computation of  counts are inconsequential in context of large/dense data sets. *(Example: There will not be any significant change in the popularity of a professor based on whether the papers (s)he has published has 400 or 419 citations)*
Thus, we develop performance-preserving **approximation strategies** for such counts, paving the way for scalable and efficient SRL. 
### Publications
* Das, M., Wu, Y., Khot, T., Kersting, K. & Natarajan, S., ["Scaling Lifted Probabilistic Inference and Learning Via Graph Databases"](https://starling.utdallas.edu/assets/pdfs/ApproxCounting.pdf), SIAM International Conference on Data Mining (SDM) 2016.


<a name ="lci"></a>
## 3. Lifted Continuous Inference

### People Involved:
* Yuqiao Chen
* Collaborator: **Prof. Nicholas Ruozzi** - University of Texas at Dallas

### About:
Continuous values are common in the real world, but in traditional graphical model, inference with continuous variable may require computing integals of potential functions without a tractable closed form. Because of this, lots of works about inference in continuous domains limit the potential to some special exponential family, which cannot fully represent the complexity of the real world. Some other works focus on using sampling-based methods for inference. These methods are powerful in the domain with both continuous and discrete values (Hybrid Model), but they are too computation-expensive to be applied to real-word applications when a large number of variables are involved.

In our work, we are working to combine continuous inference with lifted inference to improve the efficiency so that it can be applied into real-word tasks such as early detection of Alzheimer's Disease through doing inference on brain fMRI features.

### Publications
* Kristian Kersting, Babak Ahmadi, Sriraam Natarajan. ["Counting Lifted Belief Propagation"](http://utdallas.edu/~sriraam.natarajan/Papers/cbp.pdf) , International Conference on Uncertainty in AI (UAI) 2009.


<a name ="ldm"></a>
## 4. Lifted Deep Models

### People Involved: 
* Navdeep Kaur
* Changbin Li
### About:
Relational Connectionist Models bring together the complementary strengths of scalability and explainability. Moreover, considering relational aspect of data allows us to handle data in its natural form. In past, we have considered learning Boltzmann machines for relational data; specifically generating features from lifted random walks that form the observed features of Boltzmann machines and produce efficient models which was tested on six relational datasets.

Presently we are proposing a new lifted connectionist model that learns with the help of parameter tying and combining rules. This work is ongoing. Further, as another project, we are proposing a graph neural network for relational data that can learn in the presence of minimal labels provided to it.

### Publications
* Navdeep Kaur, Gautam Kunapuli, Tushar Khot, William Cohen, Kristian Kersting and Sriraam Natarajan, [“Relational Restricted Boltzmann Machines: A Probabilistic Logic Learning Approach”](https://ilp2017.sciencesconf.org/data/pages/ILP_2017_paper_9.pdf), ILP 2017.


<a name ="lRL"></a>
## 5. Lifted/Relational Reinforcement Learning

### People Involved:
* Kaushik Roy
* Srijita Das

### About:
The high level overview of this project is to build relational models for sequential decision making. The main bottleneck of approximating utility functions in decision making is that it requires sampling large number of states to reasonably approximate the function. However, most real world domains have large state space and are relational in nature. Learning rich relational representations in such domains can help in capturing useful interactions between entities and similar states can be clustered together to learn lifted relational models which can be useful and efficient utility function approximators in large state space. As part of this project, we focus on efficient relational representation learning and relational sequential decision making for hybrid domains. We also wish to combine structured symbolic representations with deep models to create powerful, efficient and interpretable deep utility function approximators. We are also working on knowledge augmented Imitation learning where the goal is to learn the demonstrator's noisy policy using advice from multiple experts.

### Publications
