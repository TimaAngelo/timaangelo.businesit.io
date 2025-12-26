# Решение проблемы с доменом timaangelo.businesit.io

## Ошибка: DNS_PROBE_FINISHED_NXDOMAIN

Эта ошибка означает, что DNS не может найти ваш домен. Нужно настроить DNS записи.

## Что сделано:
✅ CNAME файл добавлен в репозиторий
✅ GitHub Pages файлы готовы

## Что нужно сделать:

### Шаг 1: Активировать GitHub Pages

1. Откройте: https://github.com/TimaAngelo/timaangelo.businesit.io/settings/pages
2. Нажмите на секцию **Pages** в левом меню
3. В разделе "Build and deployment":
   - **Source**: Выберите "Deploy from a branch"
   - **Branch**: `main`, папка `/ (root)`
4. В разделе "Custom domain" должна появиться ошибка (это нормально)
5. Нажмите **Save**

### Шаг 2: Настроить DNS записи

У вас есть домен **timaangelo.businesit.io**. Нужно добавить DNS записи у регистратора домена.

Вы должны добавить **A records** (или ALIAS):

```
Хост:  @
Тип:   A
Значение: 185.199.108.153
         185.199.109.153
         185.199.110.153
         185.199.111.153
```

ИЛИ (если поддерживается):
```
Хост:  @
Тип:   ALIAS/ANAME
Значение: timaangelo.github.io
```

### Шаг 3: Проверить STATUS

После добавления DNS записей:
1. Откройте https://github.com/TimaAngelo/timaangelo.businesit.io/settings/pages
2. Подождите 5-10 минут
3. Вы увидите: "Your site is live at https://timaangelo.businesit.io" (зеленая галочка)

## Альтернатива (быстрый тест):

Пока DNS не настроен, сайт доступен по стандартному GitHub Pages адресу:
```
https://timaangelo.github.io/timaangelo.businesit.io/
```

Проверьте, работает ли он там!

## Если у вас нет доступа к DNS:

Используйте сервис для перенаправления:
- https://pages.cloudflare.com/ (бесплатно)
- https://www.namecheap.com/ (если домен там)
- https://www.godaddy.com/ (если домен там)
