# My Gridsome Failure

## Process
I started this project as a basic [gridsome](https://gridsome.org/) project using `gridsome create new-project`.

From there, I was attempting to recreate my https://ki4hdu.com web site that for a while has been generated using [gatsby](https://www.gatsbyjs.com/). The project for the gatsby version is also [publicicly available](https://github.com/mckeehan/ki4hdu-web).

The content for the site is a combination of formats:
1. Blog posts and Notes are in markdown files,
2. Author details (name and avatar) are managed in yaml files,
3. Photos and Photo Galleries are driven by a custom mysql database, and
4. Mapping data in the form of GPX files.

I started from scratch only adding the bare minimum to support what the site needed. I am not a front-end engineer, so I use the [bootstrap](https://getbootstrap.com/) framework to make styling the site relatively easy. Gridsome has some plugins to manage the content transformations: @gridsome/source-filesystem, @gridsome/transformer-remark, @gridsome/transformer-yaml, and gridsome-source-mysql. The only other plugin that I used was to make my `code` blocks better looking: gridsome-plugin-remark-prismjs-all.

I was successful in transforming the blog and note markdown files generating pages for each.
I was also successful in creating a paginated index for the blog entries and a tag-driven index for both the notes and the blog posts.
I was successful in creating photo gallery pages and individual pages for each photo.

This site generation was done on an older mac mini, so it is entirely possible that I just need a better machine, but the gatsby site continues to generate on this hardware, so...

## Remaining Work
- Internal linking between markdown pages is not working
- Support for maps
