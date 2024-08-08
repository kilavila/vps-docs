---
title: Autocompletion
description: Vilath Password Store autocompletion documentation
lastUpdate: 2024/08/08 20:38
---

Enhance your VPS experience with bash autocompletion!
This feature can save you time and reduce errors by suggesting possible completions for commands, filenames, and more.
To enable bash autocompletion, add the following to your `.bashrc` file:

```bash ln title="~/.bashrc"
alias vps='~/.vilath/.bin/vilath'

_vps_autocomplete() { // [svp! !!:21]
    local cur prev words cword
    _get_comp_words_by_ref -n = cur prev words cword

    if [[ ${prev} == "edit" ]] ||
       [[ ${prev} == "qr" ]] ||
       [[ ${prev} == "view" ]] || [[ ${prev} == "cat" ]] ||
       [[ ${prev} == "copy" ]] || [[ ${prev} == "cp" ]] ||
       [[ ${prev} == "move" ]] || [[ ${prev} == "mv" ]] ||
       [[ ${prev} == "remove" ]] || [[ ${prev} == "rm" ]];
    then
        local args=( $(find ~/.vilath -name '*.gpg' | sed -E 's/^.*\.vilath\/(.*)\.gpg$/\1/g') )
    else
        local args=( --help copy edit generate git initialize list lock move qr remove search unlock view )
    fi

    COMPREPLY=( $(compgen -W "${args[*]}" -- $cur) )
}

complete -F _vps_autocomplete vps
```

Once installed, bash will automatically suggest completions as you type.
For more advanced configurations, you can customize your `.bashrc` file to include personalized autocompletion scripts.
