---
title: Installation
description: Vilath Password Store installation documentation
lastUpdate: 2024/07/16 15:43
---

Clone the git repository in your home directory.

```sh
cd ~ && git clone https://github.com/kilavila/.vilath.git
```

Create an alias in your `.bashrc`

```bash ln title="~/.bashrc"
# You can change this alias to whatever you want
# as long as the path is correct it will work
alias vps="~/.vilath/.bin/vps" // [svp! ++]
```

...or run the following command.

```sh
echo "alias vps='~/.vilath/.bin/vps'" >> ~/.bashrc
```

Either close and re-open your terminal, or run `exec bash`.<br>
You can now use your alias anywhere in the shell, which we will do when we configure VPS.

:::tip[Mac user?]
Then you probably want to change `~/.bashrc` to `~/.zshrc`.<br>
Run `which $SHELL` if you don't know which shell you are using.
:::
