---
layout: single
title: "Precision Health"
permalink: /projects/biomedicine/
excerpt: "Bioinformatics is the field of applying statistics and computer science to the field of molecular biology. Our lab focuses mainly on the subarea of pattern recognition in biomedical data."
---

# Precision Health
* [Adverse Drug-Events](#ade)
* [Alzheimer's Prediction](#alz)
* [CARDIA](#cardia)
* [Automatic Operation Notes](#aon)
* [Active elicitation of lab tests](#active)
* [Survey data](#survey)


<a name ="ade"></a>
## 1. Adverse Drug-Events

### People Involved:

* Devendra Singh Dhami
* Mayukh Das


### About:
With the increase in the number of drug discoveries and thus the data associated with each drug, detecting when these new drugs (and the old drugs) with react to something (can be other drugs, food etc.) adversely has become a very important problem inside bioinformatics. This problem of adverse drug events (ADE) is now being studied in the field of machine learning as due to the large amount of data available, it will be simpler for the machines to detect hidden patterns that might result in these ADEs.

Our previous work in this area was specifically in natural language processing (NLP) where we looked at PubMed articles and extracted relational features and constucted a model on these features. The model was supplemented by expert advice that was employed to identify text patterns in articles that might suggest the presence of an ADE(s). Recently we have focused on the problem of drug-drug interactions by looking at the molecular structure of the drugs and the interaction pathways associated with each drug. The goal is to create an adverse drug events network that can be easily minde in the future for detecting and discovering any ADEs.

### Sample Publications:

* Devendra Singh Dhami, Gautam Kunapuli, Mayukh Das, David Page and Sriraam Natarajan. *Drug-Drug Interaction Discovery: Kernel Learning from Heterogeneous Similarities.* IEEE Conference on Connected Health: Applications, Systems, and Engineering Technologies (CHASE), 2018.  
* Phillip Odom, Vishal Bangera, Tushar Khot, David Page and Sriraam Natarajan. *Extracting Adverse Drug Events from Text using Human Advice.* Artificial Intelligence in Medicine (AIME) 2015.

<a name ="alz"></a>
## 2. Alzheimer's and Parkinson's Prediction

### People Involved:

* Devendra Singh Dhami
* Yuqaio Chen


### About:
Progressive neurological diseases are untreatable and thus the only way of preventing these disease is to detect them early. This early detection is difficult too since the signs of these disease can show up very late in any lab reports, MRIs and/or behaviour of the patient. The presence of large scale studies and databases such as the Alzheimer's Disease Neuroimaging Initiative (ADNI) and the Parkinson's Progression Markers Initiative (PPMI) has given hope to the efforts of machine learning researchers hoping to contribute towards an early detection system. Our lab works with the different modalities of data in these studies with the aim of developing machine learning algorithms that can aid in both the classification and detection of patients with/or developing these diseases.

### Sample Publications:

* Devendra Singh Dhami, Ameet Soni, David Page, Sriraam Natarajan, *Identifying Parkinson's Patients : A Functional Gradient Boosting Approach*, Artificial Intelligence in Medicine (AIME) (2017).
* Sriraam Natarajan, Baidya Saha, Saket Joshi, Adam Edwards, Tushar Khot, Elizabeth M. Davenport, Kristian Kersting, Christopher T. Whitlow and Joseph A. Maldjian. *Relational Learning helps in Three-way Classification of Alzheimer Patients from Structural Magnetic Resonance Images of the Brain.* International Journal of Machine Learning and Cybernetics, Springer 2013.

<a name ="cardia"></a>
## 3. CARDIA

### People Involved:


### About:


### Sample Publications:


<a name="aon"></a>
## 4. Automatic Operation Notes

### People Involved:

* Michael Skinner
* Alexander L. Hayes

### About:

With the explosion in the volume of medical information, there is the promise that patient care can be managed more precisely based on automatic extraction and evaluation of patients' medical information available in the electronic health record (EHR).

One challenge is the limited ability to evaluate the rich information present in free text format, such as in notes written by health care providers.  We are starting to remedy this problem by examining a large set of operative notes describing a common surgical procedure, aiming to elicit a context free grammar that might be used to automatically generate such notes.

Research in this direction may help reduce the time doctors spend on such tasks, giving them more time to focus on their patients.

<a name ="active"></a>
## 5. Active elicitation of lab tests


### People Involved:

* Srijita Das
* Nandini Ramanan

### About:
The high level idea of this project is to actively elicit features for the most useful instances in order to build a sample efficient predictive model. We consider the problem of active feature elicitation in which, given some examples with all the features (say, the full Electronic Health Record), and many examples with some of the features (say, demographics), the goal is to identify the set of examples for whom more information (say, lab tests) needs to be collected. The assumption for this problem setting is that certain features like demographic data is cheap and easily available for most patients. However, expensive or cumbersome features like information about various lab tests are available for less number of patients and we want to elicit expensive features only for the patients who would give us maximum information about the target. We develop a novel unifying framework to solve this problem and demonstrate the efficacy of our approach on 4 real world prediction problems like Alzheimer's disease, Parkinson's disease, Postpartum depression and Rare disease identification. We are also exploring human-in-the-loop approaches within this setting and questions related to different feature acquisition for different subpopulation. 

### Sample Publications:
* Natarajan, S., Das, S., Ramaman, N., Kunapuli, G., & Radivojac, P., ["Whom Should I Perform the Lab Test on Next? An Active Feature Elicitation Approach"](https://www.ijcai.org/proceedings/2018/486), International Joint Conference on Artificial Intelligence (IJCAI) 2018.

<a name ="survey"></a>
## 6. Survey data

### People Involved:


### About:


### Sample Publications:
