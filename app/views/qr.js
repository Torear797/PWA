document.write('<div class="mdl-grid content">\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">\n' +
    '        <div class="center">\n' +
    '\n' +
    '            <div class="mdl-card__actions">\n' +
    '                <div class="mdl-layout-spacer"><h1>QR код</h1></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="mdl-textfield--floating-label mdl-js-textfield mdl-textfield">\n' +
    '                <textarea class="mdl-textfield__input" type="text" rows="5" id="InputText" onkeyup="setCharCounter()"></textarea>\n' +
    '                <label id="LabelText" class="mdl-textfield__label" for="InputText">Текст (0)</label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div id="qrCodeOutput" style="margin: auto"></div>\n' +
    '\n' +
    '            <div class="mdl-card__actions mdl-card--border">\n' +
    '                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"\n' +
    '                   onclick="ClickQR(); return false;">Кодировать</a>\n' +
    '                <div class="mdl-layout-spacer"></div>\n' +
    '                <button class="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 1%"\n' +
    '                        onclick="ClearFields(); return false;">\n' +
    '                    <i class="material-icons">clear</i>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="mdl-cell mdl-cell--12-col  mdl-card mdl-shadow--4dp">\n' +
    '        <div class="mdl-card__title">\n' +
    '            <h2 class="mdl-card__title-text">Описание</h2>\n' +
    '        </div>\n' +
    '        <div class="mdl-card__supporting-text no-padding">\n' +
    '            <p>QR-код (сокращенно от Quick Response Code) является товарным знаком для типа штрих-кода матрицы (или\n' +
    '                двумерного штрих-кода), впервые предназначенного для а втомобильной промышленности в Японии. Штрих-код -\n' +
    '                это машиночитаемая оптическая этикетка, содержащая информацию о товаре, к которому он прикреплен. QR-код\n' +
    '                использует четыре стандартных режима кодирования (числовой, буквенно-цифровой, байт / двоичный и кандзи\n' +
    '                для эффективного хранения данных; также могут использоваться расширения.\n' +
    '            </p>\n' +
    '            <p>Система быстрого реагирования (QR code) стала популярной за пределами автомобильной промышленности\n' +
    '                благодаря своей быстрой читаемости и большей емкости хранения по сравнению со стандартными штрих-кодами\n' +
    '                UPC. Приложения включают отслеживание товара, идентификация товара, учет рабочего времени,\n' +
    '                документооборот, маркетинг.\n' +
    '            </p>\n' +
    '            <p>\n' +
    '                QR-код состоит из черных квадратов, расположенных в квадратной сетке на белом фоне, которые могут быть\n' +
    '                считаны с помощью устройства визуализации, такого как камера, и обрабатываются с помощью исправления\n' +
    '                ошибок Рида–Соломона, пока изображение не может быть соответствующим образом интерпретировано. Затем\n' +
    '                необходимые данные извлекаются из шаблонов, которые присутствуют как в горизонтальном, так и в\n' +
    '                вертикальном компонентах изображения.\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');