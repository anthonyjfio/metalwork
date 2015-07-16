---
title: What is Metalwork?
template: post.jade
date: 2015-07-16
collection: blog
---

Metalwork is a built-out Metalsmith blog that works.

Metalwork is built using Node.js, Jade, Framework.css, and served using Koa.js. It uses the following Metalsmith plugins: metalsmith-collections, metalsmith-permalinks, metalsmith-markdown, metalsmith-templates, and metalsmith-beautify.

You can view the code at [Gitlab](//gitlab.com/ev/metalwork/)

To install metalwork, be sure to install the latest version of io.js

	% git clone git@gitlab.com:ev/metalwork.git
	% cd metalwork && npm install
	% node metalwork.js
	Metalwork is listening at http://localhost:3000/

Navigate to http://localhost:3000/ to view your site.

You can also 

	% npm install metalwork
	% cd node_modules/metalwork
	% node metalwork.js
	Metalwork is listening at http://localhost:3000/

to get the same result.

