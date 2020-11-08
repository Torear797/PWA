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
    const outputField = document.getElementById("CryptText").value.length;

    const inputLabel = document.getElementById("LabelText");
    const outputLabel = document.getElementById("CryptLabel");

    if (outputField !== 0) {
        outputLabel.innerHTML = "Результат" + " (" + outputField + ")";
    } else {
        outputLabel.innerHTML = "Результат";
    }

    if (inputField !== 0) {
        inputLabel.innerHTML = "Текст" + " (" + inputField + ")";
    } else {
        inputLabel.innerHTML = "Текст";
    }

    if (isPassword) {
        const passField = document.getElementById("password").value.length;
        const passLabel = document.getElementById("password_label");
        if (passField !== 0)
            passLabel.innerHTML = "Пароль" + " (" + passField + ")";
        else
            passLabel.innerHTML = "Пароль";
    }
}

function NewClick() {
    document.getElementById("CryptText").value = "";
}

function ClearFields(isPassword = false) {
    var cryptText = document.getElementById("CryptText");
    var inputText = document.getElementById("InputText");

    if(cryptText.value !== '' || inputText.value !== '') {
        cryptText.value = '';
        inputText.value = '';
        inputText.blur();
        cryptText.blur();

        cryptText.parentNode.classList.remove('is-dirty');
        inputText.parentNode.classList.remove('is-dirty');

        if(isPassword) {
            var password = document.getElementById("password");
            password.value = '';
            password.blur();
            password.parentNode.classList.remove('is-dirty');
        }

        setCharCounter(true);
        showToast("Поля очищены");
    }
}


function showToast(text) {
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message: text});
}

// var oldVal = "";
// var handle;
//
// $("#InputText").on("change keyup paste", function() {
//     if(handle)
//     clearTimeout(handle);
//     var currentVal = $(this).val();
//     if(currentVal === oldVal) {
//         return;
//     }
//     oldVal = currentVal;
//
//     handle = setTimeout(
//         () => {
//          Click(0);
//         },
//         800
//     );
// });