---
layout: splash
permalink: /projects/Credibility-MultimodalFusion/
title: "Credibility-Aware Multi-Modal Fusion Using Probabilistic Circuits"
category: "HAAI"
author: ['Saurabh Mathur']
excerpt: 'Sahil Sidheekh, Pranuthi Tenali, Saurabh Mathur, Erik Blasch, Kristian Kersting and Sriraam Natarajan<br/><br />{::nomarkdown}  <a href="https://github.com/Pranuthi23/Credibility_MultimodalData" class="btn btn--light-outline btn--large"><i class="fas fa-code"></i> Code</a>  <a href="/assets/pdfs/AIStats_Credibility_MMF.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-pdf"></i> Paper</a>  <a href="/assets/pdfs/poster-credibility.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-image"></i> Poster</a> {:/nomarkdown}'
header:
  image: /assets/images/project/Credibility-MMF/architecture.png
  teaser: /assets/images/project/Credibility-MMF/architecture.png
  overlay_color: SteelBlue
redirect_from:
  - /projects/Credibility-MultimodalFusion/
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
Accepted at the 28th International Conference on Artificial Intelligence and Statistics (AISTATS) 2025.

In this work, (1) we introduce a principled probabilistic approach for fusing information from multiple modalities of varying reliability, (2) we derive a theoretically sound measure of credibility and illustrate its connection to the conditional entropy over unimodal predictive distributions, allowing for reliable late fusion; (3) we present two versions of our late/decision fusion algorithm based with different domain characteristics, and (4) we experimentally validate the efficacy of our approach in modeling complex interactions between modalities and faithfully estimating their credibility.

## Multimodal fusion
Decision-making in many real-world domains, such as healthcare, requires reliable learning and reasoning from diverse modalities of available data sources. Although multimodal data offer rich representations and multiple views of underlying phenomena (e.g., MRIs, EHRs, and, blood tests in clinical settings), they can present significant challenges for learning and inference due to the heterogeneity of the data from these diverse views. Additionally, raw data from different sources is often noisy, incomplete, and inconsistent, thus posing a significant obstacle to effective decision-making. Multimodal fusion methods have emerged as a promising direction to integrate such complementary information from different modalities to achieve better performance and reliability in discriminative learning tasks. In this work, we focus on the late or decision fusion setting; here, predictions (or decisions) are made by models from each modality separately and then fused using a combination function.



## Assessing an information source's reliability based on the credibility of its information
Combining prediction from multiple, heterogeneous information sources requires late fusion systems to account for each source's reliability. While reliability is a broad notion, we define it with respect to its consistency. Specifically, we consider a source reliable if it provides us credible information. While human experts might estimate their information's credibility (self-confidence), automated sources require external evaluation.

To automatically assess information credibility, we define the credibility of a modality in predicting a target as the difference between the target’s conditional probability with and without observing that modality. We quantify is through the following measure:

$$ \text{Credibility}(X) = D_\text{KL}(P(Y \mid \mathbf{X}) || P(Y \mid \mathbf{X} \setminus X)  $$

This measure assigns high credibility to a modality if excluding it significantly shifts the final predictive distribution. Conversely, if the fused output barely changes, the modality contributes little information, warranting a lower credibility score.



## Efficiently inferring credibility using tractable probabilistic models
Our proposed credibility measure requires a way to compute conditionals under partial observability. To do so, we model the joint distribution over the predictions of the unimodal models and the target variable using a class of probabilistic models called probabilistic circuits. These models represent the joint probability by combining simple distributions through a computational graph; this representation allows us to compute exact conditionals under partial observability efficiently and differentiably. We use these conditionals to compute the exact credibility of each modality.

We define two combination functions using the joint distribution modeled by the PC: Direct-PC (DPC) and credibility weighted mean (CWM). While DPC directly computes the conditional over the target variables given the unimodal predictive distribution, CWM combines the unimodal predictive distributions by weighing them according to their relative credibility. Since both combination functions are differentiable, the overall model can be learned end-to-end via backpropagation.


<div align="center" >
    <div style="width: 720px; text-align: center;">
    <img src="/assets/images/project/Credibility-MMF/architecture.png" width="720" />
    <p style="font-size: 18px;">
      Model Diagram for our proposed fusion method. Each input modality $\mathbf{X}_i$ is processed by a unimodal predictor $\mathcal{M}_{\phi_i}$ to get the corresponding predictive distribution $\mathbf{p}_i$ over the target $Y$. A probabilistic circuit $\theta$ is used to model the joint distribution over the unimodal predictive distributions and $Y$, and the final prediction is obtained by running an inference routine over it, governed by the form of fusion function employed ($\mathcal{M}_{\theta}$).
    </p>
  </div>
</div>


## Empirical Evaluation

We evaluate the efficacy of our framework's credibility inference using the AV-MNIST dataset. The dataset consists of two modalities: image and audio. The target variable corresponds to the digit shown in the image and spoken in the audio. 

To do so, we construct noisy versions of the AV-MNIST dataset by introducing varying degrees of noise into one of the modalities, keeping the others fixed. The figure above shows the relative credibility assigned to each modality as the noise in one of the modality increases. The credibility is averaged over data points in the test set. In both settings, the credibility score of the noisy modality decreases as noise increases, while that of the non-noisy modality increases. 

<div align="center" >
    <div style="width: 500px; text-align: center;">
    <img src="/assets/images/project/Credibility-MMF/credibility.png" width="500" />
    <p style="font-size: 18px;">
      Mean Test Relative Credibility outputted by a PC for the two modalities of the AV-MNIST dataset across varying degrees of noise (controlled by $\lambda$) introduced into each modality.
    </p>
  </div>
</div>






## Citation

If you build on or use portions of this work, please provide credit using the following reference or BibTeX.

    @inproceedings{sidheekh2024credibility,
        title = {Credibility-aware Multi-Modal Fusion Using Probabilistic Circuits},
        author = {Sidheekh, Sahil and Tenali, Pranuthi and Mathur, Saurabh and Blasch, Erik and Kersting, Kristian and Natarajan, Sriraam},
        booktitle = {International Conference on Artificial Intelligence and Statistics},
        year = {2025}
    }




## Acknowledgements

* The authors gratefully acknowledge the generous support by AFOSR award FA9550-23-1-0239, the ARO award W911NF2010224 and the DARPA Assured Neuro Symbolic Learning and Reasoning (ANSR) award HR001122S0039.
