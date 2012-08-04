# GitHub Training Site

As discussed in [github/github#5025](https://github.com/github/github/issues/5025), we’re going to move the existing training page into [a separate site with its own subdomain](http://training.github.com).

This repo will be the source for the separate site.

## Development

If you want to help out with development on this, here’s how:

```sh
$ git clone git@github.com:github/training.github.com.git
$ cd training.github.com
$ jekyll
# => The site will now be viewable in your browser at http://localhost:4000
# => It will also automagically regenerate the site with any changes you make
```

This uses [Jekyll](http://jekyllrb.com), so if you want to know how all the layouts, includes and other miscellany works, then check out the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki).

## CSS Grid

The responsive CSS grid that’s being used here is one I’m trialling based on [this responsive grid](http://markuplibrary.org/templates/grids/) which was done by [Craig Zheng](http://getsymphony.com/get-involved/member/czheng/) for [Markup Library](http://markuplibrary.org/).

The one on this site works essentially the same, with a couple of small caveats. Here’s all you need to know to use the grid:

- Each horizontal section of the page (100% browser width) will either be a `<header>`, `<section>`, or `<footer>` tag.
- Within any horizontal page section, a `<div class="container">` will be a wrapped, centered row.
- Within any container, you can use <div class="simple|compound|complex|compound-complex|fragment"> to control column widths.
- Within any column `<div>` you can put a `class="content"` to give the column some padding so it has breathing space between other columns.
- If you want to change the container partitions from fourths (the default) to fifths or thirds, put as an extra class on the container — i.e. `<div class="fifths|thirds">`.
- The various column widths (simple, compound, complex, compound-complex, and fragment), will give you different column widths depending on whether the container is set to fourths (no extra class), fifths, or thirds. See [the Markup Library grid reference](http://markuplibrary.org/templates/grids/) for the variations possible.

If you have any questions for how this all works, drop me ([@cobyism](https://github.com/cobyism)) a line.

:tongue:
