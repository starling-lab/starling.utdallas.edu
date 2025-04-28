---
layout: splash
permalink: /papers/Human-Allied-PCs/
title: "A Unified framework for Human-Allied learning of Probabilistic Circuits"
category: HAAI
author: ['Saurabh Mathur']
excerpt: 'Athresh Karanam, Saurabh Mathur, Sahil Sidheekh, and Sriraam Natarajan<br/><br />{::nomarkdown}  <a href="https://github.com/athresh/unified-constraints-pc" class="btn btn--light-outline btn--large"><i class="fas fa-code"></i> Code</a>  <a href="https://arxiv.org/abs/2405.02413" class="btn btn--light-outline btn--large"><i class="fas fa-file-pdf"></i> Paper</a>  <a href="/assets/pdfs/AAAI25_HAPC_Poster.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-image"></i> Poster</a> {:/nomarkdown}'
header:
  image: /assets/images/project/human-allied-pcs/hapc.jpg
  teaser: /assets/images/project/human-allied-pcs/hapc.jpg
  overlay_color: SteelBlue
redirect_from:
  - /projects/Human-Allied-PCs/
---


<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$']]},
    extensions: [
      "MathMenu.js",
      "MathZoom.js",
      "AssistiveMML.js",
      "a11y/accessibility-menu.js"
    ],
    jax: ["input/TeX", "output/CommonHTML"],
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ]
    }
  });
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

## Quick Overview
Accepted at the 39th Annual AAAI Conference on Artificial Intelligence (AAAI) 2025.

In this work, (1) We propose a unified framework for representing domain knowledge in terms of probabilistic constraints that subsumes existing methods; we demonstrate six particular instantiations of these constraints. (2) We propose an augmented objective function for exploiting multiple forms of domain knowledge in the learning of tractable probabilistic models.This objective function can be optimized through generic parameter learning algorithms used from these models. (3) We experimentally validate the added utility of our approach on several benchmark and real-world scenarios where data is limited but knowledge is abundant.

## Probabilistic Generative Models
Probabilistic generative models such as Bayesian networks are a powerful framework for representing and reasoning about hypotheses regarding relationships between variables. This makes them well-suited for complex domains like healthcare where understanding these relationships is crucial for effective clinical decision-making. Understanding these relationships using a probabilistic generative model involves probabilistic inference — which is intractable in general.


<div align="center" >
    <div style="float:center;">
        <img src="/assets/images/project/human-allied-pcs/background_fig.png"  width="720"  />
        <p style="text-align:center;">A <b>Bayesian network</b> (left) over three variables - Age, Education level, and risk of preterm birth, a <b> Probabilistic circuit </b> (middle) over the same domain, and <b>domain knowledge</b> (right) in the form of context-specific independence. </p>
    </div>
</div>  
<br>  

  <br>
  <br>

## Tractable Probabilistic Modeling using Probabilistic circuits
Probabilistic circuits are a class of probabilistic models that have emerged as an effective solution to this problem of efficient probabilistic inference. These models represent the joint distribution over their variables using computational graphs, allowing them to exploit the power of deep learning while maintaining probabilistic semantics. Constructing these models, however, is challenging since complex, real-world domains like healthcare often suffer from a scarcity of data. As a result, effective learning requires combining information from small data sets with diverse forms of domain knowledge. 

## A unified framework for human-allied learning of PCs
To address this challenge of constructing tractable probabilistic generative models from small data sets by exploiting multiple forms of domain knowledge, we propose a unified framework for human-allied learning of probabilistic circuits. Our framework can accommodate diverse forms of domain knowledge as long as its violation can be measured by a differentiable function.This includes high-level information about the relationship betweens pairs of variables like monotonicity and independence, and generalization constraints like symmetry and exchangeability, and predictive modeling-related constraints like class-imbalance tradeoff.

Our approach to learning uses domain knowledge as soft constraints and is frustratingly simple – we encode domain knowledge in terms of its violation and use the violation as a regularization term. This results in an optimization problem of the following form:

$$
\underset{\theta}{\arg \max} \underbrace{\mathcal{L}(\langle \mathcal{G}, \theta \rangle, \mathcal{D})}_{\text {log-likelihood of data under PC}}-\lambda\underbrace{\zeta(\langle \mathcal{G}, \theta \rangle, \mathcal{K})}_{\text {knowledge-based penalty}}
$$

To enforce domain knowledge as hard constraints, we propose an iterative procedure to that gradually increases the weight of the knowledge-based penalty. 






## Empirical Evaluation

We evaluated our approach on a wide range of domains including synthetic tabular data sampled from Bayesian networks, medical data sets from the UCI Machine Learning repository, MNIST images, complex manifolds, and a real clinical domain focused on adverse pregrancy outcomes (numom2b). Our experiments demonstrate the efficacy of our framework in constructing probabilistic circuit models by integrating patterns learned from data with multiple forms of domain knowledge.

<div align="center" >
    <div style="float:center;">
        <img src="/assets/images/project/human-allied-pcs/results_1.png"  width="450"  />
        <p style="text-align:center;">Generative performance of PCs learned from data and multiple forms of domain knowledge using our framework; we quantify performance using average test-set log-likelihood scores. PCs learned by exploiting multiple forms of knowledge (context-specific independence and monotonicity) outperform those restricted to only one form of knowledge (context-specific independence) and purely-data driven ones. </p>
    </div>
</div>  

<div align="center" >
    <div style="float:center;">
        <img src="/assets/images/project/human-allied-pcs/results_2.png"  width="450"  />
        <p style="text-align:center;">Images sampled from PCs learned from a modified version of MNIST digits data set. Instead of representing images of digits as grids of pixel intensity values, this data set represents them as point clouds. These point clouds exhibit permutation invariance – a symmetry difficult to model even for advanced generative models such as Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs). The figure on the left shows images sampled from a PC learned purely from data while the figure on the right shows images sampled from a PC learned by exploiting domain knowledge about symmetries in the point cloud.</p>
    </div>
</div>  




## Citation

If you build on this code or the ideas of this paper, please use the following citation.
    
    @inproceedings{karanam2024unified,
        title = {A Unified Framework for Human-Allied Learning of Probabilistic Circuits},
        author = {Karanam, Athresh and Mathur, Saurabh and Sidheekh, Sahil and Natarajan, Sriraam},
        booktitle = {The 39th Annual AAAI Conference on Artificial Intelligence (AAAI)},
        year = {2025}
    }




## Acknowledgements

* The authors gratefully acknowledge the generous support by the NIH grant R01HD101246, the AFOSR award FA9550-23-1-0239, the ARO award W911NF2010224, and the DARPA Assured Neuro Symbolic Learning and Reasoning (ANSR) award HR001122S0039.
