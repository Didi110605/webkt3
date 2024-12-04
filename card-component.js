class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const card = document.createElement('div');
        
        // Добавление заголовка
        const header = this.querySelector('template[slot="header"]');
        if (header) {
            card.appendChild(header.content.cloneNode(true));
        }

        // Добавление контента
        const content = this.querySelector('template[slot="content"]');
        if (content) {
            card.appendChild(content.content.cloneNode(true));
        }

        shadow.appendChild(card);
    }
}

customElements.define('card-component', CardComponent);

// Определяем новый элемент
customElements.define('card-component', CardComponent);
