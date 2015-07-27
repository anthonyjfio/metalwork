---
title: About Metalwork
date: 2015-07-26
template: post.jade
---


Metalwork is a built out [Metalsmith](//metalsmith.io) blog that works.

Metalsmith is a static site generator created by the people at Segment.io. Metalsmith is great. It's the best static site generator in the Nodeiverse, because it's the most flexible. However, because it's so flexible it can be difficult for newbies to get started. It's a long way from the example given in the Metalsmith readme to an operational blog.

This is why I decided to release a genericized version of the built-out version of Metalsmith that I use at evbogue.com.

Metalwork is built using Node.js, Jade, Framework.css, and served using Koa.js. It uses the following Metalsmith plugins: metalsmith-collections, metalsmith-permalinks, metalsmith-markdown, metalsmith-templates, and metalsmith-beautify.

Metalwork is opinionated. If you want to do it yourself, you are welcome to do that instead.

It will only take three simple steps to get it running, if you have Node.js installed and know how to use it.

        % npm install metalwork
        % cd node_modules/metalwork
        % node index.js

And Metalwork will tell you it's running at http://localhost:3000/. Navigate your web browser there to see your Metalwork install.

To customize, edit the Jade template files located in the template folder.

