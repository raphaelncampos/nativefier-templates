# nativefier-templates

My own nativefier templates with a little introduction to what is it.

## What is nativefier?

Is a multiplatform open-source wrapper (available [here](https://github.com/jiahaog/nativefier)) to create native apps from webpages.

## Why use it?

My sole purpose is to manage my ALT+TAB and workspace contexts in a more explicit, better way.

You can also use it as a Zen Mode, without address bar.

## What I need to run it?

You'll need node (8+) and npm.

## How to install it?

`npm install nativefier -g` will do the trick.

## How to use it?

Basically, `nativefier --name "My App" "https://www.myapp.com"`

## How to alter icons

The build script tries to use icons from the [Nativefier Icons repo](https://github.com/jiahaog/nativefier-icons).

But you change your icon by replacing the `icon.(png|ico|icns)` in the `path/to/nativefier-app/resources/app/` directory.

## Inject your own files

You can inject JavaScript and CSS files with the `--inject "/path/to/file.js"`.

## Internal URLs on the app

In some cases, you want to include another domains in the scope of you app. You can use `--internal-urls "(accounts\.google\.com.*|*\.domain\.com)"` to add google OAuth login, for example.

## References

- [Linux Fu: Turn a web app into a full program](https://hackaday.com/2018/12/05/linux-fu-turn-a-web-app-into-a-full-program/)
- [Jia Hao's nativefier GitHub repo](https://github.com/jiahaog/nativefier)
- [Jia Hao's nativefier icons GitHub repo](https://github.com/jiahaog/nativefier-icons)
- [Diolinux guide to WhatsApp on nativefier (pt-BR: Como utilizar o Whatsapp através do Nativefier)](https://diolinux.com.br/2020/02/como-utilizar-whatsapp-atraves-nativefier.html)
