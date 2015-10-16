var koa         = require('koa'),
    serve	= require('koa-static'),
    metalsmith 	= require('metalsmith'),
    markdown	= require('metalsmith-markdown'),
    layouts 	= require('metalsmith-layouts'),
    collections	= require('metalsmith-collections'),
    permalinks	= require('metalsmith-permalinks'),
    beautify	= require('metalsmith-beautify'),
    feed        = require('metalsmith-feed'),
    moment	= require('moment');


metalsmith(__dirname)
        .metadata({
            site: {
                  title: 'Metalwork',
                  url: 'http://evbogue.com/metalwork/',
                  author: 'Ev Bogue'
            }
        })
	.use(markdown())
	.use(collections({
            blog: {
                pattern: './blog/*.md',
                sortBy: 'date',
                reverse: 'True'
                }
        }))
        .use(permalinks({
	    pattern: ':collections:title'
	}))
        .use(feed({collection: 'blog'}))
        .use(layouts({
            engine: 'jade',
            moment
        }))
	.use(beautify())
	.destination('./build')
	.build(function(err) {
	    if (err) {throw err; }
            console.log('Metalwork has been built');
	});

app = koa();

app.use(serve(__dirname + '/build'));

app.listen('3000');

console.log('Metalwork is listening at http://localhost:3000/');
