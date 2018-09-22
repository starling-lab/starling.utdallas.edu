---
layout: single
classes: wide
title: "Survey data"
category: "precision-health"
permalink: /projects/survey-data/
excerpt: ""
header:
  teaser: http://placehold.it/350x250
sidebar:
  - title: "People Involved"
    image: http://placehold.it/350x250
    text: "Shuo Yang <br>
Srijita Das <br>
Nandini Ramanan
"

---


Survey data can be a rich source of information about non-clinical risk factors that could potentially have a considerable influence on the medical condition to be predicted. We aim to analyze and identify how these non-clinical risk factors interact and potentially influence the underlying condition to enable not just efficient diagnosis, but also treatment planning and behavior modification, ultimately leading to a positive impact on public health. We in our lab adapted the gradient boosting framework to learn from these non-clinical factors that are identified as useful in diagnosis of Post Partum Depression and Rare Disease. Empirical evaluation demonstrates the superiority of our proposed approach over existing machine learnings methods. To this account we also extended our approach to learn interpretable models. We developed a novel hybrid Bayesian network learning algorithm that can effectively learn Bayesian networks (possibly causal) from these survey data. Our approach scales to a large number of variables by learning an approximate joint distribution using dependency networks. This DN is turned into a BN by pruning edges as a result of mutual independency tests. We demonstrated, in two real-world problems, of predicting rare diseases and PPD from survey data, that our proposed algorithm learns interpretable and meaningful models.

### Publications:

* Haley MacLeod, Shuo Yang, Kim Oakes, Kay Connelly and Sriraam Natarajan, ["Identifying Rare Diseases from Behavioural Data:A Machine Learning Approach"](http://utdallas.edu/~sxn177430/Papers/chase-machinelearning.pdf), First IEEE Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE), 2016.
* Sriraam Natarajan, Annu Prabhakar, Nandini Ramanan, Anna Bagilone, Katie Siek, and Kay Connelly, ["Boosting for Post Partum Depression Prediction"](http://utdallas.edu/~sxn177430/Papers/PPDCHASE17.pdf), IEEE Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE), 2017.
* Sriraam Natarajan, Srijita Das, Nandini Ramaman, Gautam Kunapuli and Predrag Radivojac, ["Whom Should I Perform the Lab Test on Next? An Active Feature Elicitation Approach"](http://utdallas.edu/~sxn177430/Papers/AFE_IJCAI18.pdf), International Joint Conference on AI (IJCAI) 2018.
