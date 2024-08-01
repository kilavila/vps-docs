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

Generating a random password using openssl, saving it in provided file and encrypting the file.

Alias: `gen`
```sh
vps generate path/file [--copy,-c] | [--length[=password-length],-l[password-length]]
```

VPS will generate a **32 character password** by default if no password-length is provided:

```bash ln title="~/.vilath/.bin/generate"
openssl rand -base64 ${PASSWORD_LENGTH} | tr -dc 'a-zA-Z0-9!@#$%^&*()_+-={}:<>?[]|~'
```

### Hidden files

To generate a hidden directory or file, you just need to append `.` in front of it.<br>
So if you're REALLY into corn, then you can f.ex. run this command:

```sh
vps gen .super-secret-folder/cornhub.website
```

### Listing passwords

Running `vps` without any command or parameters will list password files.<br>
But if you want to pass any flags when listing files, you need to run one of the following aliases:

Alias: `ls`
```sh
vps list [--all,-a]
```

VPS supports hidden files and directories, pass the `--all` flag to list hidden files.<br>
By default these will not be shown by VPS.

### Viewing password

VPS will hide the password by default while viewing a file.<br>
Pass the `--all` flag to view the password file without hiding the password.

Alias: `cat`
```sh
vps view path/file [--all,-a] | [--copy,-c]
```

## Managing passwords

VPS will hide the password by default while editing a file.<br>
Pass the `--all` flag to edit the password file without hiding the password.

```sh
vps edit path/file [--all,-a]
```

### Move password

Move or rename a file within the password store.

Alias: `mv`
```sh
vps move path/source_file path/target_file
```

### Copy password

Copy a file within the password store.

Alias: `cp`
```sh
vps copy path/source_file path/target_file
```

### Delete password

Delete a file or directory within the password store.

Alias: `rm`
```sh
vps remove PATH/FILE
```

:::warning[DELETION IS PERMANENT]
Deleting a files is NOT reversible!<br>
Even if you can restore the files, the content may be corrupted..
:::
