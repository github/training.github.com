# GitHub Training Site

This is the official website for the [GitHub Training Team](http://training.github.com), with information about upcoming events, classes, and resources to help you learn more about Git and GitHub.

## Issues

If you find any errors on the site, please feel free to report an issue using this project's [Issue tracker](https://github.com/github/training.github.com/issues).

## Development

If you want to help out with development on this, here’s how:

```sh
$ git clone git@github.com:github/training.github.com.git
$ cd training.github.com
$ script/server
# => The site will now be viewable in your browser at http://localhost:4000
```

This uses [Jekyll](http://jekyllrb.com), so if you want to know how all the layouts, includes and other miscellany works, then check out the [Jekyll Wiki](https://github.com/mojombo/jekyll/wiki).

## CSS Grid

The CSS grid used here is based on [one Coby is experimenting with](https://github.com/cobyism/gridism). The one on this site works essentially the same, with a couple of small differences. Here’s all you need to know to use the grid:

- Each horizontal section of the page (100% browser width) will either be a `<header>`, `<section>`, or `<footer>` tag.
- Within any horizontal page section, a `<div class="container">` will be a wrapped, centered row.
- Within any container, you can use `<div class="whole|half|quarter|three-quarters|fifth|two-fifths|three-fifths|four-fifths|golden-large|golden-small">` to control column widths.
- Within any column `<div>` you can put a `class="content"` to give the column some padding so it has breathing space between other columns.

If you have any questions for how this all works, drop ([@cobyism](https://github.com/cobyism)) a line.
