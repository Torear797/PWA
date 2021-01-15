function copyToClipboard() {
    if (document.getElementById("CryptText").value.length > 0) {
        document.getElementById("CryptText").select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        showToast("Текст скопирован");
    }
}

function setCharCounter(isPassword = false) {
    const inputField = document.getElementById("InputText").value.length;
    let outputField = document.getElementById("CryptText");
    if (outputField !== null)
        outputField = outputField.value.length;

    const inputLabel = document.getElementById("LabelText");
    const outputLabel = document.getElementById("CryptLabel");

    if (outputField !== null)
        outputLabel.innerHTML = "Результат" + " (" + outputField + ")";

    inputLabel.innerHTML = "Текст" + " (" + inputField + ")";

    if (isPassword) {
        const passField = document.getElementById("password").value.length;
        const passLabel = document.getElementById("password_label");
        passLabel.innerHTML = "Пароль" + " (" + passField + ")";
    }
}

function NewClick() {
    document.getElementById("CryptText").value = "";
}

function ClearFields(isPassword = false) {
    const cryptText = document.getElementById("CryptText");
    const inputText = document.getElementById("InputText");

    if (inputText.value !== '') {
        if(cryptText !== null && cryptText.value !== ''){
            cryptText.value = '';
            cryptText.blur();
            cryptText.parentNode.classList.remove('is-dirty');
        }

        inputText.value = '';
        inputText.blur();
        inputText.parentNode.classList.remove('is-dirty');

        if (isPassword) {
            const password = document.getElementById("password");
            password.value = '';
            password.blur();
            password.parentNode.classList.remove('is-dirty');
        }

        setCharCounter(isPassword);
        showToast("Поля очищены");
    }
}

function showToast(text) {
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: text});
}