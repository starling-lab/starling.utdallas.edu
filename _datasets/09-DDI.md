---
author: Devendra Dhami
title: "Drug-Drug Interactions"
permalink: /datasets/ddi/
date: 2018-02-26
excerpt: "Using 5 heterogeneous similarity measures to predict drug-drug interactions."
---

### Overview

The data consists of 5 similarity matrices used for the problem of drug-drug interaction prediction. These 5 similarity matrices are:
1.	Reachability: Concisely, this similarity measure defines how many paths exist between two drugs in a directed graph of known chemical reactions between drugs and enzymes, drugs and transporters and drugs and targets. The directed graph is obtained by applying the path ranking algorithm [1] on a knowledge graph constructed from the ADMET features of the drugs, which are obtained from the DrugBank database. The directed graph consists of parameterized guided random walks which are sequences of relations with shared arguments, where the arguments are entity classes starting and ending in the drug entity. Thus, there can be multiple paths that exist between two drugs based on the various random walks and the reachability similarity matrix consists of the counts i.e. the number of paths that exist between two drugs.
The other 4 similarity matrices are derived from SMILES strings which are textual representations of the molecular structure of the drugs.
2.	Molecular Feature Similarity: compares the chemical properties of two drugs using 19 features extracted from their SMILES strings. While extracting these features, it was made sure that they affect the chemical reactiveness of a molecule. Some of these features include, number of valence electrons, number of aromatic rings and number of hydrogen donors and receptors. The similarity measure is constructed by using the Jaccardian distance between the calculated features.
3.	SMILES String Similarity: is the textual similarity between the SMILES strings calculated using edit distance.
4.	Molecular Fingerprint similarity: Fingerprints are bit-string representations of the molecular structure of the drugs. A similarity score between the fingerprints of each pair of drugs is generated using the python rdkit[2] package.
5.	MACCS fingerprint similarity: are 166 bit structural key descriptors in which each bit is associated with a SMARTS[3] pattern.

All the similarity matrices are symmetric in nature and the data consists of 196 drugs (thus 196x196 sized matrices). Since every drug can react with all the other drugs except itself, 196 drugs correspond to (196*195)/2 = 19110 possible interactions. Since the data is symmetric, only the upper(lower) half of the similarity matrices should be used.

---

### Download

Download: [DDI_data_196_drugs.zip](https://github.com/boost-starai/BoostSRL-Misc/blob/master/Propositional-Datasets/DDI_data_196_drugs.zip?raw=true) (232 KB)
The dataset consists of the 5 similarity measures, the true labels of the drug pairs and the name of the drugs involved.

* `md5sum`:
  <p style="word-break: break-all;">884b32402f8a8519209b8bdc0e305c9e</p>

* `sha256sum`:
  <p style="word-break: break-all;">c6c7f9e51674af870e63be157eacc7b54d1c954acfc7d30a179f7a54c85fa51e</p>

---


References:

[1] Lao, Ni, and William W. Cohen. "Relational retrieval using a combination of path-constrained random walks." Machine learning 2010

[2] http://www.rdkit.org/

[3] http://www.daylight.com/dayhtml/doc/theory/theory.smarts.html
