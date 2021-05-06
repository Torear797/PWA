'use strict';

;(function (document, window, index) {
    const isAdvancedUpload = function () {
        const div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();

    // applying the effect for every form
    const forms = document.querySelectorAll('.box');
    Array.prototype.forEach.call(forms, function (form) {
        let input = form.querySelector('input[type="file"]'),
            label = form.querySelector('label'),
            buttons = form.querySelector('#dad_buttons'),
            cancel = form.querySelector('#box_cancel'),
            encode = form.querySelector('#box_encode'),
            decode = form.querySelector('#box_decode'),
            passBlock = form.querySelector('#enterPassword'),
            passEdit = form.querySelector('#password_file'),
            SelectFiles = null,
            showFiles = function (files) {
                if (files.length > 1) {
                    label.textContent = files.length < 5 ? ((input.getAttribute('data-multiple-caption') || '').replace('{count}', files.length)).replace('{prefix}', "а") : ((input.getAttribute('data-multiple-caption') || '').replace('{count}', files.length)).replace('{prefix}', "ов");
                } else
                    label.textContent = files[0].name;

                SelectFiles = files;
                buttons.classList.remove('hidden');
                if (passBlock !== null)
                    passBlock.classList.remove('hidden');
            };

        // letting the server side to know we are going to make an Ajax request
        const ajaxFlag = document.createElement('input');
        ajaxFlag.setAttribute('type', 'hidden');
        ajaxFlag.setAttribute('name', 'ajax');
        ajaxFlag.setAttribute('value', 1);
        form.appendChild(ajaxFlag);

        // automatically submit the form on file select
        input.addEventListener('change', function (e) {
            showFiles(e.target.files);
        });

        // drag&drop files if the feature is available
        if (isAdvancedUpload) {
            form.classList.add('has-advanced-upload'); // letting the CSS part to know drag&drop is supported by the browser

            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (event) {
                form.addEventListener(event, function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            ['dragover', 'dragenter'].forEach(function (event) {
                form.addEventListener(event, function () {
                    if(!form.classList.contains('is-dragover'))
                        form.classList.add('is-dragover');
                });
            });
            ['dragleave', 'dragend', 'drop'].forEach(function (event) {
                form.addEventListener(event, function () {
                    if(form.classList.contains('is-dragover'))
                        form.classList.remove('is-dragover');
                });
            });
            form.addEventListener('drop', function (e) {
                showFiles(e.dataTransfer.files);
            });
        }

        cancel.addEventListener('click', function (e) {
            buttons.classList.add('hidden');
            if(passBlock !== null)
            passBlock.classList.add('hidden');
            label.innerHTML = ('<strong>Выбирете файл</strong><span\n' +
                '                            class="box__dragndrop"> или перетащите его</span>');
            SelectFiles = null;
        });

        encode.addEventListener('click', function (e) {
            let typeDecode =  document.getElementById("fileTitle");
            let password = "";
            if (passEdit !== null && passEdit.value === "") {
                showToast("Введите пароль!");
                passEdit.focus();
                passEdit.classList.add('is-dirty');
            } else {
                if (passEdit !== null)
                    password = passEdit.value;

                for (let i = 0; i < Object.keys(SelectFiles).length; i++) {
                    switch (typeDecode.textContent){
                        case "AES (Rijndael)":{
                            fileActionAES(0, SelectFiles[i], password);
                            break;
                        }
                        case "Base64":{
                            fileActionBase64(0, SelectFiles[i]);
                            break;
                        }
                        case "SHA":{
                            fileActionSHA(0, SelectFiles[i]);
                            break;
                        }
                    }
                }
            }
        });

        if(decode !== null)
        decode.addEventListener('click', function (e) {
            let typeDecode =  document.getElementById("fileTitle");
            let password = "";
            if (passEdit !== null && passEdit.value === "") {
                showToast("Введите пароль!");
                passEdit.focus();
                passEdit.classList.add('is-dirty');
            } else {
                if (passEdit !== null)
                    password = passEdit.value;

                for (let i = 0; i < Object.keys(SelectFiles).length; i++) {
                    switch (typeDecode.textContent){
                        case "AES (Rijndael)":{
                            fileActionAES(1, SelectFiles[i], password);
                            break;
                        }
                        case "Base64":{
                            fileActionBase64(1, SelectFiles[i]);
                            break;
                        }
                    }
                }
            }
        });

        // Firefox focus bug fix for file input
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });

    });
}(document, window, 0));