const validators = {
    name: /[a-zа-яеё]/i,
    phone: /^\+7\(\d{3}\)\d{3}\-\d{4}$/,
    email: /\S+@\S+\.\S+/,
    text: /^(?!\s*$).+/im,
}

const formErrorMessage = 'formErrorMessage';
const formErrorInput = 'formErrorInput';

const test = (regex, value) => {
    console.info(regex, '>', value, ' ====> ', regex.test(value));
    return regex.test(value);
}

const checkFields = (event) => {
    // отменяем поведение формы по умолчанию
    event.preventDefault();

    const errors = {};
    Array.from(event.target.elements).forEach((el) => {
        if (el && el.name) {
            el.classList.remove(formErrorInput);
            const messageDiv = el.parentElement.querySelector(`.${formErrorMessage}`);
            if (messageDiv) {
                el.parentElement.removeChild(messageDiv);
            }
            delete errors[el.name];

            const isValid = test(validators[el.name], el.value);
            if (!isValid) {
                const message = errors[el.name] = `поле ${el.placeholder} неверное`;
                el.classList.add(formErrorInput);
                // добавляем сообщение после соответствующего инпута
                const messageDiv = document.createElement('div');
                messageDiv.className = formErrorMessage;
                messageDiv.innerText = message;
                el.parentElement.appendChild(messageDiv);
            }
        }
    });

    // если на форме есть ошибки
    const failedElements = Object.keys(errors);
    if (!failedElements.length) {
        alert('Всё хорошо');
    }
}

document
    .getElementById('contacts_form')
    .addEventListener("submit", checkFields, false)
