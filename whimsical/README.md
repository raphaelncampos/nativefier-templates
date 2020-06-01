# Whimsical template

A template for [Whimsical](https://whimsical.com).

## Installation

```bash
nativefier --name "Whimsical" --internal-urls "(accounts\.google\.com.*|www.whimsical.com)" https://whimsical.com/ ~/install
cp ~/git/pessoal/nativefier-templates/whimsical/icon.png ~/install/Whimsical-linux-x64/resources/app/icon.png
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the Whimsical Window`

Ex.: WM_CLASS(STRING) = "whimsical-nativefier-d40211", "whimsical-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/whimsical.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=Whimsical created with Nativefier
Terminal=false
Name=Whimsical
#replace $USER with your username
Exec=/home/$USER/install/Whimsical-linux-x64/Whimsical
Type=Application
Icon=/home/$USER/install/Whimsical-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=whimsical-nativefier-556ee6
```
