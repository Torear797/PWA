document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">\n' +
    '        <div class="center">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1 id="fileTitle">Base64</h1></div>\n' +
    '            </div>\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="InputText" onkeyup="setCharCounter()"></textarea>\n' +
    '                <label id="LabelText" class="mdl-textfield__label" for="InputText">Текст (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="CryptText" onkeyup="setCharCounter()"></textarea>\n' +
    '                <label id="CryptLabel" class="mdl-textfield__label" for="CryptText">Результат (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="mdl-card__actions">\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickBase64(0); return false;">Encode</a>\n' +
    '\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickBase64(1); return false;">Decode</a>\n' +
    '\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '\n' +
    '                <button class="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                        onclick="copyToClipboard(); return false;"><i class="material-icons">content_copy</i>\n' +
    '                </button>\n' +
    '\n' +
    '                <button class="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 1%"\n' +
    '                        onclick="ClearFields(); return false;">\n' +
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
    '\n' +
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
    '            <p>Base64 - это группа аналогичных схем кодирования двоичного текста, которые представляют двоичные данные в\n' +
    '                формате строки ASCII путем перевода их в представление radix-64. Термин Base64 происходит от\n' +
    '                определенной кодировки передачи содержимого MIME.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Каждая цифра base64 представляет ровно 6 бит данных. Таким образом, три 8-битных байта (т. е. всего 24\n' +
    '                бита) могут быть представлены четырьмя 6-битными цифрами base64.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Определенный набор из 64 символов, выбранных для представления 64 мест-значений для базы, варьируется\n' +
    '                между реализациями. Общая стратегия состоит в том, чтобы выбрать 64 символа, которые являются членами\n' +
    '                подмножества, общего для большинства кодировок, а также для печати. Эта комбинация оставляет данные,\n' +
    '                которые вряд ли будут изменены при передаче через информационные системы, такие как электронная почта,\n' +
    '                которые традиционно не были 8-битными чистыми. Например, реализация Base64 MIME использует A-Z, A-z и\n' +
    '                0-9 для первых 62 значений. Другие варианты разделяют это свойство, но отличаются символами, выбранными\n' +
    '                для последних двух значений; примером является UTF-7.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                Самые ранние экземпляры этого типа кодирования были созданы для коммутируемой связи между системами,\n' +
    '                работающими под управлением той же ОС — например, uuencode для UNIX, BinHex для TRS-80 (позже\n' +
    '                адаптированный для Macintosh) — и поэтому могли бы сделать больше предположений о том, какие символы\n' +
    '                были безопасны для использования. Например, uuencode использует прописные буквы, цифры и много знаков\n' +
    '                препинания, но не строчные.\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');