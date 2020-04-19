/**
 * Desafio 1
 * Exercício
 */

import Usuario, { Usuario as ClasseUsuario, idade as IdadeUsuario} from "./desafio_1/functions";

Usuario.info();
console.log('Idade: ', IdadeUsuario)

/**
 * Async
 * Await
 */

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Minha Promise!');
    }, 2000);
});

async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();

/**
 * Axios
 */

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

/**
 * Desafio 2
 * Exercício
 */

// Funão delay aciona o .then após 1s
const delay = () => new Promise(
    resolve => setTimeout(resolve, 1000)
);

async function umPorSegundo() {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}

umPorSegundo();

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(
            `http://api.github.com/users/${user}`
        );

        console.log(response.data);
    } catch (err) {
        console.warn('Erro aos buscar usuário!');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data)
        } catch (err) {
            console.warn('Respositório não encontrado')
        }
    }
}

Github.getRepositories('cleefsouza/rocketseat-skylab-es6');
Github.getRepositories('cleefsouza/este-nao-existe');
