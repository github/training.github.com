# GitHub Training

This is the official website for the [GitHub Training Team](http://training.github.com) and contains a schedule of upcoming events as well as courseware, including outlines, topic-specific guides, examples, and slides provided under the [_CC BY 3.0_ license](http://creativecommons.org/licenses/by/3.0/).

The current build status is [![Build Status](https://travis-ci.org/github/training.github.com.png?branch=gh-pages)](https://travis-ci.org/github/training.github.com)

## Help Us Improve These Materials

We’re always looking for ways to improve these materials. If you have corrections, polish, or materials contributions, please submit them via a [Pull Request](https://help.github.com/articles/using-pull-requests) with the change. Or, open an [Issue](https://github.com/github/training.github.com/issues) so we can help guide your contribution to the right location in the materials.


## Development

If you want to run a local, offline copy of the Training site, or help out with development, you'll need a recent version of Ruby (we use 1.9.3), with rubygems and Bundler.

```sh
$ git clone git@github.com:github/training.github.com.git
$ cd training.github.com
$ script/setup
$ script/server
# => The site will now be viewable in your browser at http://localhost:4000
```
If you want to pass arguments into `script/server` like `--watch` to do auto-file regeneration
you can still do so by just passing in the arguments.

The entire site uses [Jekyll](http://jekyllrb.com), so if you want to know how all the layouts, includes and other miscellany works, check out the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki).

## Materials Format

The majority of the site materials are written in [Markdown](http://whatismarkdown.com), a [lightweight markup language](http://en.wikipedia.org/wiki/Lightweight_markup_language) supported in the GitHub web application user interface. There is a syntax guide to the original [Markdown format](http://daringfireball.net/projects/markdown/syntax) and also [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/).
