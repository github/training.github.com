# GitHub Training Site

This is the official website for the [GitHub Training Team](http://training.github.com). It contains a list of upcoming events, classes, and resources to help you learn more about GitHub and Git.

## Build Status

[![Build Status](https://travis-ci.org/github/training.github.com.png?branch=gh-pages)](https://travis-ci.org/github/training.github.com)

## Issues

If you find any errors on the site, please feel free to report an issue using this project's [Issue tracker](https://github.com/github/training.github.com/issues).

## Development

If you want to help out with development on this, here’s how:

```sh
$ git clone git@github.com:github/training.github.com.git
$ cd training.github.com
$ script/setup
$ script/server
# => The site will now be viewable in your browser at http://localhost:4000
```
If you want to pass arguments into `script/server` like `--watch` to do auto-file regeneration
you can still do so by just passing in the arguments.

This uses [Jekyll](http://jekyllrb.com), so if you want to know how all the layouts, includes and other miscellany works, check out the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki).

## CSS Grid

The CSS grid used here is based on [one Coby is experimenting with](https://github.com/cobyism/gridism). The one on this site works essentially the same, with a couple of small differences. Here’s all you need to know to use the grid:

- Each horizontal section of the page (100% browser width) will either be a `<header>`, `<section>`, or `<footer>` tag.
- Within any horizontal page section, a `<div class="container">` will be a wrapped, centered row.
- Within any container, you can use `<div class="whole|half|quarter|three-quarters|fifth|two-fifths|three-fifths|four-fifths|golden-large|golden-small">` to control column widths.
- Within any column `<div>` you can put a `class="content"` to give the column some padding so it has breathing space between other columns.

If you have any questions for how this all works, drop ([@cobyism](https://github.com/cobyism)) a line.
