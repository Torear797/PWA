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

function generateRSAKeys() {
    //var sKeySize = $('#key-size').attr('data-value');
    //var keySize = parseInt(sKeySize);

    var crypt = new JSEncrypt({default_key_size: 512});
    crypt.getKey();
    document.getElementById("public-key").value = crypt.getPublicKey();
    document.getElementById("private-key").value = crypt.getPrivateKey();
}

function actionRSA(Choice, isFile = false) {
    // 0 - кодировать, 1 - декодировать

    const inputText = document.getElementById("InputText").value;
    const cryptedText = document.getElementById("CryptText").value;

    var publicKey = document.getElementById("public-key").value;
    var privateKey = document.getElementById("private-key").value;

    switch (Choice) {
        case 0: {
            if (publicKey !== '' && inputText !== '') {
                var encrypt = new JSEncrypt();
                encrypt.setPublicKey(publicKey);
                var encrypted = encrypt.encrypt(inputText);
                document.getElementById("CryptText").value = encrypted.toString();
            } else {
                document.getElementById("public-key").parentNode.classList.add('is-dirty');
            }
            break;
        }
        case 1: {
            if (privateKey !== '' && cryptedText !== '') {
                var decrypt = new JSEncrypt();
                decrypt.setPrivateKey(privateKey);
                var decrypted = decrypt.decrypt(cryptedText);
                document.getElementById("CryptText").value = decrypted.toString();
            } else {
                document.getElementById("private-key").parentNode.classList.add('is-dirty');
            }
            break;
        }
    }
    if (document.getElementById("CryptText").value !== "") {
        document.getElementById("CryptText").focus();
        document.getElementById("CryptText").parentNode.classList.add('is-dirty');
    }
    // setCharCounter(true);
}