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
    const lengthKey = document.getElementById("lengthKey");

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

    if (lengthKey !== null) {
        const lengthKeyLabel = document.getElementById("lengthKeyLabel");
        lengthKeyLabel.innerHTML = "Длина ключей (бит)" + " (" + lengthKey.value.length + ")";
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

    const lengthKey = document.getElementById("lengthKey");

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

        if (lengthKey !== null && lengthKey.value !== "") {
            lengthKey.value = '';
            lengthKey.blur();
            lengthKey.parentNode.classList.remove('is-dirty');
        }

        setCharCounterRSA();
        showToast("Поля очищены");
    }
}

function showToast(text) {
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: text});
}

function generateRSAKeys() {
    const lengthKey = document.getElementById("lengthKey").value;
    if (lengthKey !== null && lengthKey !== "") {
        if (!parseInt(lengthKey)) {
            showToast("Длина ключей задана не верно!");
        } else {
            const crypt = new JSEncrypt({default_key_size: lengthKey});
            crypt.getKey();
            document.getElementById("public_key").value = crypt.getPublicKey();
            document.getElementById("private_key").value = crypt.getPrivateKey();

            document.getElementById("private-key-label").parentNode.classList.add('is-dirty');
            document.getElementById("public-key-label").parentNode.classList.add('is-dirty');

            setCharCounterRSA()
        }
    } else {
        showToast("Длина ключей не введена!");
        document.getElementById("lengthKey").focus();
    }
}

function actionRSA(Choice, isFile = false) {
    // 0 - кодировать, 1 - декодировать

    const inputText = document.getElementById("InputText").value;

    const publicKey = document.getElementById("public_key").value;
    const privateKey = document.getElementById("private_key").value;

    if (publicKey !== null && privateKey !== null && publicKey !== "" && privateKey !== "") {
        if (inputText !== null && inputText !== "") {
            const cryptText = document.getElementById("CryptText");
            if (cryptText.value !== null) {

                switch (Choice) {
                    case 0: {
                        const encrypt = new JSEncrypt();
                        encrypt.setPublicKey(publicKey);
                        const encrypted = encrypt.encrypt(inputText);
                        if (encrypted !== null) {
                            cryptText.value = encrypted.toString();
                        }
                        break;
                    }
                    case 1: {
                        const decrypt = new JSEncrypt();
                        decrypt.setPrivateKey(privateKey);
                        const decrypted = decrypt.decrypt(inputText);
                        if (decrypted !== null) {
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
        } else {
            showToast("Текст для шифрования не введен!");
            document.getElementById("InputText").focus();
        }
    } else {
        showToast("Ключи заполнены некорректно!");
    }
}

/*Математические функции*/
function ClickMathFunc() {
    const inputText = document.getElementById("InputText").value;
    if (inputText !== "") {
        if (parseInt(inputText) || parseFloat(inputText)) {
            let text = "";
            text += "<p>x * π / 180 = " + (inputText * Math.PI) / 180 + "</p>";
            text += "<p>x * 180 / π = " + (inputText * 180) / Math.PI + "</p>";

            text += "<br><p>sin x = " + Math.sin(inputText * Math.PI / 180) + "</p>";
            text += "<p>cos x = " + Math.cos(inputText * Math.PI / 180) + "</p>";
            text += " <p>tg x = " + Math.tan(inputText * Math.PI / 180) + "</p>";

            text += "<p>arcsin x = " + radToDeg(Math.asin(inputText)) + "</p>";
            text += "<p>arccos x = " + radToDeg(Math.acos(inputText)) + "</p>";
            text += "<p>arctg x = " + radToDeg(Math.atan(inputText)) + "</p>";

            text += "<br><p>e^x = " + Math.exp(inputText) + "</p>";
            text += "<p>log e^x = " + Math.log(inputText) + "</p>";
            text += "<p>√ x = " + Math.sqrt(inputText) + "</p>";
            text += "<p>1 / x = " + 1 / inputText + "</p>";

            document.getElementById('hash_answers').innerHTML = text;
        } else {
            showToast("Введите число!")
        }
    } else {
        showToast("Значение не введено!")
        document.getElementById("InputText").focus();
    }
}

function radToDeg(rad) {
    return rad / Math.PI * 180;
}

function checkPWA() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        alert("Вы зашли с приложения PWA");
    } else
        alert("Вы зашли на сайт");
}

function checkSupportPWA() {
    if ('serviceWorker' in navigator)
        alert("Ваше устройство поддерживает PWA");
    else alert("Ваше устройство не поддерживает PWA");
}