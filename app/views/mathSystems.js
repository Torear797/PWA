document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">\n' +
    '        <div style="padding: 1%;">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1>Системы счисления BIN/OCT/DEC/HEX</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="InputText" pattern="-?[0-9]*(\\.[0-9]+)?">\n' +
    '                <label class="mdl-textfield__label" for="InputText">Исходное значение</label>\n' +
    '                <span class="mdl-textfield__error">Это не число!</span>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="sys1" pattern="-?[0-9]*(\\.[0-9]+)?">\n' +
    '                <label class="mdl-textfield__label" for="sys1">Начальная система счисления (основание)</label>\n' +
    '                <span class="mdl-textfield__error">Это не число!</span>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="sys2" pattern="-?[0-9]*(\\.[0-9]+)?">\n' +
    '                <label class="mdl-textfield__label" for="sys2">Конечная система счисления (основание)</label>\n' +
    '                <span class="mdl-textfield__error">Это не число!</span>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div id="hash_answers" class="hashBlock">\n' +
    '                <p>Результат:</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-card__actions mdl-card--border">\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickMathSystem(); return false;">Encode</a>\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col  mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Описание</h2>\n' +
    '        </div>\n' +
    '        <div class="mdl-card__supporting-text no-padding">\n' +
    '            <p>Система счисления (англ. numeral system или system of numeration) — символический метод записи чисел,\n' +
    '                представление чисел с помощью письменных знаков.</p>\n' +
    '\n' +
    '            <p>Система счисления:</p>\n' +
    '\n' +
    '            <p>даёт представления множества чисел (целых и/или вещественных);</p>\n' +
    '            <p>даёт каждому числу уникальное представление (или, по крайней мере, стандартное представление);</p>\n' +
    '            <p>отражает алгебраическую и арифметическую структуру чисел.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');