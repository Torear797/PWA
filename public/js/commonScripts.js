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

function actionRSA(Choice) {
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
            showToast("Введите текст для шифрования");
            document.getElementById("InputText").focus();
        }
    } else {
        showToast("Ключи заполнены некорректно");
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
        showToast("Вы зашли с приложения PWA");
    } else
        showToast("Вы зашли на сайт")
}

function checkSupportPWA() {
    if ('serviceWorker' in navigator)
        showToast("Ваше устройство поддерживает PWA");
    else showToast("Ваше устройство не поддерживает PWA");
}

/*AES*/
function ClickAES(Choice) {
    // 0 - кодировать, 1 - декодировать
    const inputText = document.getElementById("InputText").value;
    if (inputText.length > 0) {
        NewClick();
        let password = document.getElementById("password").value;

        if (password === "") {
            showToast("Введите пароль");
            document.getElementById("password").focus();
            return;
        }

        switch (Choice) {
            case 0: {
                document.getElementById("CryptText").value = CryptoJS.AES.encrypt(inputText, password);
                break;
            }
            case 1: {
                const decrypted = CryptoJS.AES.decrypt(inputText, password);
                document.getElementById("CryptText").value = decrypted.toString(CryptoJS.enc.Utf8);
                break;
            }
        }
        if (document.getElementById("CryptText").value !== "") {
            document.getElementById("CryptText").focus();
            document.getElementById("CryptText").parentNode.classList.add('is-dirty');
        }
        setCharCounter(true);
    } else {
        showToast("Текст не введен");
        document.getElementById("InputText").focus();
    }
}

function ClickBase64(Choice) {
    // 0 - кодировать, 1 - декодировать
    const inputText = document.getElementById("InputText").value;
    if (inputText.length > 0) {
        NewClick();
        switch (Choice) {
            case 0: {
                document.getElementById("CryptText").value = utf8_to_b64(inputText);
                break
            }
            case 1: {
                document.getElementById("CryptText").value = b64_to_utf8(inputText);
                break
            }
        }
        document.getElementById("CryptText").focus();
        document.getElementById("CryptText").parentNode.classList.add('is-dirty');
        setCharCounter();
    } else {
        showToast("Введите текст");
        document.getElementById("InputText").focus();
    }
}

function ClickMathSystem() {
    const inputText = document.getElementById("InputText").value;
    const sys1 = document.getElementById("sys1").value;
    const sys2 = document.getElementById("sys2").value;
    if (inputText.length !== "" && sys1 !== "" && sys2 !== "") {
        document.getElementById('hash_answers').innerHTML = "<p>Результат: " + parseInt(inputText, sys1).toString(sys2) + "</p>";
    } else {
        if (inputText === "") {
            showToast("Введите число");
            document.getElementById("InputText").focus();
            return;
        }

        if (sys1 === "") {
            showToast("Введите начальную систему счисления");
            document.getElementById("sys1").focus();
            return;
        }

        if (sys2 === "") {
            showToast("Введите конечную систему счисления");
            document.getElementById("sys2").focus();
        }
    }
}

function ClickQR() {
    const inputText = document.getElementById("InputText").value;
    if (inputText.length > 0) {
        createQRCode(inputText);
        setCharCounter();
    } else {
        showToast("Введите текст");
        document.getElementById("InputText").focus();
    }
}

function createQRCode(text) {
    const qrCodeOutput = document.getElementById("qrCodeOutput");
    qrCodeOutput.innerHTML = "";
    qrCodeOutput.append(QRCode.generateHTML(text, {}));
}

function ClickSHA(Choice) {
    // 0 - кодировать, 1 - декодировать
    const inputText = document.getElementById("InputText").value;
    if (inputText.length > 0) {
        if (Choice === 0) {
            let text = "";
            text += "<p>SHA 224: " + CryptoJS.SHA224(inputText) + "<p>";
            text += "<p>SHA 256: " + CryptoJS.SHA256(inputText) + "<p>";
            text += "<p>SHA 384: " + CryptoJS.SHA384(inputText) + "<p>";
            text += "<p>SHA 512: " + CryptoJS.SHA512(inputText) + "<p>";
            text += "<p>SHA 3: " + CryptoJS.SHA3(inputText);
            document.getElementById('hash_answers').innerHTML = text;
        }
        setCharCounter();
    } else {
        showToast("Введите текст");
        document.getElementById("InputText").focus();
    }
}

function ClickTimeStamp(Choice) {
    // 0 - кодировать, 1 - декодировать
    const inputText = document.getElementById("InputText").value;
    NewClick();

    switch (Choice) {
        case 0: {
            let value = "";
            if (inputText.length > 0)
                value = String(Date.parse(inputText) / 1000);
            else
                value = String(Date.now() / 1000);

            document.getElementById("CryptText").value = value;
            break;
        }
        case 1: {
            let date = 0;

            if (inputText.length > 0)
                date = (new Date(Number.parseInt(inputText) * 1000)).format('yyyy-mm-dd hh:MM:ss');
            else
                date = (new Date()).format('yyyy-mm-dd hh:MM:ss');

            document.getElementById("CryptText").value = date;
            break;
        }
    }

    document.getElementById("CryptText").focus();
    document.getElementById("CryptText").parentNode.classList.add('is-dirty');
    setCharCounter();
}

Date.prototype.format = function (format = 'yyyy-mm-dd') {
    const replaces = {
        yyyy: this.getFullYear(),
        mm: ('0' + (this.getMonth() + 1)).slice(-2),
        dd: ('0' + this.getDate()).slice(-2),
        hh: ('0' + this.getHours()).slice(-2),
        MM: ('0' + this.getMinutes()).slice(-2),
        ss: ('0' + this.getSeconds()).slice(-2)
    };
    let result = format;
    for (const replace in replaces) {
        result = result.replace(replace, replaces[replace]);
    }
    return result;
};

function fileActionAES(action = 0, file, password = '') {
    const reader = new FileReader();
    if (action === 0) {
        reader.onload = function (e) {
            const encrypted = CryptoJS.AES.encrypt(e.target.result, password);
            const link = document.createElement('a');
            link.setAttribute('href', 'data:application/octet-stream,' + encrypted);
            link.setAttribute('download', file.name + '.encrypted');
            link.click();
        };

        reader.readAsDataURL(file);
    } else if (action === 1) {
        reader.onload = function (e) {
            const decrypted = CryptoJS.AES.decrypt(e.target.result, password)
                .toString(CryptoJS.enc.Utf8);
            const link = document.createElement('a');
            link.setAttribute('href', decrypted);
            link.setAttribute('download', file.name.replace('.encrypted', ''));
            link.click();
        };
        reader.readAsText(file);
    }
}

function fileActionBase64(action = 0, file) {
    const reader = new FileReader();
    console.log(action);
    if (action === 0) {
        reader.onload = function (e) {
            const encrypted = utf8_to_b64(e.target.result);
            const link = document.createElement('a');
            link.setAttribute('href', 'data:application/octet-stream,' + encrypted);
            link.setAttribute('download', file.name + '.encrypted');
            link.click();
        };
        reader.readAsDataURL(file);
    } else if (action === 1) {
        reader.onload = function (e) {
            const decrypted = b64_to_utf8(e.target.result).toString();
            const link = document.createElement('a');
            link.setAttribute('href', decrypted);
            link.setAttribute('download', file.name.replace('.encrypted', ''));
            link.click();
        };
        reader.readAsText(file);
    }
}

function fileActionSHA(action = 0, file) {
    const reader = new FileReader();
    if (action === 0) {
        reader.onload = function (e) {
            let text = "";
            text += "<p>SHA 224: " + CryptoJS.SHA224(e.target.result) + "<p>";
            text += "<p>SHA 256: " + CryptoJS.SHA256(e.target.result) + "<p>";
            text += "<p>SHA 384: " + CryptoJS.SHA384(e.target.result) + "<p>";
            text += "<p>SHA 512: " + CryptoJS.SHA512(e.target.result) + "<p>";
            text += "<p>SHA 3: " + CryptoJS.SHA3(e.target.result);
            document.getElementById('hash_answers').innerHTML = text;
        };
        reader.readAsDataURL(file);
    }
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    try {
        return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
        return "Error";
    }
}

function closeMenu() {
    document.querySelector(".mdl-layout__obfuscator").click();
}

function setPageMarkers(oldId, newId) {
    let oldMenuItem = document.getElementById("menu_" + oldId);
    if (oldMenuItem) oldMenuItem.classList.remove('menuItemSelected');

    let newMenuItem = document.getElementById("menu_" + newId);
    if (newMenuItem) newMenuItem.classList.add('menuItemSelected');

    let oldNavigationTab = document.getElementById("nav_" + oldId)
    let nextNavigationTab = document.getElementById("nav_" + newId)

    if (oldNavigationTab) oldNavigationTab.classList.remove('navigationIsSelect');
    if (nextNavigationTab) nextNavigationTab.classList.add('navigationIsSelect');
}

function load_js() {
    const head = document.getElementsByTagName('head')[0];

    if (!(typeof (componentHandler) == 'undefined')) {
        componentHandler.upgradeAllRegistered();
    }

    if (document.getElementById("DragAndDropScript") !== undefined) {
        head.removeChild(document.getElementById("DragAndDropScript"));
    }

    const script = document.createElement('script');
    script.src = 'public/js/DragAndDropScript.js';
    script.id = 'DragAndDropScript';
    head.appendChild(script);
}

function setTitle(id) {
    let pageTitle;

    switch (id) {
        case "home": {
            pageTitle = "Главная";
            break;
        }
        case "base64Form": {
            pageTitle = "Base 64";
            break;
        }
        case "mathFunc": {
            pageTitle = "Математические функции";
            break;
        }
        case "mathSystems": {
            pageTitle = "Системы счисления";
            break;
        }
        case "qr": {
            pageTitle = "Генератор QR";
            break;
        }
        default : {
            pageTitle = id;
        }
    }
    document.title = "Шифрование онлайн | " + pageTitle;
    document.getElementById("title").innerHTML = pageTitle;
}