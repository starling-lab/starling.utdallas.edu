---
layout: splash
permalink: /software/rnlp/
title: 'rnlp'
author: Alexander Hayes
excerpt: 'Relational-NLP: Convert text into relational facts for building text classification pipelines.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rnlp&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=rnlp&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
<br><br><a href="https://github.com/starling-lab/rnlp/" class="btn btn--light-outline btn--large"><i class="fab fa-github"></i> View Source</a><br><a href="https://rnlp.readthedocs.io/en/stable/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Stable Docs (v0.3.1)</a> <a href="https://rnlp.readthedocs.io/en/latest/" class="btn btn--light-outline btn--large"><i class="fas fa-book"></i> Latest Docs</a><br><a href="https://github.com/starling-lab/rnlp/issues" class="btn btn--light-outline btn--large"><i class="fas fa-bug"></i> Bug Tracker and Discussion</a>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash_img/splash2.png
  caption: 'Copyright © 2017-2019 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

## Installation

We recommend using environments for managing Python packages, refer to [venv](https://docs.python.org/3/tutorial/venv.html) or [Conda](https://www.anaconda.com/download/) for more information.

Stable versions of the `rnlp` library are hosted on the [Python Package Index](https://pypi.org/project/rnlp/) (PyPi)

```bash
pip install rnlp
```

Development versions are on GitHub. These may contain partially-implemented features.

```bash
git clone https://github.com/starling-lab/rnlp.git
python setup.py develop
```

## Quick-Start

`rnlp` can either be used as a commandline tool or an imported Python Package.

Commandline:

```bash
$ python -m rnlp -f files/doi.txt
Reading corpus from file(s)...
Creating background file...
100%|████████| 18/18 [00:00<00:00, 38it/s]
```

Imoprted:

```python
from rnlp.corpus import declaration
import rnlp

doi = declaration()
rnlp.converter(doi)
```

## A Relational View of Text

Text will be converted into relational facts, built around the basic building blocks of *Words*, *Sentences*, and *Blocks*.

*Words* are individual units of text, such as the words you are currently reading. *Sentences* are a collection of *Words*. *Blocks* are a collection of *Sentences*.

This package encodes text in such a format so that relational learning methods (such as [BoostSRL](/software/boostsrl/)) can learn its structure.

## Encoded Facts

* Sentence's Relative Position in Block:

  * `earlySentenceInBlock`: Sentence occurs within the first third of a block's length.
  * `midWaySentenceInBlock`: Sentence occurs between the first and last third of a block's length.
  * `lateSentenceInBlock`: Sentence occurs within the last third of a block's length.

* Word's Relative Position in Sentence:

  * `earlyWordInSentence`: Word occurs within the first third of a sentence.
  * `midWayWordInSentence`: Word occurs between a third and two-thirds of a sentence.
  * `lateWordInSentence`: Word occurs within the last third of a sentence.

* Relative Position Between Items:

  * `nextWordInSentence`: Pointer from a word to its neighbor.
  * `nextSentenceInBlock`: Pointer from a sentence to its neighbor.

* Existential Semantics:

  * `sentenceInBlock`: Sentence occurs in a particular block.
  * `wordInSentence`: Word occurs in a particular sentence.

* Low-Level Information about words:

  * `wordString`: A string representation of a word.
  * `partOfSpeechTag`: The word's part of speech.

## Example

<img src="https://raw.githubusercontent.com/starling-lab/rnlp/master/docs/img/output.png" alt="Basic file structure for the Cora dataset which BoostSRL assumes for most operations." display="block" margin="auto">

A toy classification task where the goal is to predict whether a sentence contains the word "you".

At the root of the tree, we see that `[wordString(b, "you")]` occurring is the best predictor. More interestingly, the model also shows that if both "a" and "b" occur early in the sentence, and "anon12035" is "Thank", then it is also likely to be true.

The model was able to learn that the word "you" often occurs with the word "Thank" in the same sentence when "Thank" appears early in that sentence.
