// When app matches '/' render the todos template
Todos.Router.map(function() {
    this.resource('todos', { path: '/'});
});
