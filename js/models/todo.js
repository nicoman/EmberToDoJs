// Creates a new class Todo and places it within your application's namespace
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

// Add fixtures, example data

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 2,
        title: '...',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Profit!',
        isCompleted: true
    }
];
