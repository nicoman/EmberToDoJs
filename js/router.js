// When app matches '/' render the todos template
Todos.Router.map(function() {
    this.resource('todos', { path: '/'});
});

// Connect Fixture with template
Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});
