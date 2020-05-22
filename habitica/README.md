# Habitica template

A template for [Habitica](www.habitica.com).

## Installation

```bash
cd /path/to/git/nativefier-templates
nativefier --name "Habitica" "https://habitica.com/" ~/install --internal-urls "(accounts\.google\.com.*|*\.habitica\.com)"
cp ~/git/pessoal/nativefier-templates/habitica/habitica-icon.png ~/install/Habitica-linux-x64/resources/app/icon.png
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the Habitica Window`

Ex.: WM_CLASS(STRING) = "habitica-nativefier-d40211", "habitica-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/habitica.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=Habitica created with Nativefier
Terminal=false
Name=Habitica
#replace $USER with your username
Exec=/home/$USER/install/Habitica-linux-x64/Habitica
Type=Application
Icon=/home/$USER/install/Habitica-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=habitica-nativefier-d9af86
```

## Issues

Google Login not working. Opening on another window, need CTRL+R.
