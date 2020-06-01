# Figma template

A template for [Figma](https://www.figma.com).

## Installation

```bash
nativefier --name "Figma" --internal-urls "(accounts\.google\.com.*|www.figma.com)" https://www.figma.com/ ~/install
cp ~/git/pessoal/nativefier-templates/figma/figma.png ~/install/Figma-linux-x64/resources/app/icon.png
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the Figma Window`

Ex.: WM_CLASS(STRING) = "figma-nativefier-d40211", "figma-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/figma.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=Figma created with Nativefier
Terminal=false
Name=Figma
#replace $USER with your username
Exec=/home/$USER/install/Figma-linux-x64/Figma
Type=Application
Icon=/home/$USER/install/Figma-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=figma-nativefier-b94ee8
```
