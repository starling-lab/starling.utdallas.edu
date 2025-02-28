---
layout: single
title:  'Saurabh Mathur: "Knowledge Intensive Learning of Cutset Networks"'
date:   2023-05-08 15:46:00 -0600
categories: research-highlights
author: Saurabh Mathur
---

Cutset networks are a class of probabilistic generative models that can efficiently reason about relationships between variables, making them ideal for tasks such as clinical reasoning. However, the dearth of clinical data makes learning these models challenging. [In this work,](https://starling.utdallas.edu/assets/pdfs/mathur_uai_23.pdf) we exploit clinical domain knowledge to learn cutset networks from small datasets. Specifically, we use knowledge about monotonicities between pairs of variables (e.g., risk of heart disease increases with increase in age) to learn the structure and the parameters of cutset networks. Our experiments on demonstrate that cutset networks learned using knowledge are more concise and answer queries more accurately than ones learned purely from data. Since cutset networks are interpretable, the learned models can help domain experts understand relations between risk factors for medical conditions such as Gestation Diabetes.
