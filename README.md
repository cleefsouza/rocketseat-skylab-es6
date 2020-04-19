## Rocketseat Skylab ES6+
Curso JavaScript ES6, 4 módulos | 22 aluas

#### Requisitos
- Node.js
- yarn

#### Dependências
- @babel/cli
- @babel/preset-env
- @babel/core

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
    ```json
    {
        "presets" : ["@babel/preset-env"] # converte automaticamento o código independente do ambiente trabalhado
    }
    ```

- Gerando o arquivo `bundle.js`, adicionar comandos dentro do arquivo `pacakge.json`:
    ```json
    "scripts" : {
        "dev" : "babel ./main.js -o ./bundle.js -w"
    }
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
