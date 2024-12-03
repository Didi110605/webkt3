class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Создание контейнера для карточки
        const card = document.createElement('div');
        card.classList.add('card');

        // Добавление шаблонов в карточку
        const headerTemplate = this.querySelector('template[slot="header"]');
        if (headerTemplate) {
            const headerContent = headerTemplate.content.cloneNode(true);
            const header = document.createElement('header');
            header.appendChild(headerContent);
            card.appendChild(header);
        }

        const contentTemplate = this.querySelector('template[slot="content"]');
        if (contentTemplate) {
            const contentContent = contentTemplate.content.cloneNode(true);
            const content = document.createElement('div');
            content.appendChild(contentContent);
            card.appendChild(content);
        }

        // Добавляем стили
        const style = document.createElement('style');
        style.textContent = `
            .card {
                display: block;
                border: 1px solid #ccc;
                border-radius: 8px;
                margin: 16px;
                padding: 16px;
                background-color: #f9f9f9;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            header {
                margin-bottom: 12px;
            }
            h2 {
                margin: 0;
                font-size: 1.5rem;
                color: #333;
            }
            p {
                margin: 0;
                color: #555;
            }
        `;

        // Добавление стилей и карточки в теневой DOM
        shadow.appendChild(style);
        shadow.appendChild(card);
    }
}

// Определяем новый элемент
customElements.define('card-component', CardComponent);
