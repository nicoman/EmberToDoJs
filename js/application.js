// Create a new instance and make it available as a variable named Todos
window.Todos = Ember.Application.create();

// Add the adapter to connect with fixtures (example data)

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

// Add real persistence
//Todos.ApplicationAdapter = DS.LSAdapter.extend()({
//        namespace: 'todos-emberjs'
//});
