---
layout: splash
permalink: /softwares/rfgb.py/
title: 'rfgb.py'
author: Kaushik Roy
excerpt: 'A Python package and tool for learning statistical relational models via gradient boosting.<br>This open source project is in early Alpha: feedback, bug reports, and contributions are welcome.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rfgb.py&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rfgb.py&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
<br><br><a href="https://github.com/starling-lab/rfgb.py/" class="btn btn--light-outline btn--large"><i class="fab fa-github"></i> View Source</a><br><a href="https://rfgbpy.readthedocs.io/en/stable/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Stable Docs (v0.2.2)</a> <a href="https://rfgbpy.readthedocs.io/en/latest/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Latest Docs</a><br><a href="https://github.com/starling-lab/rfgb.py/issues" class="btn btn--light-outline btn--large"><i class="fas fa-bug"></i> Bug Tracker and Discussion</a>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash_img/splash1.png
  caption: 'Copyright © 2017-2019 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

[![][pyversions img]][pyversions] [![][version img]][version] [![][license img]][license] [![][build status img]][build status] [![][docs img]][docs]

[pyversions]:https://pypi.org/project/rfgb/
[pyversions img]:https://img.shields.io/pypi/pyversions/rfgb.svg?style=flat-square

[version]:https://pypi.org/project/rfgb/
[version img]:https://img.shields.io/pypi/v/rfgb.svg?style=flat-square

[license]:https://github.com/starling-lab/rfgb.py/blob/master/LICENSE
[license img]:https://img.shields.io/pypi/l/rnlp.svg?style=flat-square

[build status]:https://travis-ci.org/starling-lab/rfgb.py
[build status img]:https://img.shields.io/travis/starling-lab/rfgb.py.svg?style=flat-square

[docs]:https://rfgbpy.readthedocs.io/en/stable/
[docs img]:https://readthedocs.org/projects/rfgbpy/badge/?version=stable&style=flat-square

## Installation

We recommend using environments for managing Python packages, refer to [venv](https://docs.python.org/3/tutorial/venv.html) or [Conda](https://www.anaconda.com/download/) for more information.

Tagged versions of the `rfgb` library are hosted on the [Python Package Index](https://pypi.org/project/rfgb/) (PyPi). The associated  [Documentation](https://rfgbpy.readthedocs.io/en/stable/) is on readthedocs.

```bash
pip install rfgb
```

Development versions are on GitHub. These may contain partially-implemented features. The  [Latest Documentation](https://rfgbpy.readthedocs.io/en/latest/) is on readthedocs.

```bash
git clone https://github.com/starling-lab/rfgb.py.git
python setup.py develop
```

## Quick-Start without Installation

1. `git clone https://github.com/starling-lab/rfgb.py`
2. `cd rfgb.py`
4. Relational Dependency Network classification on a logistics domain:

```bash
$ python -m rfgb \
	learn rdn \
	-target unload \
	-train testDomains/Logistics/train/ \
	-test testDomains/Logistics/test/
```

<img src="/assets/gifs/rfgb_getting_started.gif" alt="Quick start gif." width="576" height="432" display="block" margin="auto">

## Versioning and Development

We use [SemVer](https://semver.org/) (Major.Minor.Patch) for versioning.

This project is currently in early Alpha: some features available in BoostSRL are missing. The commandline interface (CLI) and application programming interface (API) are not finalized yet, and are subject to change.

Interested in contributing? Refer to the  [Contributing](https://rfgbpy.readthedocs.io/en/latest/development/01_contributing.html) section of the documentation.

## License

Copyright © 2017-2019 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0. You are free to change and redistribute it. There is NO WARRANTY, to the extent permitted by law.
