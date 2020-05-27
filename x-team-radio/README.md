# X-Team Radio template

A template for [X-team Radio](radio.x-team.com).

## Installation

```bash
nativefier --name "X-Team Radio" --internal-urls "(x-team.com)" https://radio.x-team.com/ ~/install
cp ~/git/pessoal/nativefier-templates/x-team-radio/x-team.png ~/install/X-TeamRadio-linux-x64/resources/app/icon.png
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the X-team Radio Window`

Ex.: WM_CLASS(STRING) = "x-teamradio-nativefier-d40211", "x-teamradio-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/x-team-radio.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=X-Team Radio created with Nativefier
Terminal=false
Name=X-Team Radio
#replace $USER with your username
Exec=/home/$USER/install/X-TeamRadio-linux-x64/X-TeamRadio
Type=Application
Icon=/home/$USER/install/X-TeamRadio-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=x-teamradio-nativefier-d40211
```
