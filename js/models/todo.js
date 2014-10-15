// Creates a new class Todo and places it within your application's namespace
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});
