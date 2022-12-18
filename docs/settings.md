---
title: Settings
---

Customize path of the directory used by Zim with the `ZIM_HOME` environment
variable:

    ZIM_HOME=~/.zim

By default, the `zimfw` plugin manager configuration file must be at `~/.zimrc`,
if the `ZDOTDIR` environment variable is not defined. Otherwise, it must be at
`${ZDOTDIR}/.zimrc`. You can customize its full path and name with the
`ZIM_CONFIG_FILE` environment variable:

    ZIM_CONFIG_FILE=~/.config/zsh/zimrc

Modules are installed using `git` by default. If you don't have `git`
installed, or if you want to take advantage of our degit tool for faster and
lighter module installations, you can set degit as the default tool with:

    zstyle ':zim:zmodule' use 'degit'

By default, `zimfw` will check if it has a new version available every 30 days.
This can be disabled with:

    zstyle ':zim' disable-version-check yes
