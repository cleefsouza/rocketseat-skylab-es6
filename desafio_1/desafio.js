/**
 * Exe 1
 */

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
}

const User = new Usuario('usuario@email.com', 'usuario123');
const Adm = new Admin('admin@email.com', 'admin123');

console.log(User.isAdmin()); // Out: false
console.log(Adm.isAdmin()); // Out: true

/**
 * Exe 2
 */

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const idades = usuarios.map(item => item.idade);
console.log(idades); // Out: [23, 15, 30]

// 2.2
const rocketseat = usuarios.filter(item => item.empresa === 'Rocketseat');
console.log(rocketseat); // Out: {nome: "Diego", idade: 23, empresa: "Rocketseat"}, {nome: "Gabriel", idade: 15, empresa: "Rocketseat"}

// 2.3
const google = usuarios.find(item => item.empresa === 'Google');
console.log(google); // Out: undefined

// 2.4
const dobroIdade = usuarios.map((item) => {
    item.idade *= 2;
    return item;
});

const maxIdade = dobroIdade.filter(item => item.idade <= 50);
console.log(maxIdade); // Out: {nome: "Diego", idade: 46, empresa: "Rocketseat"}, {nome: "Gabriel", idade: 30, empresa: "Rocketseat"}

/**
 * Exe 3
 */

 // 3.1
const arr = [1, 2, 3, 4, 5];
const maisDez = arr.map(item => item + 10);

console.log(maisDez); // Out: 

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;

console.log(mostraIdade(usuario)); // Out: 

// 3.3
const meuNome = "Diego";
const minhaIdade = 23;

const mostraUsuario = (
        nome = 'Diego',
        idade = 18
    ) => ({ nome, idade });

console.log(mostraUsuario(meuNome, minhaIdade)); // Out: {nome: "Diego", idade: 23}
console.log(mostraUsuario(meuNome)); // Out: {nome: "Diego", idade: 18}

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

/**
 * Exe 4
 */

// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {
    nome,
    endereco: { cidade },
    endereco: { estado }
} = empresa;

console.log(nome); // Out: Rocketseat
console.log(cidade); // Out: Rio do Sul
console.log(estado); // Out: SC

// 4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(
    mostraInfo({nome: 'Diego', idade: 23})
); // Out: Diego tem 23 anos.

/**
 * Exe 5
 */

// 5.1
const [ x, ...y ] = [1, 2, 3, 4, 5, 6];
console.log(x, y); // Out: 1 [2, 3, 4, 5, 6]

const soma = (...params) => {
    return params.reduce((total, next) => total + next);
};

console.log(
    soma(1, 2, 3, 4, 5, 6)
    ); // Out: 21

console.log(
    soma(1, 2)
); // Out: 3

// 5.2
const usuarioX = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuarioY = { ...usuarioX, nome : 'Gabriel' };
const usuarioZ = {
    ...usuarioX,
    endereco: {
        ...usuarioX.endereco,
        cidade: 'Lontras'
    }
};

console.log(usuarioY);
console.log(usuarioZ);

/**
 * Exe 6
 */

console.log(`O usuário ${meuNome} possui ${minhaIdade} anos.`);

/**
 * Exe 7
 */

const nomeUser = 'Diego';
const idadeUser = 23;

const usuarioAux = {
    nomeUser,
    idadeUser,
    cidadeUser: 'Rio do Sul',
};

console.log(usuarioAux);