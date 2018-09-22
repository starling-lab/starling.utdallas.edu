---
layout: single
classes: wide
title: "Lifted Continuous Inference"
category: "efficient-starai"
permalink: /projects/lifted-continuous-inference/
excerpt: ""
header:
  teaser: http://placehold.it/350x250
sidebar:
  - title: "People Involved"
    image: http://placehold.it/350x250
    text: "Yuqiao Chen"
  - title: "Collaborators"
    text: "**Prof. Nicholas Ruozzi** <br> *University of Texas at Dallas*"
---

Continuous values are common in the real world, but in traditional graphical model, inference with continuous variable may require computing integals of potential functions without a tractable closed form. Because of this, lots of works about inference in continuous domains limit the potential to some special exponential family, which cannot fully represent the complexity of the real world. Some other works focus on using sampling-based methods for inference. These methods are powerful in the domain with both continuous and discrete values (Hybrid Model), but they are too computation-expensive to be applied to real-word applications when a large number of variables are involved.

In our work, we are working to combine continuous inference with lifted inference to improve the efficiency so that it can be applied into real-word tasks such as early detection of Alzheimer's Disease through doing inference on brain fMRI features.

### Publications
* Kristian Kersting, Babak Ahmadi, Sriraam Natarajan. ["Counting Lifted Belief Propagation"](http://utdallas.edu/~sriraam.natarajan/Papers/cbp.pdf) , International Conference on Uncertainty in AI (UAI) 2009.
