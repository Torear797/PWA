document.write('<div class="description-section-paralax"><h1>Главная</h1></div>\n' +
    '\n' +
    '<div class="description-band">\n' +
    '    <div class="description-band-text">\n' +
    '        <div class="mdl-typography--display-2 mdl-typography--font-thin">Описание</div>\n' +
    '        <p>\n' +
    '            Сайт был разработан для быстрого шифрования и преобразования текстов и файловов такими популярными\n' +
    '            алгоритмами,\n' +
    '            как AES, RSA, base64, SHA. Также на сайте есть некоторые полезные утилиты, такие как генерация QR-кодов,\n' +
    '            работа с timestamp,\n' +
    '            работа с системами счисления и базовыми математическими функциями.\n' +
    '        </p>\n' +
    '        <p>В криптографии шифрование - это процесс кодирования сообщения или информации таким образом,\n' +
    '            что\n' +
    '            только авторизованные стороны могут получить к нему доступ, а те, кто не авторизован, не\n' +
    '            могут.\n' +
    '            Шифрование само по себе не предотвращает помехи, но отрицает понятное содержимое\n' +
    '            потенциальному\n' +
    '            перехватчику. В схеме шифрования предполагаемая информация или сообщение, называемое\n' +
    '            открытым\n' +
    '            текстом, шифруется с помощью алгоритма шифрования - шифровального зашифрованного текста,\n' +
    '            который\n' +
    '            может быть прочитан только при расшифровке. По техническим причинам схема шифрования обычно\n' +
    '            использует псевдослучайный ключ шифрования, сгенерированный алгоритмом. Расшифровать\n' +
    '            сообщение в\n' +
    '            принципе можно без ключа, но для хорошо продуманной схемы шифрования требуются значительные\n' +
    '            вычислительные ресурсы и навыки. Авторизованный получатель может легко расшифровать\n' +
    '            сообщение с\n' +
    '            помощью ключа, предоставленного отправителем получателям, но не неавторизованным\n' +
    '            пользователям.\n' +
    '        </p>\n' +
    '        <p>\n' +
    '            В схемах симметричного ключа ключи шифрования и дешифрования одинаковы. Сообщающиеся стороны\n' +
    '            должны иметь один и тот же ключ для обеспечения безопасной связи.\n' +
    '        </p>\n' +
    '        <p>\n' +
    '            Схемы шифрования с открытым ключом ключ шифрования публикуется для всех, кто использует и\n' +
    '            шифрует сообщения. Однако только получающая сторона имеет доступ к ключу расшифровки,\n' +
    '            который\n' +
    '            позволяет читать сообщения. Шифрование с открытым ключом было впервые описано в секретном\n' +
    '            документе в 1973 году; до этого все схемы шифрования были симметричными ключами (также\n' +
    '            называемыми закрытыми ключами).\n' +
    '        </p>\n' +
    '        <p>Сайт является PWA приложением и может быть установлен на любое устройство. Проверить поддержку PWA вашим\n' +
    '            устройством можно с помощью кнопок ниже.</p>\n' +
    '        <p>\n' +
    '            <a class="mdl-typography--font-regular mdl-button mdl-js-button mdl-js-ripple-effect home-check-Btn"\n' +
    '               onclick="checkSupportPWA()">\n' +
    '                Проверка поддержки PWA<i class="material-icons">chevron_right</i>\n' +
    '            </a>\n' +
    '            <a class="mdl-typography--font-regular mdl-button mdl-js-button mdl-js-ripple-effect home-check-Btn"\n' +
    '               onclick="checkPWA()">\n' +
    '                Проверка PWA<i class="material-icons">chevron_right</i>\n' +
    '            </a>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div class="more-section">\n' +
    '    <div class="section-title mdl-typography--display-1-color-contrast">Популярные алгоритмы</div>\n' +
    '\n' +
    '    <div class="card-container mdl-grid">\n' +
    '\n' +
    '        <div class="rw-card--media mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone rw-card rw-card--media mdl-card mdl-shadow--3dp">\n' +
    '            <div class="rw-card__img-container mdl-card__media" href="?page=AES"\n' +
    '                 onclick="ReplaceBlock(\'AES\', false); return false;">\n' +
    '                <img src="public/img/img_aes.webp" alt="Алгоритм AES" class="imgSize">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="rw-card__content">\n' +
    '                <div class="rw-card__title mdl-card__title">\n' +
    '                    <a href="?page=AES"\n' +
    '                       onclick="ReplaceBlock(\'AES\', false); return false;">AES (Advanced Encryption Standard; также\n' +
    '                        Rijndael)</a>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="rw-card__body mdl-card__supporting-text">\n' +
    '                    <a class="mdl-typography--font-light mdl-typography--subhead" href="?page=AES"\n' +
    '                       onclick="ReplaceBlock(\'AES\', false); return false;">\n' +
    '                        Симметричный алгоритм блочного шифрования, принятый в качестве стандарта шифрования\n' +
    '                        правительством США по результатам конкурса AES.</a>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="rw-card__actions dl-card__actions">\n' +
    '                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-typography--text-uppercase"\n' +
    '                       href="?page=AES"\n' +
    '                       onclick="ReplaceBlock(\'AES\', false); return false;" data-upgraded=",MaterialButton">\n' +
    '                        Перейти\n' +
    '                        <i class="material-icons">chevron_right</i>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="rw-card--media mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">\n' +
    '            <div class="rw-card__img-container mdl-card__media" onclick="ReplaceBlock(\'RSA\', false); return false;"\n' +
    '                 href="?page=RSA">\n' +
    '                <img src="public/img/img_rsa.webp" alt="Алгоритм RSA" class="imgSize">\n' +
    '            </div>\n' +
    '            <div class="rw-card__content">\n' +
    '                <div class="rw-card__title mdl-card__title">\n' +
    '                    <a onclick="ReplaceBlock(\'RSA\', false); return false;" href="?page=RSA">RSA (аббревиатура от фамилий Rivest, Shamir и Adleman)</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__body mdl-card__supporting-text">\n' +
    '                    <a class="mdl-typography--font-light mdl-typography--subhead"\n' +
    '                       onclick="ReplaceBlock(\'RSA\', false); return false;" href="?page=RSA">\n' +
    '                        Криптографический алгоритм с открытым ключом, основывающийся на вычислительной сложности задачи факторизации больших целых чисел.</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__actions mdl-card__actions">\n' +
    '                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-typography--text-uppercase"\n' +
    '                       onclick="ReplaceBlock(\'RSA\', false); return false;" href="?page=RSA"\n' +
    '                       data-upgraded=",MaterialButton">\n' +
    '                        Перейти\n' +
    '                        <i class="material-icons">chevron_right</i>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="rw-card--media mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">\n' +
    '            <div class="rw-card__img-container mdl-card__media"\n' +
    '                 onclick="ReplaceBlock(\'base64Form\', false); return false;" href="?page=base64Form">\n' +
    '                <img src="public/img/img_base64.webp" alt="Алгоритм base64" class="imgSize">\n' +
    '            </div>\n' +
    '            <div class="rw-card__content">\n' +
    '                <div class="rw-card__title mdl-card__title">\n' +
    '                    <a onclick="ReplaceBlock(\'base64Form\', false); return false;" href="?page=base64Form">Base 64</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__body mdl-card__supporting-text">\n' +
    '                    <a class="mdl-typography--font-light mdl-typography--subhead"\n' +
    '                       onclick="ReplaceBlock(\'base64Form\', false); return false;" href="?page=base64Form">\n' +
    '                        Base64 — стандарт кодирования двоичных данных при помощи только 64 символов ASCII.</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__actions mdl-card__actions">\n' +
    '                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-typography--text-uppercase"\n' +
    '                       onclick="ReplaceBlock(\'base64Form\', false); return false;" href="?page=base64Form"\n' +
    '                       data-upgraded=",MaterialButton">\n' +
    '                        Перейти\n' +
    '                        <i class="material-icons">chevron_right</i>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="rw-card--media mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">\n' +
    '            <div class="rw-card__img-container mdl-card__media" onclick="ReplaceBlock(\'qr\', false); return false;"\n' +
    '                 href="?page=qr">\n' +
    '                <img src="public/img/img_qr.webp" alt="генератор QR кодов" class="imgSize">\n' +
    '            </div>\n' +
    '            <div class="rw-card__content">\n' +
    '                <div class="rw-card__title mdl-card__title">\n' +
    '                    <a onclick="ReplaceBlock(\'qr\', false); return false;" href="?page=qr">Генератор QR</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__body mdl-card__supporting-text">\n' +
    '                    <a onclick="ReplaceBlock(\'qr\', false); return false;" href="?page=qr"\n' +
    '                       class="mdl-typography--font-light mdl-typography--subhead">QR-код (англ. Quick Response Code —\n' +
    '                        код быстрого реагирования; сокр. QR code) — тип матричных штрихкодов.</a>\n' +
    '                </div>\n' +
    '                <div class="rw-card__actions mdl-card__actions">\n' +
    '                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-typography--text-uppercase"\n' +
    '                       onclick="ReplaceBlock(\'qr\', false); return false;" href="?page=qr"\n' +
    '                       data-upgraded=",MaterialButton">\n' +
    '                        Перейти\n' +
    '                        <i class="material-icons">chevron_right</i>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');