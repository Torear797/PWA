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

function setCharCounterRSA() {
    const outputField = document.getElementById("CryptText");
    const inputField = document.getElementById("InputText");

    const public_key = document.getElementById("public_key");
    const private_key = document.getElementById("private_key");

    if (inputField !== null) {
        const inputtLabel = document.getElementById("LabelText");
        inputtLabel.innerHTML = "Текст" + " (" + inputField.value.length + ")";
    }

    if (outputField !== null) {
        const outputLabel = document.getElementById("CryptLabel");
        outputLabel.innerHTML = "Результат" + " (" + outputField.value.length + ")";
    }

    if (public_key !== null) {
        const publicKeyLabel = document.getElementById("public-key-label");
        publicKeyLabel.innerHTML = "Открытый ключ" + " (" + public_key.value.length + ")";
    }

    if (private_key !== null) {
        const privateKeyLabel = document.getElementById("private-key-label");
        privateKeyLabel.innerHTML = "Секретный ключ" + " (" + private_key.value.length + ")";
    }

}

function NewClick() {
    document.getElementById("CryptText").value = "";
}

function ClearFields(isPassword = false) {
    const cryptText = document.getElementById("CryptText");
    const inputText = document.getElementById("InputText");

    if (inputText.value !== '') {
        if (cryptText !== null && cryptText.value !== '') {
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

function ClearFieldsRSA() {
    const cryptText = document.getElementById("CryptText");
    const inputText = document.getElementById("InputText");

    const public_key = document.getElementById("public_key");
    const private_key = document.getElementById("private_key");

    if ((cryptText !== null && cryptText.value !== '') ||
        (public_key !== null && public_key.value !== "") ||
        (private_key !== null && private_key.value !== "") || (inputText !== null && inputText.value !== "")) {

        if (public_key !== null && public_key.value !== "") {
            public_key.value = '';
            public_key.blur();
            public_key.parentNode.classList.remove('is-dirty');
        }

        if (private_key !== null && private_key.value !== "") {
            private_key.value = '';
            private_key.blur();
            private_key.parentNode.classList.remove('is-dirty');
        }

        if (inputText !== null && inputText.value !== "") {
            inputText.value = '';
            inputText.blur();
            inputText.parentNode.classList.remove('is-dirty');
        }

        if (cryptText !== null && cryptText.value !== '') {
            cryptText.value = '';
            cryptText.blur();
            cryptText.parentNode.classList.remove('is-dirty');
        }

        setCharCounterRSA();
        showToast("Поля очищены");
    }
}

function showToast(text) {
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: text});
}

function generateRSAKeys() {
    const crypt = new JSEncrypt({default_key_size: 512});
    crypt.getKey();
    document.getElementById("public_key").value = crypt.getPublicKey();
    document.getElementById("private_key").value = crypt.getPrivateKey();

    document.getElementById("private-key-label").parentNode.classList.add('is-dirty');
    document.getElementById("public-key-label").parentNode.classList.add('is-dirty');

    setCharCounterRSA()
}

function actionRSA(Choice, isFile = false) {
    // 0 - кодировать, 1 - декодировать

    const inputText = document.getElementById("InputText").value;
    const cryptText = document.getElementById("CryptText");

    const publicKey = document.getElementById("public_key").value;
    const privateKey = document.getElementById("private_key").value;

    switch (Choice) {
        case 0: {
            if (publicKey !== '' && inputText !== '' && privateKey !== '' && cryptText.value !== null) {
                const encrypt = new JSEncrypt();
                encrypt.setPublicKey(publicKey);
                const encrypted = encrypt.encrypt(inputText);
                cryptText.value = encrypted.toString();
            }
            break;
        }
        case 1: {
            if (privateKey !== '' && publicKey !== '' && inputText !== '' && cryptText.value !== null) {
                const decrypt = new JSEncrypt();
                decrypt.setPrivateKey(privateKey);
                const decrypted = decrypt.decrypt(inputText);
                cryptText.value = decrypted.toString();
            }
            break;
        }
    }

    if (cryptText.value !== "" && cryptText.value !== null) {
        cryptText.focus();
        cryptText.parentNode.classList.add('is-dirty');
    }
    setCharCounterRSA()
}