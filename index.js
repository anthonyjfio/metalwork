var koa         = require('koa'),
    serve	= require('koa-static'),
    metalsmith 	= require('metalsmith'),
    markdown	= require('metalsmith-markdown'),
    templates 	= require('metalsmith-templates'),
    collections	= require('metalsmith-collections'),
    permalinks	= require('metalsmith-permalinks'),
    beautify	= require('metalsmith-beautify'),
    feed        = require('metalsmith-feed'),
    moment	= require('moment');

app = koa();

metalsmith(__dirname)
    .metadata({
        site: {
            title: 'evbogue.com',
            url: 'evbogue.com',
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
        .use(templates({
        engine: 'jade',
        moment
        }))
        .use(feed({collection: 'blog'}))
	.use(beautify())
	.destination('./build')
	.build(function(err) {
		if (err) {throw err; }
                console.log('Metalwork has been built');
	});

app.use(serve(__dirname + '/build'));

app.listen('3000');

console.log('Metalwork is listening at http://localhost:3000/');
