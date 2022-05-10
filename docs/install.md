---
title: Installation
---

Installing Zim is easy. You can choose either the automatic or manual method below:

### Automatic installation

This will install a predefined set of modules and a theme for you.

* With `curl`:

      curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

* With `wget`:

      wget -nv -O - https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

Restart your terminal and you're done. Enjoy your Zsh IMproved! Take some time
to tweak your [`~/.zshrc`](#set-up-~%2F.zshrc) file, and to also check the available
[modules] and [themes] you can add to your [`~/.zimrc`](#create-~%2F.zimrc).

### Manual installation

1. Set Zsh as the default shell, if you haven't done so already:
    ```zsh
    chsh -s $(which zsh)
    ````

2. [Set up your `~/.zshrc` file](#set-up-~%2F.zshrc)

3. [Create your `~/.zimrc` file](#create-~%2F.zimrc)

4. Restart your terminal and you're done. Enjoy your Zsh IMproved!

#### Set up `~/.zshrc`

Add the lines below to your `~/.zshrc` file, in the following order:

1. To use our `degit` tool by default to install modules:
   ```zsh
   zstyle ':zim:zmodule' use 'degit'
   ````
   This is optional, and only required if you don't have `git` installed (yes,
   Zim works even without `git`!)

2. To set where the directory used by Zim will be located:
   ```zsh
   ZIM_HOME=~/.zim
   ```
   The value of `ZIM_HOME` can be any directory your user has write access to.
   You can even set it to a cache directory like `${XDG_CACHE_HOME}/zim` or
   `~/.cache/zim` if you also include the step below, that automatically
   downloads the `zimfw` plugin manager.

3. To automatically download the `zimfw` plugin manager if missing:
   ```zsh
   # Download zimfw plugin manager if missing.
   if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
     curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
         https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
   fi
   ```
   Or if you use `wget` instead of `curl`:
   ```zsh
   # Download zimfw plugin manager if missing.
   if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
     mkdir -p ${ZIM_HOME} && wget -nv -O ${ZIM_HOME}/zimfw.zsh \
         https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
   fi
   ```
   This is optional. If you choose to not include this step, you should manually
   download the `zimfw.zsh` script once and keep it at `${ZIM_HOME}`.

4. To automatically install missing modules and update the initialization script
   if missing or outdated:
   ```zsh
   # Install missing modules, and update ${ZIM_HOME}/init.zsh if missing or outdated.
   if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZDOTDIR:-${HOME}}/.zimrc ]]; then
     source ${ZIM_HOME}/zimfw.zsh init -q
   fi
   ```
   This step is optional, but highly recommended. If you choose to not include
   it, you must remember to manually run `zimfw install` every time after you
   update your [`~/.zimrc`](#create-~%2F.zimrc) file.

5. To source the initialization script, that initializes your modules:
   ```zsh
   # Initialize modules.
   source ${ZIM_HOME}/init.zsh
   ```

#### Create `~/.zimrc`

You must create your `.zimrc` file at `~/.zimrc`, if the `ZDOTDIR` environment
variable is not defined. Otherwise, it must be at `${ZDOTDIR}/.zimrc`. It's
referred to as `~/.zimrc` in the documentation for the sake of simplicity.

You can start with just:
```zsh
zmodule zsh-users/zsh-syntax-highlighting
zmodule zsh-users/zsh-autosuggestions
```

If you also want one of our prompt [themes]:
```
zmodule asciiship
zmodule zsh-users/zsh-syntax-highlighting
zmodule zsh-users/zsh-autosuggestions
```

If you want to use our [completion] module too, instead of using `compinit` directly:
```zsh
zmodule asciiship
zmodule zsh-users/zsh-completions --fpath src
zmodule completion
zmodule zsh-users/zsh-syntax-highlighting
zmodule zsh-users/zsh-autosuggestions
```
The [completion] module calls `compinit` for you. You should remove any
`compinit` calls from your `~/.zshrc` when you use this module. The modules will
be initialized in the order they are defined, and [completion] must be
initialized *after* all modules that add completion definitions, so it must come
after [zsh-users/zsh-completions].

Check the [`zmodule` usage](../commands/#zmodule) for more examples on how to use it to
define the modules you want to use.

[modules]: ../modules
[themes]: ../themes
[completion]: https://github.com/zimfw/completion
[zsh-users/zsh-completions]: https://github.com/zsh-users/zsh-completions
