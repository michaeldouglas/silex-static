var hello = new Vue({
    delimiters: ['${', '}'],
    el: '#hello',
    data: {
        msg: "Hello Silex - PHP Conference",
        peoples: [
            {name: "Michael Douglas Barbosa Araujo"},
            {name: "Levina Do Nascimento Passos"},
            {name: "Maria Silvania Barbosa"}
        ],
        newElement: '',
        elements: []
    },
    methods: {
        addElement: function() {
            var title = this.newElement.trim();
            if (title) {
                this.elements.push({title:title});
                this.newElement = "";
            }
        },
        removeElement: function(e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        }
    }
});