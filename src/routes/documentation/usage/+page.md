---
title: Usage
description: Vilath Password Store usage documentation
lastUpdate: 2024/07/18 05:36
---

:::tip[Lock/Unlock]
Use `vps lock` and `vps unlock` followed by your sudo password.<br>
This prevents deletion and editing files.<br>
When the password store is locked you can still view your passwords.<br>
But in order to edit, create, move and delete files you need to unlock the store!
:::

VPS command structure:

```sh
vps COMMAND PARAMETER --FLAG
```

VPS uses folders and files to organize your passwords.<br>
When your provide VPS with a `PATH` and `FILE` it will be appended onto the password store path.

F.ex:

```sh
vps gen web/github.com
```

...will create a `web` folder in `~/.vilath` and a `github.com` file.<br>
The file will be encrypted and the entire path will look like this:

```sh
/home/$USER/.vilath/web/github.com.gpg
```

You will never see `.gpg` extensions or have to use them when you use VPS!

:::tip[Encryption]
VPS will automatically encrypt your password files.<br>
When you f.ex edit a file through VPS, a temporary file is created which will be encrypted and the unencrypted file will be shredded!
:::

## Generating password

To generate a password you can run:

```sh
vps generate PATH/FILE

# OR

vps gen PATH/FILE
```

VPS will generate a random **32 character password** by default using `openssl`:

```bash ln title="~/.vilath/.bin/generate"
openssl rand -base64 32 | tr -dc 'a-zA-Z0-9!@#$%^&*()_+-={}:<>?[]|~'
```

To generate a hidden directory or file, you just need to append `.` in front of it.<br>
So if you're REALLY into corn, then you can f.ex. run this command:

```sh
vps gen .super-secret-folder/cornhub.website
```

## Listing passwords

Running `vps` without any command or parameters will list password files.<br>
But if you want to pass any flags when listing files, you need to run one of the following aliases:

```sh
vps list

# OR

vps ls
```

VPS supports hidden files and directories, and to view these you need to pass the `--all` or `-a` flag.<br>
By default these will not be shown by VPS.

## Viewing password

```sh
vps view PATH/FILE

# OR

vps cat PATH/FILE
```

## Editing password

```sh
vps edit PATH/FILE
```

## Move password

```sh
vps move PATH/FILE

# OR

vps mv PATH/FILE
```

## Copy password

```sh
vps copy PATH/FILE

# OR

vps cp PATH/FILE
```

## Delete password

```sh
vps remove PATH/FILE

# OR

vps rm PATH/FILE
```
