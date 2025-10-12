---
title: Settings
---

Set the path of the directory used by zimfw with the `ZIM_HOME` environment
variable:

    ZIM_HOME=${ZDOTDIR:-${HOME}}/.zim

By default, the zimfw plugin manager configuration file must be at `~/.zimrc`,
if the `ZDOTDIR` environment variable is not defined. Otherwise, it must be at
`${ZDOTDIR}/.zimrc`. You can customize its full path and name with the
`ZIM_CONFIG_FILE` environment variable:

    ZIM_CONFIG_FILE=~/.config/zsh/zimrc

The zimfw plugin manager will detect if `git` is installed and fall back to work
without `git` with its degit tool. If you want to take advantage of its degit
tool regardless for faster and lighter module installations, you can set degit
as the default tool with:

    zstyle ':zim:zmodule' use 'degit'

By default, zimfw will check if it has a new version available every 30 days. If
the `zimfw.zsh` file cannot be upgraded, because your user does not have write
access to it, then this will be disabled. This can be manually disabled with:

    zstyle ':zim' disable-version-check yes

By default, zimfw will disable color output when executed through a pipe or as a
non-TTY ssh command. To force disabling color output, prefix the zimfw call with
`NO_COLOR=1`, like:

    NO_COLOR=1 zimfw install

or add the following to your `.zshrc`, which should also disable color output
for other tools. See https://no-color.org/

    export NO_COLOR=1

