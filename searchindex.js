Object.assign(window.search, {"doc_urls":["intro.html#introduction","infrastructure/intro.html#infrastructure","infrastructure/qemu.html#qemu--libvirtd","infrastructure/edgerouter.html#edgerouter-os-upgrade"],"index":{"documentStore":{"docInfo":{"0":{"body":50,"breadcrumbs":2,"title":1},"1":{"body":20,"breadcrumbs":2,"title":1},"2":{"body":32,"breadcrumbs":4,"title":2},"3":{"body":69,"breadcrumbs":5,"title":3}},"docs":{"0":{"body":"Welcome to my lab notebook. This book aims to be a slightly more tidied up transcription of the ideas and thoughts that I regularly capture in paper form. Its purposes are twofold, to serve as a richer, searchable medium for my work notes but also to invite discussion and participation from others. If we share an interest in anything I've written about then please do reach out - I'd love to hear all about your adventures! The idea for this notebook repository was heavily inspired by the previous work of whitequark and James Munns .","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"This section is a pseudo personal runbook for the administrative tasks involved in my personal infrastructure. It is mainly a collection of short command snippets and configuration files which I use repeatedly in different setups.","breadcrumbs":"Infrastructure » Infrastructure","id":"1","title":"Infrastructure"},"2":{"body":"creating sparse img new sparse \"qcow2\" type image of size 128GB qemu-img create -f qcow2 guest.img 128G create sparse CoW img based on snapshot qemu-img create -f qcow2 -b snapshot.img new-guest.img","breadcrumbs":"Infrastructure » QEMU » QEMU + libvirtd","id":"2","title":"QEMU + libvirtd"},"3":{"body":"get current version $ show version\nVersion: v2.0.8-hotfix.1\nBuild ID: 5278088\nBuild on: 03/05/20 16:40\nCopyright: 2012-2019 Ubiquiti Networks, Inc.\nHW model: EdgeRouter Lite 3-Port\nHW S/N: 24A43C05210C\nUptime: 19:13:59 up 90 days, 16:27, 1 user, load average: 1.18, 0.41, 0.13 $ show system image\nThe system currently has the following image(s) installed: v2.0.9.5346345.201028.1646 (default boot) v2.0.8-hotfix.1.5278088.200305.1640 (running image) A reboot is needed to boot default image install OS image add system image https://dl.ui.com/firmwares/edgemax/v2.0.9/ER-e100.v2.0.9.5346345.tar","breadcrumbs":"Infrastructure » EdgeRouter » EdgeRouter OS upgrade","id":"3","title":"EdgeRouter OS upgrade"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"1":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"4":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"/":{"0":{"5":{"/":{"2":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{".":{"1":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"8":{"df":0,"docs":{},"g":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"6":{":":{"2":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"4":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{":":{"1":{"3":{":":{"5":{"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"2":{"0":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"a":{"4":{"3":{"c":{"0":{"5":{"2":{"1":{"0":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"2":{"7":{"8":{"0":{"8":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"a":{"d":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"1":{"0":{"0":{".":{"df":0,"docs":{},"v":{"2":{".":{"0":{".":{"9":{".":{"5":{"3":{"4":{"6":{"3":{"4":{"5":{".":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{}},"f":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"1":{".":{"5":{"2":{"7":{"8":{"0":{"8":{"8":{".":{"2":{"0":{"0":{"3":{"0":{"5":{".":{"1":{"6":{"4":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"/":{"df":0,"docs":{},"v":{"2":{".":{"0":{".":{"9":{"/":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"i":{"'":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"a":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.23606797749979}},"e":{"(":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":2.0}}}},"n":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"j":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"w":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"q":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"2":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"/":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}},"g":{"df":0,"docs":{},"r":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"v":{"2":{".":{"0":{".":{"8":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"9":{".":{"5":{"3":{"4":{"6":{"3":{"4":{"5":{".":{"2":{"0":{"1":{"0":{"2":{"8":{".":{"1":{"6":{"4":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"breadcrumbs":{"root":{"0":{".":{"1":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"4":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"/":{"0":{"5":{"/":{"2":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{".":{"1":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"8":{"df":0,"docs":{},"g":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"6":{":":{"2":{"7":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"4":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{":":{"1":{"3":{":":{"5":{"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"2":{"0":{"1":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"a":{"4":{"3":{"c":{"0":{"5":{"2":{"1":{"0":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"2":{"7":{"8":{"0":{"8":{"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"a":{"d":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"w":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"s":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"1":{"0":{"0":{".":{"df":0,"docs":{},"v":{"2":{".":{"0":{".":{"9":{".":{"5":{"3":{"4":{"6":{"3":{"4":{"5":{".":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}}},"df":0,"docs":{}},"f":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{".":{"1":{".":{"5":{"2":{"7":{"8":{"0":{"8":{"8":{".":{"2":{"0":{"0":{"3":{"0":{"5":{".":{"1":{"6":{"4":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"x":{"/":{"df":0,"docs":{},"v":{"2":{".":{"0":{".":{"9":{"/":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"i":{"'":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"d":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"a":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.23606797749979}},"e":{"(":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":2.0}}}},"n":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":2.0},"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"j":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"a":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"w":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"q":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"2":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"/":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}},"g":{"df":0,"docs":{},"r":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"v":{"2":{".":{"0":{".":{"8":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"9":{".":{"5":{"3":{"4":{"6":{"3":{"4":{"5":{".":{"2":{"0":{"1":{"0":{"2":{"8":{".":{"1":{"6":{"4":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"title":{"root":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});