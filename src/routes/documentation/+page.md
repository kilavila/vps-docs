---
title: Documentation
description: Vilath Password Store documentation intro
lastUpdate: 2024/07/16 05:45
---

<img
    src="/vps-locked.png"
    alt="Locked password store"
    title="Locked"
    style="
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: 0 0;
        border-radius: 4px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
    "
/>

# Welcome to VPS (Vilath Password Store)

VPS is a secure, **command-line based password manager** designed to help you manage your sensitive information with ease.
Built on a foundation of robust encryption and security, VPS utilizes the industry-standard `GPG` encryption protocol to protect your passwords and secrets.
Additionally, VPS employs the `chattr` command to lock all files, ensuring that your data remains tamper-proof and secure.

:::important[Recommended]
It's recommended to be familiar with Bash, GPG and chattr before using VPS.
:::

Written in `Bash`, VPS provides a lightweight, flexible, and highly customizable solution for storing and retrieving your passwords.
With VPS, you can rest assured that your sensitive information is safe and easily accessible, whenever and wherever you need it.
This documentation will guide you through the [installation](/documentation/getting-started/installation), [configuration](/documentation/getting-started/configuration), and [usage](/documentation/getting-started/usage) of VPS, helping you to get the most out of this powerful password manager.

:::warning[Data backup]
Always create backups of both VPS and GPG!<br>
If you lose your private GPG key, your passwords can't be recovered.
:::

## Easily customizable

Check out the [customization page](/documentation/customization/) if you need pointers on how to make VPS your own!

```bash ln
#!/bin/bash

USER=$(whoami)
DIR="/home/$USER/.vilath"

source "$DIR/.bin/colors" // [svp! !!:7]
source "$DIR/.bin/decrypt"
source "$DIR/.bin/edit"
source "$DIR/.bin/encrypt"
source "$DIR/.bin/initialize"
source "$DIR/.bin/generate"
source "$DIR/.bin/list"

CHATTR=$(lsattr -dR "$DIR" | awk '{print $1}')
if [[ "$CHATTR" == *"i"* ]]; then
	IS_LOCKED=true;
fi
```
