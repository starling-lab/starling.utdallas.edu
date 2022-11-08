---
layout: splash
permalink: /papers/collaborative-ps/
title: "Human-guided Collaborative Problem Solving"
category: "HAAI"
description: 'Lara -- An integrated system of learning, reasoning and communication <br> by Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, Dan Roth, In Systems Demonstration Track at ICAPS 2021'
excerpt: '<h1>Lara -- an integrated system of learning, reasoning and communication</h1> <br> <i>Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, Dan Roth</i><br/><br/>{::nomarkdown}  <a href="/assets/pdfs/Kokel_ACS2022.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-file-pdf"></i> Paper</a>  <a href="/assets/pdfs/Kokel_ACS2022_supp.pdf" class="btn btn--light-outline btn--large"><i class="fas fa-paperclip"></i> Appendix</a>  <a href="https://youtu.be/q1pWe4aahF0" target="_blank" class="btn btn--light-outline btn--large"><i class="fab fa-youtube"></i> Video</a> <a href="https://youtube.com/playlist?list=PLFyA0lwDE2XiE3AegTtgJ6Yr7iiaQQRr1" target="_blank" class="btn btn--light-outline btn--large"><i class="fab fa-youtube"></i> Demos</a>{:/nomarkdown}'
header:
  overlay_color: teal  
  teaser: /assets/gifs/cwc.gif
redirect_from:
  - /papers/collaborative-problem-solving-demo/
  - /papers/lara/
---

<link rel="stylesheet" type="text/css" href="/assets/css/projects.css">

<!-- <div style="background-color:teal;padding:10px 20px;display: inline;color:white;font-weight:400"> -->
<h2>What?</h2>


We consider the problem of <b>human-machine collaborative problem solving</b> as a planning task coupled with natural language communication. For this, we propose a task of collaboratively building target structures in a Minecraft environment. Here, two players, an architect (played by human) and a builder (machine), collaborate and communicate using natural language via chat interface. 


<div align="center">
	<img src="/assets/images/project/collaborative-ps/builder-flow.png" style="height:250px!important">
</div>


The architect (shown as a human icon above) has access to the target structure and can see the current state in the build region. The builder (Steve from Minecraft) can move in the build region and place/remove blocks. The builder does not have access to the target structure. The architect has to describe the structure to the builder, via chat interface.

<br>

<h2>Why?</h2>

Human-machine collaborative planning and problem solving is quite challenging as it requires shared perception of the world, sophisticated language understanding, fluent execution, bi-directional communication and contextual understanding. 

For a successful target structure construction, the architect must decompose the target structure to smaller structures that builder knows how to construct. The builder must interpet the instruction in context of the current world and plan the sequence of actions. The conundrums posed by the our building task are 

<ol>
<li>the communication between the architect and the builder is inherently bi-directional, as seen in the image above</li>
<li>the builder should be able to seek clarifications as required</li>
<li>both players must share some initial structures in the vocabulary and expand the vocabulary with experience.</li>
</ol>

Our task highlights the key challenges of the collaborative planning problem: bi-directional communication, contextual understanding, composable vocabulary and ability to induce new, rich concepts based on limited interaction and experience.

<br>

<h2>How?</h2>

Our framework consists of three main components that interact with the Minecraft Simulator. <b>A natural language engine</b> that parses the language utterances to a formal representation and vice-versa, <b>a concept learner</b> that induces generalized concepts for plans based on limited interactions with the user, and <b>a planner</b> that solves the task based on human interaction. More details on each of this component can be found in the <a href="/assets/pdfs/Kokel-ICAPS2021-demo.pdf">paper</a>.


<div align="center">
	<img src="/assets/images/project/collaborative-ps/framework.png" style="height:350px!important">
</div>

<br>

The following video demonstrates our framework.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q1pWe4aahF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<div class="project-category" id="demonstrations"> 
<h2>Few more demonstration videos</h2>

<div class="project-group">
<div class="grid__item">      
<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
<div class="archive__item-teaser">
<iframe width="120" height="100" src="https://www.youtube.com/embed/erEvK7CTqkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
</div>
    <h2 class="archive__item-title" itemprop="headline">
        <a href="https://youtu.be/erEvK7CTqkw" rel="permalink">Demonstration 2
</a>
    </h2>
  </article>
</div>
<div class="grid__item">
  <article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
<div class="archive__item-teaser">
<iframe width="120" height="100" src="https://www.youtube.com/embed/S7PHyIrMnBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <h2 class="archive__item-title" itemprop="headline">
        <a href="https://youtu.be/S7PHyIrMnBg" rel="permalink">Demonstration 3
</a>
    </h2>  
</article>
</div>
<div class="grid__item">
  <article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
<div class="archive__item-teaser"> 
 <iframe width="120" height="100" src="https://www.youtube.com/embed/smgPOao915w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <h2 class="archive__item-title" itemprop="headline">
        <a href="https://youtu.be/smgPOao915w" rel="permalink">Demonstration 4
</a>
    </h2>
</article>
</div>
  </div>
<br/> 
</div> 



## Citation

If you find this work useful, please provide consider using the following reference or BibTeX.

> Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, and Dan Roth. (2022) *Lara -- Human-guided collaborative problem solver: Effective integration of learning, reasoning and communication*. In Tenth Annual Conference on Advances in Cognitive Systems 2022. 

> Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, and Dan Roth. (2021) *Human-guided Collaborative Problem Solving: A Natural Language based Framework*. In ICAPS 2021.

```bibtex
@inproceedings{KokelDIBCDNJDHNPR22,
  author = {Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, Dan Roth},
  title = {Lara -- Human-guided collaborative problem solver: Effective integration of learning, reasoning and communication},
  year = {2022},
  booktitle = {Tenth Annual Conference on Advances in Cognitive Systems ({ACS})}
}

@inproceedings{KokelDIBCDNJDHNPR21,
  author = {Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Rao Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, Dan Roth},
  title = {Human-guided Collaborative Problem Solving: A Natural Language based Framework},
  year = {2021},
  booktitle = {Thirty First International Conference on Automated Planning and Scheduling ({ICAPS})}
}
```

## Acknowledgements

We gratefully acknowledge the support of CwC Program Contract W911NF-15-1-0461 with the US Defense Advanced Research Projects Agency (DARPA) and the Army Research Office (ARO). Any opinions, findings and conclusion or recommendations expressed in this material are those of the authors and do not necessarily reflect the view of the DARPA, ARO or the US government.
