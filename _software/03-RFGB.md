---
layout: splash
permalink: /software/rfgb.py/
title: 'rfgb.py'
author: Kaushik Roy
excerpt: 'Relational Functional Gradient Boosting in Python.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rfgb.py&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rfgb.py&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash1.png
  cta_label: '<i class="fab fa-github"></i> View on GitHub'
  cta_url: "https://github.com/starling-lab/rfgb.py/releases"
  caption: 'Copyright © 2017-2018 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

Relational Functional Gradient Boosting in Python.

[![][pyversions img]][pyversions] [![][version img]][version] [![][license img]][license] [![][build status img]][build status] [![][docs img]][docs]

[pyversions]:https://pypi.org/project/rfgb/
[pyversions img]:https://img.shields.io/pypi/pyversions/rfgb.svg?style=flat-square

[version]:https://github.com/starling-lab/rfgb.py/releases/
[version img]:https://img.shields.io/pypi/v/rfgb.svg?style=flat-square

[license]:https://github.com/starling-lab/rfgb.py/blob/master/LICENSE
[license img]:https://img.shields.io/pypi/l/rnlp.svg?style=flat-square

[build status]:https://travis-ci.org/starling-lab/rfgb.py
[build status img]:https://img.shields.io/travis/starling-lab/rfgb.py.svg?style=flat-square

[docs]:https://rfgbpy.readthedocs.io/en/stable/
[docs img]:https://readthedocs.org/projects/rfgbpy/badge/?version=stable&style=flat-square

## Installation

Stable builds on PyPi

```bash
pip install rfgb
```

Development builds on GitHub

```bash
pip install git+git://github.com/starling-lab/rfgb.py.git
```

## Quick-Start

1. `git clone https://github.com/starling-lab/rfgb.py.git`
2. `cd rfgb.py`
3. Perform classification on a logistics domain:

  ```bash
  python -m rfgb -target unload -train testDomains/Logistics/train/ -test testDomains/Logistics/test/ -trees 10
  ```

`rfgb.py` is designed to be a re-implementation of BoostSRL in Python.

<img src="/assets/gifs/rfgb_getting_started.gif" alt="Quick start gif." width="576" height="432" display="block" margin="auto">
