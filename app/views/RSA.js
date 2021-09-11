document.write('<div class="mdl-grid content">\n' +
    '    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">\n' +
    '        <div class="center">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1>RSA</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" rows="5" id="InputText" onkeyup="setCharCounterRSA()"></textarea>\n' +
    '                <label id="LabelText" class="mdl-textfield__label" for="InputText">Текст (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="public_key" onkeyup="setCharCounterRSA()">\n' +
    '                <label class="mdl-textfield__label" for="public_key" id="public-key-label">Открытый ключ (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="private_key" onkeyup="setCharCounterRSA()">\n' +
    '                <label class="mdl-textfield__label" for="private_key" id="private-key-label">Секретный ключ (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\\.[0-9]+)?" id="lengthKey" value="512" onkeyup="setCharCounterRSA()">\n' +
    '                <label class="mdl-textfield__label" for="lengthKey" id="lengthKeyLabel">Длина ключей (бит) (4)</label>\n' +
    '                <span class="mdl-textfield__error">Это не число!</span>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" rows="5" id="CryptText" onkeyup="setCharCounterRSA()"></textarea>\n' +
    '                <label id="CryptLabel" class="mdl-textfield__label" for="CryptText">Результат (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-card__actions">\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="generateRSAKeys()">Generate Keys</a>\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="actionRSA(0); return false;">Encode</a>\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="actionRSA(1); return false;">Decode</a>\n' +
    '\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '\n' +
    '                <button class="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                        onclick="copyToClipboard(); return false;"><i class="material-icons">content_copy</i>\n' +
    '                </button>\n' +
    '\n' +
    '                <button class="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 1%"\n' +
    '                        onclick="ClearFieldsRSA(); return false;">\n' +
    '                    <i class="material-icons">clear</i>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col  mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Описание</h2>\n' +
    '        </div>\n' +
    '        <div class="mdl-card__supporting-text no-padding">\n' +
    '            <p>RSA (Rivest-Shamir-Adleman) является одной из первых криптосистем с открытым ключом и широко используется\n' +
    '                для безопасной передачи данных. В такой криптосистеме ключ шифрования является открытым и отличается от\n' +
    '                ключа расшифровки, который хранится в секрете (private). В RSA эта асимметрия основана на практической\n' +
    '                сложности факторизации произведения двух больших простых чисел, "проблема факторинга". Аббревиатура RSA\n' +
    '                состоит из начальных букв фамилий Рона Ривеста, Ади Шамира и Леонарда Адлемана, которые впервые публично\n' +
    '                описали алгоритм в 1978 году. Клиффорд Кокс, английский математик, работающий в Британском\n' +
    '                разведывательном управлении правительственной связи (GCHQ), разработал эквивалентную систему в 1973\n' +
    '                году, но это не было рассекречено до 1997 года.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Пользователь RSA создает и затем публикует открытый ключ на основе двух больших простых чисел вместе с\n' +
    '                дополнительным значением. Простые числа должны храниться в секрете. Любой может использовать открытый\n' +
    '                ключ для шифрования сообщения, но с помощью опубликованных в данный момент методов, и если открытый ключ\n' +
    '                достаточно велик, только тот, кто знает простые числа, может расшифровать сообщение. Нарушение\n' +
    '                шифрования RSA известно как проблема RSA. Остается открытым вопрос, насколько это сложно, как проблема\n' +
    '                факторинга.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                RSA является относительно медленным алгоритмом, и из-за этого он реже используется для прямого\n' +
    '                шифрования пользовательских данных. Чаще всего RSA передает зашифрованные общие ключи для шифрования с\n' +
    '                симметричным ключом, который, в свою очередь, может выполнять массовые операции шифрования-дешифрования\n' +
    '                на гораздо более высокой скорости.\n' +
    '            </p>\n' +
    '            <p><a href="https://torear797.github.io/PWA/?page=AES">AES</a></p>\n' +
    '            <p><a href="https://torear797.github.io/PWA/?page=qr">qr</a></p>\n' +
    '            <p><a href="https://torear797.github.io/PWA/?page=mathSystems">mathSystems</a></p>\n' +
    '            <p><a href="https://torear797.github.io/PWA/?page=timestamp">timestamp</a></p>\n' +
    '            <p><a href="https://torear797.github.io/PWA/?page=mathFunc">mathFunc</a></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');