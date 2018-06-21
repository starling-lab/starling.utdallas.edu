---
title: "Basic Parameters"
author: Tushar Khot
permalink: /software/boostsrl/wiki/basic-parameters/
excerpt: "Basic overview for commandline arguments used by BoostSRL."
---

*Note that this is for learning an RDN. The basic version boosts a single conditional relational probability distribution.*

### Simple Usage:

* `java -cp BoostSRL.jar edu.wisc.cs.Boosting.RDN.RunBoostedRDN [Args]`
* `java -jar BoostSRL.jar [Args]`

### Arguments [Args]:

* `-l` : enable training (learning).
* `-i` : enable testing (inference).
* `-noBoost` : disable Boosting (i.e., learns a single relational regression tree).
* `-train <Training directory>` : Path to the training directory in predicate logic format.
* `-test <Testing directory>` : Path to the testing directory in predicate logic format format.
* `-model <Model directory>` : Path to the directory with the stored models [or where they will be stored].

  Default location: "Training directory"/models

* `-target <target predicates>` : Comma separated list of predicates to be learned/inferred.
* `-trees <Number of trees>` : Number of Boosting trees.

  Default: 20. Ignored if `-noBoost` is set.

* `-step <Step Length>` : Default step length for functional gradient.

  Default: 1.

* `-modelSuffix <suffix>` : All the trees/models are saved with this suffix appended to the file names.
* `-aucJarPath <path to auc.jar>` : If this is not set, AUC values are not computed.
* `-testNegPosRatio <Negative/Positive ratio>` : Ratio of negatives to positive for testing.

  Default: 2. Set to -1 to disable sampling.  

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

---

### Sample Calls:

*Try to follow along with what each of these are doing:*

From the [Getting Started](../getting-started/) tutorial:

* `java -jar BoostSRL.jar -l -combine -train train/ -target father -trees 10`

* `java -jar BoostSRL.jar -i -model train/models -test test/ -target father -trees 10`

From the [Boston Housing Dataset](/datasets/boston-housing/) (notice the different classpath):

* `java -cp BoostSRL.jar edu.wisc.cs.will.Boosting.Regression.RunBoostedRegressionTrees -reg -l -train train/ -target medv -trees 20`

From the [CiteSeer Dataset](/datasets/citeseer/):

* `java -jar BoostSRL.jar -l -train train/ -target infield_fauthor,infield_ftitle,infield_fvenue -trees 5`

<button class="btn btn--primary btn--large" onclick="topOfPage()">Table of Contents</button>

<script>
function topOfPage() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}
</script>
