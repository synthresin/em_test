// instantiate application

window.EmTest = Ember.Application.create();

// Set up Store

EmTest.Store = DS.Store.extend({
	revision: 11
});

// Define post model

EmTest.Post = DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string')
});

// Setup Router

EmTest.Router.map(function() {
	this.route('about');
	this.resource('posts');
	this.resource('post', { path: '/posts/:post_id' } );
});

EmTest.PostsRoute = Em.Route.extend({
	model: function() {
		return EmTest.Post.find();
	}
});