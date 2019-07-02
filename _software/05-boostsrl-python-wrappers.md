---
layout: splash
permalink: /software/boostsrl-python-wrappers/
title: 'BoostSRL: Python Wrappers'
author: Alexander Hayes
excerpt: '<strong>boostsrl</strong> is a set of Python wrappers around BoostSRl with a scikit-learn-style interface.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=boostsrl-python-package&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=boostsrl-python-package&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe><br><br><a href="https://github.com/starling-lab/boostsrl-python-package/" class="btn btn--light-outline btn--large"><i class="fab fa-github"></i> View Source</a><br><a href="https://boostsrl.readthedocs.io/en/stable/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Stable Docs</a> <a href="https://boostsrl.readthedocs.io/en/latest/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Latest Docs</a><br><a href="https://github.com/starling-lab/boostsrl-python-package/issues" class="btn btn--light-outline btn--large"><i class="fas fa-bug"></i> Bug Tracker and Feature Suggestion</a>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash_img/splash4.png
  overlay_filter: 0.1
  caption: 'Copyright © 2017-2019 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

# boostsrl

[![boostsrl Python Package Index latest version][pypi img]](https://pypi.org/project/boostsrl/)
[![boostsrl-python-package License][license img]](https://github.com/starling-lab/boostsrl-python-package/blob/master/LICENSE)
[![Travis Continuous Integration build status][build status]](https://travis-ci.org/starling-lab/boostsrl-python-package)
[![Code coverage status][codecov]](https://codecov.io/github/starling-lab/boostsrl-python-package?branch=master)
[![Circle Continuous Integration documentation correctness status][circleci]](https://circleci.com/gh/starling-lab/boostsrl-python-package)
[![ReadTheDocs latest documentation build status][readthedocs]](https://boostsrl.readthedocs.io/en/latest/)

[pypi img]:https://img.shields.io/pypi/v/boostsrl.svg
[license img]:https://img.shields.io/github/license/starling-lab/boostsrl-python-package.svg
[build status]:https://travis-ci.org/starling-lab/boostsrl-python-package.svg?branch=master
[codecov]:https://codecov.io/gh/starling-lab/boostsrl-python-package/branch/master/graphs/badge.svg?branch=master
[circleci]:https://circleci.com/gh/starling-lab/boostsrl-python-package.svg?style=shield
[readthedocs]:https://readthedocs.org/projects/boostsrl/badge/?version=latest

**boostsrl** is a set of Python wrappers around BoostSRl with a scikit-learn-style interface.

- **Documentation**: [https://boostsrl.readthedocs.io/en/stable/](https://boostsrl.readthedocs.io/en/stable/)
- **Questions?** Contact [Alexander L. Hayes](https://hayesall.com) ([hayesall@iu.edu](mailto:hayesall@iu.edu))

## Getting Started

### Prerequisites

* Java 1.8
* Python (3.6, 3.7)

### Installation

The latest stable version can be installed from PyPi using pip:

```bash
pip install boostsrl
```

The [Getting Started](https://boostsrl.readthedocs.io/en/latest/getting_started.html)
guide has further details.

## Basic Usage

The general setup should be similar to scikit-learn. But there are a few extra requirements in terms of setting background knowledge and formatting the data.

A minimal working example (using the Toy-Cancer data set imported with 'example_data') is:

```python
>>> from boostsrl.rdn import RDN
>>> from boostsrl import Background
>>> from boostsrl import example_data
>>> bk = Background(
...     modes=example_data.train.modes,
...     use_std_logic_variables=True,
... )
>>> clf = RDN(
...     background=bk,
...     target='cancer',
... )
>>> clf.fit(example_data.train)
>>> clf.predict_proba(example_data.test)
array([0.88079619, 0.88079619, 0.88079619, 0.3075821 , 0.3075821 ])
>>> clf.classes_
array([1., 1., 1., 0., 0.])
```

`example_data.train` and `example_data.test` are each
[`boostsrl.Database`](https://boostsrl.readthedocs.io/en/latest/generated/boostsrl.Database.html#boostsrl.Database) object,
so this hides some of the complexity behind the scenes.

This example abstracts away some complexity in exchange for compactness.
For more thorough examples, see the
[Examples Gallery](https://boostsrl.readthedocs.io/en/latest/auto_examples/index.html)
section of the documentation.

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/starling-lab/boostsrl-python-package/blob/master/.github/CONTRIBUTING.md) for documentation on submitting issues and pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. See [PyPi](https://pypi.org/project/boostsrl/) or [Releases](https://github.com/starling-lab/boostsrl-python-package/releases) for all stable versions that are available.

## Acknowledgements

* Professor Sriraam Natarajan
* Members of StARLinG Lab
