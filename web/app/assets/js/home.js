var hello = new Vue({
    delimiters: ['${', '}'],
    el: '#hello',
    data: {
        msg: "Hello Silex - PHP Conference",
        peoples: [
            {name: "Michael Douglas Barbosa Araujo"},
            {name: "Levina Do Nascimento Passos"},
            {name: "Maria Silvania Barbosa"}
        ]
    }
});