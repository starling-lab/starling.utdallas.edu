---
layout: splash
permalink: /software/KiGB/
title: 'KiGB'
author: ['Harsha Kokel', 'Phillip Odom', 'Shuo Yang', 'Sriraam Natarajan']
excerpt: 'Knowledge-intensive Gradient Boosting : A unified framework for gradient boosted decision trees from knowledge and data. <br/><br />{::nomarkdown}  <a href="https://github.com/starling-lab/KiGB" class="btn btn--light-outline btn--large"><i class="fab fa-github"></i> View Source</a> <a href="/papers/KiGB/" class="btn btn--light-outline btn--large"><i class="fas fa-blog"></i> Blog</a> <a href="https://personal.utdallas.edu/~hkokel/pdf/Kokel_AAAI20.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-pdf"></i> Paper</a> <a href="https://personal.utdallas.edu/~hkokel/pdf/KokelAAAI2020poster.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-image"></i> Poster</a> {:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash_img/splash1.png  
---



KiGB is a unified framework for learning gradient boosted decision trees for regression and classification tasks while leveraging human advice for achieving better performance


This package contains two implementation of Knowledge-intensive Gradient Boosting framework:
- with Gradient Boosted Decision Tree of [Scikit-learn](https://scikit-learn.org) ( SKiGB )
- with Gradient Boosted Decision Tree of [LightGBM](https://github.com/microsoft/LightGBM) ( LKiGB )

Both these implementations are done in python.

## Basic Usage

```python
'''Step 1: Import the class'''
from core.lgbm.lkigb import LKiGB as KiGB

'''Step 2: Import dataset'''
train_data = pd.read_csv('train.csv')
X_train = train_data.drop('target', axis=1)
Y_train = train_data['target']

'''Step 3: Provide monotonic influence information'''
advice  = np.array([1,0,1,1-1], dtype=int)
# 0 for features with no influence, +1 for features with isotonic influence, -1 for antitonic influences

'''Step 4: Train the model'''
kigb = KiGB(lamda=1, epsilon=0.1, advice=advice, objective='regression', trees=30)
kigb.fit(X_train, y_train)

'''Step 5: Test the model'''
kigb.predict(X_test)
```

To use Scikit version of KiGB, import `from core.scikit.skigb import SKiGB`



## Citation

If you build on this code or the ideas of this paper, please use the following citation.

    @inproceedings{kokelaaai20,
      author = {Harsha Kokel and Phillip Odom and Shuo Yang and Sriraam Natarajan},
      title  = {A Unified Framework for Knowledge Intensive Gradient Boosting: Leveraging Human Experts for Noisy Sparse Domains},
      booktitle = {AAAI},
      year   = {2020}
    }


## Acknowledgements

* Harsha Kokel and Sriraam Natarajan acknowledge the support of Turvo Inc. and CwC Program Contract W911NF-15-1-0461 with the US Defense Advanced Research Projects Agency (DARPA)
and the Army Research Office (ARO).
