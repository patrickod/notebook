### QEMU + libvirtd

#### creating sparse img

new sparse "qcow2" type image of size 128GB

```bash
qemu-img create -f qcow2 guest.img 128G
```

#### create sparse CoW img based on snapshot

```bash
qemu-img create -f qcow2 -b snapshot.img new-guest.img
```
