document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">\n' +
    '        <div style="padding: 1%;">\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1>Математические функции</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <input class="mdl-textfield__input" type="text" id="InputText" pattern="-?[0-9]*(\\.[0-9]+)?">\n' +
    '                <label class="mdl-textfield__label" for="InputText">Исходное значение</label>\n' +
    '                <span class="mdl-textfield__error">Это не число!</span>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="hashBlock mdl-grid">\n' +
    '\n' +
    '                <div class="nameParam mdl-cell mdl-cell--4-col">\n' +
    '                    <p>В градусах (для радиан):</p>\n' +
    '                    <p>В радианах (для градусов):</p>\n' +
    '                    <br>\n' +
    '                    <p>Синус (для °):</p>\n' +
    '                    <p>Косинус (для °):</p>\n' +
    '                    <p>Тангенс (для °):</p>\n' +
    '                    <p>Арксинус (для °):</p>\n' +
    '                    <p>Арккосинус (для °):</p>\n' +
    '                    <p>Арктангенс (для °):</p>\n' +
    '                    <br>\n' +
    '                    <p>Степень числа e:</p>\n' +
    '                    <p>Натуральный логарифм:</p>\n' +
    '                    <p>Квадратный корень:</p>\n' +
    '                    <p>1 / x:</p>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="hash_answers" class="mdl-cell mdl-cell--3-col">\n' +
    '                    <p>x * π / 180 =</p>\n' +
    '                    <p>x * 180 / π =</p>\n' +
    '                    <br>\n' +
    '                    <p>sin x =</p>\n' +
    '                    <p>cos x =</p>\n' +
    '                    <p>tg x =</p>\n' +
    '                    <p>arcsin x =</p>\n' +
    '                    <p>arccos x =</p>\n' +
    '                    <p>arctg x =</p>\n' +
    '                    <br>\n' +
    '                    <p>e^x =</p>\n' +
    '                    <p>logex =</p>\n' +
    '                    <p>√ x =</p>\n' +
    '                    <p>1 / x =</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-card__actions mdl-card--border">\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickMathFunc(); return false;">Encode</a>\n' +
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
    '            <p>Математические функции - синус, косинус, тангес, арксинус, арккосинус, арктангенс, логарифм, квадратный\n' +
    '                корень, степень и др.</p>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');