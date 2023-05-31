const BoxColorToggle = {
    selectors: {
        checkbox: '[data-color-toggle]',
        box: 'box__item',
        boxDark: 'box--dark'
    },

    init: function () {
        document.querySelector(this.selectors.checkbox).addEventListener('change', (e) => this._eventCheckboxChange(e));
    },

    /**
     * Событие изменения (нажатия) чекбокса
     * @param {} event 
     */
    _eventCheckboxChange: function (event) {
        const boxes = document.querySelectorAll(`.${this.selectors.box}`);

        if (event.target.checked) {
            this.add(boxes);
        } else {
            this.remove(boxes);
        }
    },

    /**
     * Добавляем стили к коробкам
     */
    add: function (boxes) {
        Array.from(boxes).forEach(box => box.classList.add(this.selectors.boxDark));
    },

    /**
     * Удаляем стили у коробок
     */
    remove: function(boxes) {
        Array.from(boxes).forEach(box => box.classList.remove(this.selectors.boxDark));
    }
}

const Popup = {
    selectors: {
        box: 'box__item',
        popup: 'box-popup',
        popupWrap: 'box-popup__wrap',
        popupBtnClose: 'box-popup__close',
        popupInfo: 'box-popup__info'
    },

    init: function () {
        this.initEvents();
    },

    initEvents: function() {
        const self = this;

        document.addEventListener('click', e => {
            if (e.target.classList.contains(self.selectors.box)) {
                this.open(e)
            }

            if(e.target.classList.contains(self.selectors.popup)) {
                this.close();
            }
        });

        document.querySelector(`.${this.selectors.popupBtnClose}`).addEventListener('click', (e) => this.close(e));
    },

    open: function (event) {
        const popup = document.querySelector(`.${this.selectors.popup}`);

        popup.querySelector(`.${this.selectors.popupInfo}`).innerHTML = event.target.innerHTML;
        popup.classList.add('open');
    },

    close: function (event) {
        const popup = document.querySelector(`.${this.selectors.popup}`);

        popup.classList.remove('open');
    },
}

const addBox = {
    selectors: {
        box: 'box__item',
        boxWrap: 'box__wrap',
        btn: 'buttons__item'
    },

    init: function () {
        document.querySelector(`.${this.selectors.btn}`).addEventListener('click', () => {
            const countBoxes = document.querySelectorAll(`.${this.selectors.box}`).length + 1;
            const cloneBox = document.querySelector(`.${this.selectors.boxWrap}`).appendChild(document.querySelector(`.${this.selectors.box}`).cloneNode());
            cloneBox.innerHTML = 'Коробка' + countBoxes;
        })
    }
}

window.addEventListener('DOMContentLoaded', function() {
    BoxColorToggle.init();

    Popup.init();

    addBox.init();
})