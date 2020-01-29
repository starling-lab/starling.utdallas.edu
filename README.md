# [starling.utdallas.edu](https://starling.utdallas.edu)

[![][license img]][license] [![][release img]][release]

## Overview

Development repository for the StARLinG Lab's webpage. Built with Jekyll, jQuery, and the minimal-mistakes Jekyll theme.

Maintained by **[Alexander L. Hayes](https://github.com/batflyer)** and **[Harsha Kokel](https://github.com/harshakokel)**.

Contact: `{alexander.hayes/harsha.kokel}@utdallas.edu`

## Quick-start Guide (Linux and OSX)

* Install Ruby and RubyGems (refer to Jekyll [installation](https://jekyllrb.com/docs/installation/) and [quick-start guide](https://jekyllrb.com/docs/quickstart/)).
* `git clone https://github.com/boost-starai/boost-starai.github.io.git`
* `gem install jekyll bundler`
* `bundle install`
* `bundle exec jekyll serve`
* Navigate to `127.0.0.1:4000` in your browser.

## Creating a Production Build

1. Make sure your branch is even with the master branch.
2. Tag the current state as a new version (based on [SemVer](http://semver.org/)).
3. Trigger a production build with Jekyll.
4. Move the `_site` folder produced by Jekyll to the appropriate location on the Apache server.

        $ git branch --list
		$ git pull
		$ git tag --list
		$ git tag -a v1.0.7 -m "This fixes x, y, and z."
		$ git push origin v1.0.7
		$ JEKYLL_ENV=production bundle exec jekyll build

## Publishing the Website

> Need starling.utdallas.edu access for this.

1. Copy the `_site` folder created after the build to starling.utdallas.edu server
2. Login to the starling.utdallas.edu
3. switch to sudo
4. move the `_site` folder to /var/www
5. move to /var/www folder
6. Back up the existing website
7. Publish latest build
8. Exit and remember to delete the `_site` folder from `~`

        $ scp -r _site/ <net-id>@starling.utdallas.edu:~
        $ ssh <net-id>@starling.utdallas.edu
        $ sudo su
        $ cp -rf _site /var/www
        $ cd /var/www
        $ mv html v1.0.6
        $ mv _site html
        $ exit
        $ cd ~; rm -rf _site
        $ exit

## Updates guide

1. Publications are in `/_data/publication.yml`
2. News updates go in `/_news/...`
3. Lab member details are in `/_data/authors.yml`
4. Gallery photos are in `/_pages/photo-gallery.md`
5. Top navigation is in `/_data/_navigation.yml`

## Contributing

Refer to [CONTRIBUTING.md](.github/CONTRIBUTING.md) for documentation on submitting issues and pull requests.

A [Guide to Updating the Website](.github/docs/README.md) has more information on how to author new pages, and the same directory has templates that may be useful.

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). See [LICENSE.txt](LICENSE.txt) for a full copy of the license.

## Attribution

This work incorporates work from the following sources:

* ["Minimal Mistakes"](https://github.com/mmistakes/minimal-mistakes/) a Jekyll theme by Michael Rose and contributors, distributed under the terms of the [MIT License](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE.txt).
* ["jekyll"](https://jekyllrb.com) a blog-aware, static site generator in Ruby, distributed under the terms of the [MIT License](https://github.com/jekyll/jekyll/blob/master/LICENSE).
* ["linkprediction.jpg"](https://raw.githubusercontent.com/starling-lab/starling.utdallas.edu/v1.0-master/assets/images/linkprediction.jpg) is plotted and rendered with [Cytoscape](http://www.cytoscape.org/download.php), used under the terms of the LGPL.
* The random student loading on the homepage is based on a blog post by [James W Thorne](https://thornelabs.net/2014/06/08/a-better-way-to-display-random-jekyll-posts-on-page-load-or-refresh-using-jquery-and-json.html).
* The StARLinG Logo is designed by [Gautam Kunapuli](https://www.utdallas.edu/~Gautam.Kunapuli/), and used with permission.

[license]:LICENSE
[license img]:https://img.shields.io/github/license/starling-lab/starling.utdallas.edu.svg

[release]:https://github.com/starling/starling.utdallas.edu/releases
[release img]:https://img.shields.io/github/tag/starling-lab/starling.utdallas.edu.svg
