# Habitica template

A template for [Google Calendar](calendar.google.com).

## Installation

```bash
nativefier --name "Google Calendar"  --internal-urls "(accounts\.google\.com.*|google.com)" https://calendar.google.com ~/install
```

## `.desktop` Launcher

### Discover the `WM_CLASS`

`xprop WM_CLASS #then click on the Asana Window`

Ex.: WM_CLASS(STRING) = "googlecalendar-nativefier-d40211", "googlecalendar-nativefier-d40211"

### Create your `.desktop` entry

To be searchable and available to "Add to Favorites",

- Create the `desktop` file:

```bash
touch ~/.local/share/applications/asana.desktop
```

- add its content

```.desktop
[Desktop Entry]
Comment=Google Calendar created with Nativefier
Terminal=false
Name=Google Calendar
Exec=/home/$USER/install/GoogleCalendar-linux-x64/GoogleCalendar
Type=Application
Icon=/home/$USER/install/GoogleCalendar-linux-x64/resources/app/icon.png
Categories=Network;
StartupWMClass=googlecalendar-nativefier-e22938
```
