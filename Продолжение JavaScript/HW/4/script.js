"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в 
// span. То есть при печати в input'е тег span также должен меняться.
const fromInput = document.querySelector('#from');
const spanElement = document.querySelector('span');

fromInput.addEventListener('input', () => {
    spanElement.textContent = fromInput.value;
});

 /* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */
const messageBtn = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');

messageBtn.addEventListener('click', () => {
    messageElement.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageElement.style.visibility = 'visible';
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо
 поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля
  (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо 
  поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */
const form = document.querySelector('form');
const formControls = form.querySelectorAll('.form-control');

form.addEventListener('submit', event => {
    let formValid = true;

    formControls.forEach(control => {
        if (control.value.trim() === '') {
            control.classList.add('error');
            formValid = false;
        } else {
            control.classList.remove('error');
        }
    });

    if (!formValid) {
        event.preventDefault();
    }
});

formControls.forEach(control => {
    control.addEventListener('input', () => {
        if (control.value.trim() === '') {
            control.classList.add('error');
        } else {
            control.classList.remove('error');
        }
    });
});