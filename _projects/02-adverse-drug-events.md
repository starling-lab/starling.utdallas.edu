---
layout: single
classes: wide
title: "Adverse <nobr>Drug-Events</nobr>"
category: "precision-health"
date: "2018-01-01"
permalink: /projects/adverse-drug-events/
header:
  teaser: /assets/images/project/ade.jpg
sidebar:
  - title: "People Involved"
    image: /assets/images/project/ade.jpg
    text: "[Mayukh Das](/people/#mayukh-das) <br>
    [Devendra Singh Dhami](/people/#devendra-singh-dhami)"

---

With the increase in the number of drug discoveries and thus the data associated with each drug, detecting when these new drugs (and the old drugs) with react to something (can be other drugs, food etc.) adversely has become a very important problem inside bioinformatics. This problem of adverse drug events (ADE) is now being studied in the field of machine learning as due to the large amount of data available, it will be simpler for the machines to detect hidden patterns that might result in these ADEs.

Our previous work in this area was specifically in natural language processing (NLP) where we looked at PubMed articles and extracted relational features and constucted a model on these features. The model was supplemented by expert advice that was employed to identify text patterns in articles that might suggest the presence of an ADE(s). Recently we have focused on the problem of drug-drug interactions by looking at the molecular structure of the drugs and the interaction pathways associated with each drug. The goal is to create an adverse drug events network that can be easily mined in the future for detecting and discovering any ADEs.

### Publications:

* Devendra Singh Dhami, Gautam Kunapuli, Mayukh Das, David Page and Sriraam Natarajan. ["Drug-Drug Interaction Discovery: Kernel Learning from Heterogeneous Similarities"](http://www.utdallas.edu/~devendra.dhami/SKID3_Dhami_CHASE18.pdf) IEEE Conference on Connected Health: Applications, Systems, and Engineering Technologies (CHASE), 2018.  
* Phillip Odom, Vishal Bangera, Tushar Khot, David Page and Sriraam Natarajan. ["Extracting Adverse Drug Events from Text using Human Advice"](http://utdallas.edu/~sriraam.natarajan/Papers/ADEText2015.pdf) Artificial Intelligence in Medicine (AIME) 2015.
