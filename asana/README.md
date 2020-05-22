# Asana template

A template for [Asana](https://app.asana.com).

## Installation

```bash
nativefier --name "Asana" --internal-urls "(accounts\.google\.com.*|app.asana.com)" https://app.asana.com/ ~/install
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the Asana Window`

Ex.: WM_CLASS(STRING) = "asana-nativefier-d40211", "asana-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/asana.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=Asana created with Nativefier
Terminal=false
Name=Asana
Exec=/home/$USER/install/Asana-linux-x64/Asana
Type=Application
Icon=/home/$USER/install/Asana-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=asana-nativefier-c63cf9
```
