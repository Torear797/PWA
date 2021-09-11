document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">\n' +
    '        <div class="center">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1 id="fileTitle">AES (Rijndael)</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="InputText" onkeyup="setCharCounter(true)"></textarea>\n' +
    '                <label id="LabelText" class="mdl-textfield__label" for="InputText">Текст (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="password" onkeyup="setCharCounter(true)">\n' +
    '                <label class="mdl-textfield__label" for="password" id="password_label">Пароль (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="CryptText" onkeyup="setCharCounter(true)"></textarea>\n' +
    '                <label id="CryptLabel" class="mdl-textfield__label" for="CryptText">Результат (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-card__actions">\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickAES(0); return false;">Encode</a>\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickAES(1); return false;">Decode</a>\n' +
    '\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '\n' +
    '                <button class="mdl-button  mdl-button--colored mdl-js-button mdl-button--icon mdl-js-ripple-effect"\n' +
    '                        onclick="copyToClipboard(); return false;"><i class="material-icons">content_copy</i>\n' +
    '                </button>\n' +
    '\n' +
    '                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mdl-button--colored" style="margin-right: 1%"\n' +
    '                        onclick="ClearFields(true); return false;">\n' +
    '                    <i class="material-icons">clear</i>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--8-col  mdl-cell--4-col-desktop mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Загрузка файлов</h2>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="container">\n' +
    '            <form class="box" method="post" action="" enctype="multipart/form-data">\n' +
    '                <div class="box__input">\n' +
    '                    <svg class="box__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"\n' +
    '                         role="presentation">\n' +
    '                        <path fill="none" d="M0 0h24v24H0z"></path>\n' +
    '                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>\n' +
    '                    </svg>\n' +
    '\n' +
    '                    <input class="box__file" type="file" name="files[]" id="file"\n' +
    '                           data-multiple-caption="Выбрано {count} файл{prefix}" multiple/>\n' +
    '\n' +
    '                    <label id="dad_label" for="file"><strong>Выбирете файл</strong><span\n' +
    '                            class="box__dragndrop"> или перетащите его</span></label>\n' +
    '\n' +
    '                    <button class="box__button" type="submit">Загрузить</button>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="dad_buttons" class="hidden box_buttons">\n' +
    '                    <button id="box_encode" type="button" class="mdl-chip">\n' +
    '                        <span class="mdl-chip__text">Кодировать</span>\n' +
    '                    </button>\n' +
    '                    <button id="box_decode" type="button" class="mdl-chip">\n' +
    '                        <span class="mdl-chip__text">Декодировать</span>\n' +
    '                    </button>\n' +
    '                    <button id="box_cancel" type="button" class="mdl-chip">\n' +
    '                        <span class="mdl-chip__text">Отмена</span>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="enterPassword" class="hidden mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                    <input class="mdl-textfield__input" type="text" id="password_file">\n' +
    '                    <label class="mdl-textfield__label" for="password_file">Пароль</label>\n' +
    '                </div>\n' +
    '\n' +
    '            </form>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col  mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Описание</h2>\n' +
    '        </div>\n' +
    '        <div class="mdl-card__supporting-text no-padding">\n' +
    '            <p>Advanced Encryption Standard (AES), также известный под своим оригинальным названием Rijndael - это\n' +
    '                спецификация для шифрования электронных данных, созданная национальным Институтом стандартов и\n' +
    '                технологий США (NIST) в 2001 году.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                AES является подмножеством шифра Rijndael, разработанного двумя Бельгийскими криптографами, Винсентом\n' +
    '                Рейменом и Джоан Даймен, которые представили предложение NIST в процессе отбора AES. Rijndael - это\n' +
    '                семейство шифров с различными размерами ключей и блоков.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Для AES NIST выбрал трех членов семейства Rijndael, каждый из которых имеет размер блока 128 бит, но три\n' +
    '                разных длины ключа: 128, 192 и 256 бит.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                AES был принят правительством США и в настоящее время используется во всем мире. Он заменяет Стандарт\n' +
    '                шифрования данных (des), который был опубликован в 1977 году. Алгоритм, описываемый AES, является\n' +
    '                алгоритмом симметричного ключа, то есть один и тот же ключ используется как для шифрования, так и для\n' +
    '                расшифровки данных.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                AES вступил в силу в качестве стандарта федерального правительства 26 мая 2002 года после утверждения\n' +
    '                министром торговли. AES включен в стандарт ISO/IEC 18033-3. AES доступен во многих различных пакетах\n' +
    '                шифрования и является первым (и единственным) общедоступным шифром, одобренным агентством национальной\n' +
    '                безопасности (NSA) для сверхсекретной информации при использовании в одобренном криптографическом модуле\n' +
    '                NSA.\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');