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

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const divDois = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(divDois);

const busca = arr.find(function(item){
    return item === 4;
});

console.log(busca);

/**
 * Arrow Function
 */

const par = arr.filter(item => {
    return item % 2 === 0;
});

const impar = arr.filter((item, index) => {
    return item % 2 !== 0;
});

const sub = arr.filter(item => item - 5);

console.log(par, impar, sub);

const usuario = {
    nome: 'Diego',
    idade: 23,
    endecero: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
};

const { nome, idade } = usuario;

console.log(nome, idade);

const [ a, b, ...resto ] = arr; // Usa-se "..." para utilizar o conceito de REST 

console.log(a, b, resto);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const meuNome = 'Cleef';
const minhaIdade = 24;

console.log(`Meu nome é ${meuNome} e eu tenho ${minhaIdade} anos de idade.`);
