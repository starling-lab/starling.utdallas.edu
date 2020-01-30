---
layout: splash
permalink: /software/walker/
title: 'Walk-ER'
author: ['Alexander Hayes', 'Mayukh Das', 'Phillip Odom', 'Sriraam Natarajan']
excerpt: 'A system for defining background knowledge in the form of an Entity-Relational Diagrams and converting it into a BoostSRL modes file.<br /><br />{::nomarkdown}<iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=Walk-ER&type=star&count=true&size=large" frameborder="0" width="120px" height="30px"></iframe> <iframe style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=starling-lab&repo=Walk-ER&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>{:/nomarkdown}'
header:
  overlay_color: "#5e616c"
  cta_label: '<i class="fas fa-download"></i> Download'
  overlay_image: /assets/images/splash_img/splash1.png
  cta_url: "https://github.com/starling-lab/Walk-ER/releases"
  caption: 'Copyright © 2017-2019 StARLinG Lab. This program comes with absolutely no warranty. This is free software, available under the terms of the GPL-3.0.'
---

<p align="center">
	<img src="https://github.com/starling-lab/Walk-ER/raw/master/media/WalkERLogo.png">
</p>

Source code and TeX for "User Friendly Automatic Construction of Background Knowledge: Mode Construction from ER Diagrams."

| Latest Release | License |
| :---: | :---: |
| [![release img]][release] | [![license img]][license] |

## Citation

If you build on this code or the ideas of this paper, please use the following citation.

    @inproceedings{kcap2017ermodeconstruction,
      author = {Alexander Hayes and Mayukh Das and Phillip Odom and Sriraam Natarajan},
      title  = {User Friendly Automatic Construction of Background Knowledge: Mode Construction from ER Diagrams},
      booktitle = {KCAP},
      year   = {2017}
    }

## Getting Started

> Modes are used to restrict/guide the search space and are a powerful tool in getting relational algorithms such as BoostSRL to work. If your algorithm does not learn anything useful, then the first debug point would be the modes (in the background.txt file).

Walk-ER is a system for defining background knowledge for use in relational learning algorithms by exploring entity/attribute/relationships in Entity-Relational Diagrams. Refer to the [BoostSRL Basic Modes Guide](https://github.com/boost-starai/BoostSRL/wiki/Basic-Modes-Guide) for more information about modes.

**NOTE:** This code no longer supports the GUI. If you are looking for GUI, refer the [JA-Walk-ER](/software/jawalker)

### Prerequisites

* Java 1.8
* Python (2.7, 3.5)

### Installation

* Download the latest version from the GitHub repository (including five datasets):

  ```bash
  $ git clone https://github.com/batflyer/Walk-ER.git
  ```

### Basic Usage

WalkER can either be invoked from a terminal or imported as a Python package. Examples of both follow:

1. Interactive version:

   * Options overview (output of `python walker.py -h`):

   ```
   usage: WalkER_rewrite.py [-h] [-v] [--number NUMBER] [-w | -s | -e | -r | -rw] diagram_file

   positional arguments:
     diagram_file

   optional arguments:
     -h, --help         show this help message and exit
     -v, --verbose      Increase verbosity to help with debugging.
     --number NUMBER    Select number of features to walk to (assumes that
                        Important features are ordered from most important to
                        least important). Defaults to number_attributes +
                        number_relations if chosen number is greater than both.
     -w, --walk         [Default] Walk graph from target to features.
     -s, --shortest     Walk the graph from target to features. If there are
                        multiple paths, take the shortest. If the shortest are
                        equal lengths, walk both.
     -e, --exhaustive   Walk graph from every feature to every feature.
     -r, --random       Ignore features the user selected and walk (-w) from the
                        target to random features.
     -rw, --randomwalk  Walk a random path from the target until reaching a depth
                        limit (specified with --number).
   ```

   * Examples:

      * `$ python walker.py -w diagrams/imdb.mayukh`

      * `$ python walker.py -rw --number 10 diagrams/imdb.mayukh`

2. Via GUI
	Instructions for using the GUI module for creation/re-use of ER-Diagrams
	GUI module can be initiated by running a jar file.
	Jar file name : ERD-GUI.jar

	```
	Usage : java -jar ERD-GUI.jar [ | [-w | -s | -e | -r | -rw] | [--number number] | [--verbose] | [-m] | [--erout outputDiagramfile]]
	All options have implicit default values ensuring that the GUI runs smoothly even when none of the options are specified

	Optional arguments:
	  -m				 Calls the python mode construction module automatically
						 after ER-Diagram is parsed.

		The rest of the arguments are only required if "-m" is used.

	  --erout 		 	 Indicator for specifying file name for parsed output
						 (that the mode constructor will use) of ER-Diagram.
	  outputDiagramfile	 File name for the parsed output of ERD. This will be
						 used as "diagram_file" argument when calling python
						 mode construction module.
	  --verbose      	 Increase verbosity to help with debugging (for mode construction).
	  --number NUMBER    Select number of features to walk to (assumes that
						 Important features are ordered from most important to
						 least important). Defaults to number_attributes +
						 number_relations if chosen number is greater than both.
	  -w, --walk         [Default] Walk graph from target to features.
	  -s, --shortest     Walk the graph from target to features. If there are
						 multiple paths, take the shortest. If the shortest are
						 equal lengths, walk both.
	  -e, --exhaustive   Walk graph from every feature to every feature.
	  -r, --random       Ignore features the user selected and walk (-w) from the
						 target to random features.
	  -rw, --randomwalk  Walk a random path from the target until reaching a depth
						 limit (specified with --number).
	```				 
	* Examples:
		* For running with no arguments: `java -jar ERD-GUI.jar`
		* For running with arguments: `java -jar ERD-GUI.jar -s --number 2 -m --erout ProfStudentCourse.out`
		(file extention of the output file is not important, can be anything or none)

	Once the jar file is executed, it will initiate a GUI window which allows one to create/save/upload and finally parse an ER-Diagram.
	For a video tutorial on how to use the GUI please click <a href = "https://www.dropbox.com/s/zmeol2dtyogh5u7/Entity%20Relationship%20Models%20-%20yFiles%20for%20Java%2012_20_2017%2010_09_35%20AM.mp4?dl=0"> here </a>.

## Acknowledgements

* Mayukh Das and Sriraam Natarajan gratefully acknowledge the support of the CwC Program Contract W911NF-15-1-0461 with the US Defense Advanced Research Projects Agency (DARPA) and the Army Research Office (ARO).
* Phillip Odom and Sriraam Natarajan acknowledge the support of the Army Research Office (ARO) grant number W911NF-13-1-0432 under the Young Investigator Program.
* Icon in the logo is "Trail" by [Martina Krasnayová](https://thenounproject.com/bubblee.tinka/) from the Noun Project, used under a [Creative Commons (CC) Attribution 3.0 United States License](https://creativecommons.org/licenses/by/3.0/us/).

[license]:https://github.com/starling-lab/Walk-ER/blob/master/LICENSE
[license img]:https://img.shields.io/github/license/starling-lab/Walk-ER.svg

[release]:https://github.com/starling-lab/Walk-ER/releases
[release img]:https://img.shields.io/github/tag/starling-lab/Walk-ER.svg
