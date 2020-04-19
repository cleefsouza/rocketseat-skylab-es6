class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Cleef Souza';
    }

    soma(a, b) {
        return a + b;
    }
}

const MinhaLista = new TodoList();

document.getElementById('newTodo')
    .onclick = () => {
        MinhaLista.add('New todo');

        let resultado = MinhaLista.soma(5, 2);
        console.log(`Resultado: ${resultado}`);
    }