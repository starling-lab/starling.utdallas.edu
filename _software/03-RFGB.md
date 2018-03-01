---
layout: splash
permalink: /software/rfgb/
title: 'RFGB'
author: Kaushik Roy
excerpt: 'BoostSRL in pure Python.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=kkroy36&repo=RFGB&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=kkroy36&repo=RFGB&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  cta_label: '<i class="fas fa-download"></i> Download'
  cta_url: "https://github.com/kkroy36/RFGB/releases"
  caption: 'Copyright © 2017-2018 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

# RFGB

A reimplementation of BoostSRL in pure Python.

### Regression

1. Copy a regression example from test domains both train and test (ex: Boston Housing) to same directory as the python files or you can write your own.

2. Run command: *python main.py -target <list of target(s)> -reg*

3. For the BostonHousing example: python main.py -target [medv] -reg

### Classification

1. Copy a classification example from test domains both train and test (ex: Toy Cancer) to same directory as .py files or you can write your own.

2. Run command: *python main.py -target <list of target(s)>*

3. For the ToyCancer: python main.py -target [cancer]

**To run classification with expert advice:**

1. Copy an expert advice based classification example from test domains both train and test (for now heart attack) to same directory as .py files or you can write your own.

2. Include advice.txt file in train folder

3. The file contains pieces of advice of the form: *advice clause <list of preferred target(s)> <list of non preferred target(s)>*

4. Run command: *python main.py -target <list of target(s)> -expAdvice*

5. For the HeartAttack example: python main.py -target [ha] -expAdvice

### In development

**further testing, commenting, cleaning up code, and adding more functionality such as MLN learning, soft margin etc.**
