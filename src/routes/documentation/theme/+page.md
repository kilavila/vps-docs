---
title: Theme
description: Vilath Password Store theme guide
lastUpdate: 2024/07/18 05:36
---

Creating a new colorscheme for VPS is very easy and can be done in a minute.<br>
The command `tput setaf` can be used to set foreground color, while `tput setab` can be used to set background color.
By using numbers between `0` and `255` we can change the colors, like in the example below.

```bash ln title="~/.vilath/.bin/colors"
NC=$(tput setaf 0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
GREY=$(tput setaf 7)
DARK_GREY=$(tput setaf 8)
```

To apply a color we can use the variable assigned to it, f.ex:

```bash
echo "${RED}This text is red, ${GREEN} this is green"
echo "This text is also green...${NC}"
echo "Now our text is back to it's default color!"
```

:::tip[List colors]
Simply run `colors` in your terminal to view all available colors!
:::
