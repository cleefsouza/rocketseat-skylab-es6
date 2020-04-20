import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[id=repository]')
        this.ulEl = document.getElementById('repo-list');
        this.registerHandle();
    }

    registerHandle() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Carregando ...'));
            loadEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0 ) {
            return;
        }

        this.setLoading();

        try {
            const response = await api.get(`repos/${repoInput}`);

            const { 
                name,
                description,
                html_url,
                owner: { avatar_url }
            } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }

        this.setLoading(false);
    }

    render() {
        this.ulEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let itemEl = document.createElement('li');
            itemEl.appendChild(imgEl);
            itemEl.appendChild(titleEl);
            itemEl.appendChild(descEl);
            itemEl.appendChild(linkEl);

            this.ulEl.appendChild(itemEl);
        });
    }
}

new App();