---
title: "Cost-sensitive Statistical Relational Learning"
author: Shuo Yang
permalink: /softwares/boostsrl/wiki/cost-sensitive-srl/
excerpt: "Learning cost-sensitive models with BoostSRL."
---

### Overview

**Cost-sensitive Statistical Relational learning (CSSRL)** fulfills the cost-sensitive learning for both standard machine learning domains as well as the statistical relational learning problems.
 
You may want to consider trying this package if you have one of the following problems:

  * You have structured data where class-imbalance is a prominent problem for statistical relational learning or standard data sets which are class imbalanced by nature, such as medical diagnosis, text classification, and detection of oil spills or financial fraud.

  * You have practical concerns on the false prediction costs based on the domain requirements. For example, the medical diagnosis where the cost for false negative prediction is much more than that of the false positive prediction, or recommender systems where the cost for false positive prediction needs to be decreased in order to avoid losing users by sending out numerous inappropriate recommendations.

  * You need to put different weights on positive and negative examples due to the data properties. For example, when you know there are considerable amount of noisy samples in negative class and you do not want the classifier boundary to be dominated by those outliers.

If you need more details about this approach, please refer the paper on this topic:

> Shuo Yang, Tushar Khot, Kristian Kersting, Gautam Kunapuli, Kris Hauser and Sriraam Natarajan, Learning from Imbalanced Data in Relational Domains: A Soft Margin Approach, International Conference on Data Mining (ICDM), 2014. 

---

### CSSRL Parameters

CSSRL allows you to incorporate the domain knowledge on different weights of positive samples and negative samples by explicit tuning the trade-off between false positive rate and false negative rate. All you need to do is set the parameters alpha and beta which should be set positive values if harsher penalty is needed for the corresponding class, negative values if more tolerance is needed for the corresponding class and zero if there is no special requirements on that class.  

1. `-softm` should be set to activate the CSSRL learning.

2. `-alpha` should be set to assign the weight on false negative examples.

3. `-beta` should be set to assign the weight on false positive examples.

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
