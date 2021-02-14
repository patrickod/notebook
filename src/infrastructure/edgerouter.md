## EdgeRouter OS upgrade

#### get current version

```bash
$ show version
Version:      v2.0.8-hotfix.1
Build ID:     5278088
Build on:     03/05/20 16:40
Copyright:    2012-2019 Ubiquiti Networks, Inc.
HW model:     EdgeRouter Lite 3-Port
HW S/N:       24A43C05210C
Uptime:       19:13:59 up 90 days, 16:27,  1 user,  load average: 1.18, 0.41, 0.13
```

```bash
$ show system image
The system currently has the following image(s) installed:

v2.0.9.5346345.201028.1646     (default boot) 
v2.0.8-hotfix.1.5278088.200305.1640 (running image) 

A reboot is needed to boot default image
```
#### install OS image

```bash
add system image https://dl.ui.com/firmwares/edgemax/v2.0.9/ER-e100.v2.0.9.5346345.tar
```
