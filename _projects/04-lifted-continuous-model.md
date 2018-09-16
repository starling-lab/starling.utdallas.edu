---
layout: single
title: "Lifted Continuous Model"
permalink: /projects/lifted-continuous-model/
excerpt: "Method that will group similar node together and do continuous inference on the lifted graph, thus the method can be applied to larger dataset."
---

## People Involved

* Yuqiao Chen

Continuous values are common in the real world, but in traditional graphical model, inference with continuous variable may requires to compute integal of potential functions without tractable close form. Because of this, lots of works about inference in continuous domain limits the potential to some special exponential family, which cannot fully represent the complexity of real world. Some other works focus on using sampling based method for inference. These method are powerful in the domain with both continuous and discrete values (Hybrid Model), but they are too computation-expensive to be applied to real word application when large number of variables are involved.

In our work, we are trying to combine continuous inference with lifted inference to improve the efficiency so that it can be applied into real word task such as early detection of Alzehmer's Disease through doing inference on brain fMRI features.

## References

* Kersting, K., Ahmadi, B., & Natarajan, S., [Counting Lifted Belief Propagation](https://alchemy.cs.washington.edu/papers/pdfs/kersting-al09.pdf), International Conference on Uncertainty in AI (UAI) 2009.
* Kristian Kersting. 2012. [Lifted probabilistic inference](http://first-mm.informatik.uni-freiburg.de/files/kersting2012ecai_faia.pdf). In Proceedings of the 20th European Conference on Artificial Intelligence (ECAI'12).
* Jaesik Choi, Eyal Amir, and David J. Hill. 2010. [Lifted inference for relational continuous models](https://event.cwi.nl/uai2010/papers/UAI2010_0079.pdf). In Proceedings of the 6th AAAI Conference on Statistical Relational Artificial Intelligence (AAAIWS'10-06). AAAI Press 13-18.
* Erik B. Sudderth, Alexander T. Ihler, Michael Isard, William T. Freeman, and Alan S. Willsky. 2010. [Nonparametric belief propagation](http://ssg.mit.edu/nbp/papers/cvpr03.pdf). Commun. ACM 53, 10 (October 2010), 95-103.
* Alexander T. Ihler and David A. McAllester. [Particle belief propagation](https://pdfs.semanticscholar.org/be52/2b149aab5b672fd949326dcb3da817b3982b.pdf). In Proc. 12th AISTATS, pages 256–263, 2009.
* D. Poole. [First-Order Probabilistic Inference](https://www.ijcai.org/Proceedings/03/Papers/142.pdf). In Proc. of the 18th International Joint Conference on Artificial Intelligence (IJCAI-05), pages 985–991, 2003.
* P. Singla and P. Domingos. [Lifted First-Order Belief Propagation](https://homes.cs.washington.edu/~pedrod/papers/aaai08a.pdf). In Proc. of the 23rd AAAI Conf. on Artificial Intelligence (AAAI-08), pages 1094–1099, Chicago, IL, USA, July 13-17 2008.
