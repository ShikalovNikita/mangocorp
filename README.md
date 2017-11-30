# Init_Workplace v4.0.1
Шаблон помогает быстро начать вёрстку проекта.

Перед началом работы нужно установить зависимости:
```bash
npm install
```

Удобнее через [Yarn](https://yarnpkg.com) (здесь и далее идентичные команды — парами, выбирайте, что нравится больше):
```bash
yarn
```


## Шаблонизация
Шаблоны собираются из папки `templates` с помощью [Nunjucks]. Составные части лежат в `partials`. Основной шаблон лежит в `layouts/_layout.html`.

## Стили
Верстаются в `src/sass/_main.sass` и `src/sass/_common.sass`, компилируются в `build/css/app.css`. Миксины и сбросы стилей указаны в файлах `src/sass/helpers/_mixins.sass` и `src/sass/helpers/_reset.sass`

### Шрифты
Файлы шрифтов кладутся в папку `src/fonts`. И подключаются через миксин font-face.

## Скрипты
Можно писать на es2015 — подключен и работает Babel. Включен jQuery 3. Установлен Bower для удобной установки JS библиотек.

## Авторы
[Никита Шикалов](https://github.com/ShikalovNikita).