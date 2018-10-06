Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        seen: true,
        todos: [
            { id: 0, text: 'Learn JavaScript' },
            { id: 1, text: 'Learn Vue' },
            { id: 2, text: 'Build something awesome' }
        ],
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

app.todos.push({id: 3, text: 'New item'});
