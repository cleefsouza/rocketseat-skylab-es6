## Rocketseat Skylab ES6+
Curso JavaScript ES6, 4 módulos | 22 aluas

#### Requisitos
- Node.js
- yarn

#### Dependências
- @babel/cli
- @babel/preset-env
- @babel/core
- @babel/plugin-proposal-object-rest-spread
- @babel/plugin-transform-async-to-generator
- @babel/polyfill
- babel-loader@8.0.0-beta.0
- webpack
- webpack-cli
- webpack-dev-server
- axios

#### Conceitos

##### EcmaScript
Empresa que decide e formula as novas funcionalidades e regras da linguagem **JavaScript**

##### Babel
Converte o código ES6+ para que todos os navegadores possam entender

##### Webpack
Servidor de desenvolvimento para quem desenvolve em JavaScript

#### Arquivos e Comandos

- Comando `yarn init` inicia o arquivo `package.json` que armazena as informações das dependências
- Pasta `node_modules` armazena todas as dependências do projeto
- Configurando **babel**, aquivo `.babelrc`:
    ```javascript
    {
        "presets" : ["@babel/preset-env"],
        "plugins": [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-async-to-generator"
        ]
    }
    ```

- Gerando o arquivo `bundle.js`, adicionar comandos dentro do arquivo `pacakge.json`:
    ```javascript
    "scripts" : {
        "dev": "webpack-dev-server --mode=development",
        "build": "webpack --mode=production"
    }
    ```

- Configurando **webpack**, arquivo `webpack.config.js`:
    ```javascript
    module.exports = {
        entry: [
            '@babel/polyfill',
            './src/main.js',
        ],
        output: {
            path: __dirname + '/public',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: __dirname + '/public'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    };
    ```

#### Features

- Classes, contrutores e métodos
    ```javascript
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
    ```

- Constantes e variaveis de escopo
    ```javascript
    const CONSTANTE = 1; // Não pode ter seu valor reatribuido

    function escopo(x) {
        let varEscopo = 2; // Let: variavel só poderá ser utilizada dentro do escopo da função
    }
    ```

- Operações com array
    ```javascript
    const arr = [1, 2, 3, 4, 5];

    // Percorre o vetor e retorna uma ação
    arr.map(function(item, index){
        return item * 2; // Out: [2, 4, 6, 8, 10]
    });

    // Consome todo o vetor e transforma em uma unica informação
    arr.reduce(function(total, next){
        return total + next; // Out: 15
    });

    // Filtra os valores dentro do vetor de acordo com a condição passada
    arr.filter(function(item){
        return item % 2 === 0; // Out: [2, 4]
    });

    // Buscar uma informação dentro do vetor
    arr.find(function(item){
        return item === 4; // Out: 4
    });
    ```

- Arrow Functions
    ```javascript
    const arr = [1, 2, 3, 4, 5];

    /**
     * () => {}
     */

    // Um parametro
    const par = arr.filter(item => {
        return item % 2 === 0; // Out: [2, 4]
    });

    // Mais de um parametro
    const impar = arr.filter((item, index) => {
        return item % 2 !== 0; // Out: [1, 3, 5]
    });

    // Um parametro e um retorno
    const sub = arr.filter(item => item - 5); // Out: [1, 2, 3, 4]
    ```

- Desestruturação
    ```javascript
    /**
     * [] para vetores
     * {} para objetos
     */

    const usuario = {
        nome: 'Cleef',
        idade: 24,
        endecero: {
            cidade: 'Santa Rita',
            estado: 'PB'
        },
    };

    const { nome, idade } = usuario; // Desestruturando

    console.log(nome, usuario); // Out: Diego 23
    ```

- Rest e Spread
    ```javascript
    const arr = [1, 2, 3, 4, 5];

    /**
     * Usa-se "..." para utilizar o conceito de REST
     */

    const [ a, b, ...resto ] = arr;

    console.log(a, b, resto); // Out: 1 2 [3, 4, 5]
    ```

    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const arr3 = [...arr1, ...arr2]; // Unindo dois vetores utilizando SPREAD

    console.log(arr3); // Out: [1, 2, 3, 4, 5, 6]
    ```

- Template Literals
    ```javascript
        const nome = 'Cleef';
        const idade = 24;

        console.log(`Meu nome é ${nome} e eu tenho ${idade} anos de idade.`); // Out: Meu nome é Cleef e eu tenho 24 anos de idade.
        ```

- Async e Await - [Info](https://javascript.info/async-await)
    ```javascript
    const minhaPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Minha Promise!');
        }, 2000);
    });

    // Async e Await
    async function executaPromise() {
        const response = await minhaPromise();

        console.log(response);
    }

    executaPromise();
    ```

- Axios - [Info](https://github.com/axios/axios)
    ```javascript
    import axios from 'axios';

    class Api {
        static async getUserInfo(username) {
            try {
                const response = await axios.get(
                    `http://api.github.com/users/${username}`
                );

                console.log(response.data);
            } catch (err) {
                console.warn('Erro aos buscar usuário!');
            }
        }
    }

    Api.getUserInfo('cleefsouza');
    ```