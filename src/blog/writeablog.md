---
title: How to write a blog post
template: post.jade
date: 2015-07-09
collection: blog
---

To write a new blog post

	% vim src/blog/newblog.md

Blog posts are written using markdown with YAML frontmatter, as many blogs are written. Because of how metalsmith-collections and metalsmith-templates work, you need to specify your collection and template.

Here is a basic blog post:

	---
	title: My new blog post
	date: 2015-07-07
	collection: blog
	template: post.jade
	---

	Hello World

To render the new post, relaunch metalwork.

	% node metalwork.js

