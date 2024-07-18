---
title: Configuration
description: Vilath Password Store configuration documentation
lastUpdate: 2024/07/18 05:36
---

# Configuration

Configuring VPS is super simple, first we need GPG keys and then we will tell VPS to use our key.

:::tip[Already have GPG keys?]
If you already have GPG keys set up, you can skip to the bottom of the page.
:::

## GNU Privacy Guard

Setting up GPG keys is easy, but we won't go into details of how GPG works here.<br>
If you want to know more about GPG you can read about it on the official website, or run `man gpg`.

In order to create a GPG public and private key interactively, run the following command:

```sh
gpg --full-generate-key
```

Key type should be `RSA` and key size is recommended to be `4096`.<br>
The `email` you use will be your GPG ID, this doesn't have to be a real email address.

:::important[GPG ID]
Your GPG ID can only contain: `a-z`, `A-Z`, `0-9`, `-`, `_`, `.` and `@`.<br>
This is a limitation from VPS not GPG.
:::

:::note[Generating keys...]
Gererating GPG keys can take some time and depends on the key size!
:::

## VPS Configuration

Now that we have generated GPG keys, we can tell VPS to use our GPG ID:

```sh
vps initialize GPG-ID

# OR

vps init GPG-ID
```

Replace `GPG-ID` with your email.<br>
Your ID will be saved in `~/.vilath/.vps_gpg_id`.

You can now start generating passwords!
