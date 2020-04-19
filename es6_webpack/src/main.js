/**
 * Exe 1
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