document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">\n' +
    '        <div class="center">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1 id="fileTitle">SHA</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="InputText" onkeyup="setCharCounter()"></textarea>\n' +
    '                <label id="LabelText" class="mdl-textfield__label" for="InputText">Текст (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="hash_answers" class="hashBlock">\n' +
    '                <p>SHA 224:</p>\n' +
    '                <p>SHA 256:</p>\n' +
    '                <p>SHA 384:</p>\n' +
    '                <p>SHA 512:</p>\n' +
    '                <p>SHA 3:</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-card__actions mdl-card--border">\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickSHA(0); return false;">Encode</a>\n' +
    '\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '            </div>\n' +
    '\n' +
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
    '                    <input class="box__file" type="file" name="files" id="file"\n' +
    '                           data-multiple-caption="Выбрано {count} файл{prefix}"/>\n' +
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
    '\n' +
    '                    <button id="box_cancel" type="button" class="mdl-chip">\n' +
    '                        <span class="mdl-chip__text">Отмена</span>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col  mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Описание</h2>\n' +
    '        </div>\n' +
    '        <div class="mdl-card__supporting-text no-padding">\n' +
    '            <p>\n' +
    '                SHA256: 32 байта (5618 МС)\n' +
    '                SHA384: 48 байт (3839 МС)\n' +
    '                SHA512: 64 байта (3820 МС)\n' +
    '            </p>\n' +
    '            <p>SHA256 - хеш-функция из семейства алгоритмов SHA-2 предназначена для создания «отпечатков» или\n' +
    '                «дайджестов» для сообщений произвольной длины. Применяется в различных приложениях или компонентах,\n' +
    '                связанных с защитой информации.\n' +
    '            </p>\n' +
    '            <p>SHA-2 включает значительные изменения от своего предшественника, SHA-1. SHA-2 семья состоит из шести\n' +
    '                хэш-функции с дайджест (хэш-значений), которые находятся 224, 256, 384 или 512 бит: алгоритм SHA-224,\n' +
    '                SHA-256, SHA-384, алгоритм SHA-512, алгоритм SHA-512/224, алгоритм SHA-512/256.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                SHA-256 и SHA-512 являются новыми хэш-функциями, вычисленными с 32-разрядными и 64-разрядными словами\n' +
    '                соответственно. Они используют различные количества сдвига и аддитивные константы, но их структуры в\n' +
    '                остальном практически идентичны, отличаясь только количеством раундов. SHA-224 и SHA-384 являются просто\n' +
    '                усеченными версиями первых двух, вычисленными с различными начальными значениями. SHA-512/224 и\n' +
    '                SHA-512/256 также являются усеченными версиями SHA-512, но начальные значения генерируются с\n' +
    '                использованием метода, описанного в федеральных стандартах обработки информации (FIPS) PUB 180-4. SHA-2\n' +
    '                было опубликовано в 2001 Национальным Институтом стандартов и технологии (NIST) Федеральный стандарт США\n' +
    '                (FIPS). Семейство алгоритмов SHA-2 запатентовано в патенте США 6829355. Соединенные Штаты выпустили\n' +
    '                патент под безвозмездной лицензией.\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');