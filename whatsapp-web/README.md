# WhatsApp Web template

A template for [WhatsApp Web](https://web.whatsapp.com) with [dark theme](https://github.com/dcferreira/franz-themes/blob/master/whatsapp/darkmode.css).

Todo: See how to apply the [Stylus](https://add0n.com/stylus.html) template of [Vednoc's Dark WhatsApp](https://github.com/vednoc/dark-whatsapp)

## Installation

```bash
cd ~/install;
nativefier --name "WhatsApp Web" "https://web.whatsapp.com" ~/install --inject css/dark.css --inject fix.js

```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the WhatsApp Web Window`

Ex.: WM_CLASS(STRING) = "whatsappweb-nativefier-d40211", "whatsappweb-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/whatsapp-web.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=WhatsApp Web created with Nativefier
Terminal=false
Name=WhatsApp Web
#replace $USER with your username
Exec=/home/$USER/install/WhatsAppWeb-linux-x64/WhatsAppWeb
Type=Application
Icon=/home/$USER/install/WhatsAppWeb-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=whatsappweb-nativefier-d40211
```
