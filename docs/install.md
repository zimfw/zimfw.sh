---
title: Installation
---

Installing Zim Framework is easy. You can choose either the automatic or manual
method below:

### Automatic installation

This will install a predefined set of modules and a theme for you.

* With `curl`:
  ```zsh
  curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
  ```

* With `wget`:
  ```zsh
  wget -nv -O - https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
  ```

Restart your terminal and you're done. Enjoy your Zsh IMproved! Take some time
to tweak your [`~/.zshrc`](#set-up-~%2F.zshrc) file and to also check the available
[modules] and [themes] you can add to your [`~/.zimrc`](#create-~%2F.zimrc).

### Homebrew

1. Install zimfw with brew:
    ```zsh
    brew install --formula zimfw
    ```

2. Add the following to your `~/.zshrc`:
   ```zsh
   ZIM_HOME=${ZDOTDIR:-${HOME}}/.zim
   # Install missing modules and update ${ZIM_HOME}/init.zsh if missing or outdated.
   if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZIM_CONFIG_FILE:-${ZDOTDIR:-${HOME}}/.zimrc} ]]; then
     source /path/to/zimfw.zsh init
   fi
   # Initialize modules.
   source ${ZIM_HOME}/init.zsh
   ```
   replacing `/path/to/zimfw.zsh` with the path where brew installed the script,
   which is shown in the brew formula caveats. It is usually:
   * `/opt/homebrew/opt/zimfw/share/zimfw.zsh` on Apple Silicon macOS,
   * `/usr/local/opt/zimfw/share/zimfw.zsh` on Intel macOS,
   * `/home/linuxbrew/.linuxbrew/opt/zimfw/share/zimfw.zsh` on Linux.

3. [Create your `~/.zimrc` file](#create-~%2F.zimrc)

4. Restart your terminal and you're done. Enjoy your Zsh IMproved!

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

1. To set where the zimfw plugin manager configuration file will be located:
   ```zsh
   ZIM_CONFIG_FILE=~/.config/zsh/zimrc
   ```
   This is optional. The value of `ZIM_CONFIG_FILE` can be any path your user
   has at least read access to. By default, the file must be at `~/.zimrc`, if
   the `ZDOTDIR` environment variable is not defined. Otherwise, it must be at
   `${ZDOTDIR}/.zimrc`.

2. To set the directory where the zimfw plugin manager will keep necessary files:
   ```zsh
   ZIM_HOME=${ZDOTDIR:-${HOME}}/.zim
   ```
   The value of `ZIM_HOME` can be any directory your user has write access to.
   You can even set it to a cache directory like `${XDG_CACHE_HOME}/zim` or
   `~/.cache/zim`.

3. To automatically download the zimfw plugin manager if missing:
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
   This is optional. Alternatively, you can download the `zimfw.zsh` script
   anywhere your user has write access to: just replace the occurrences of
   `${ZIM_HOME}/zimfw.zsh` by the preferred path, like `/usr/local/share/zimfw/zimfw.zsh`
   for example. If you choose to not include this step, you should manually
   download the `zimfw.zsh` script once and keep it at the preferred path.

4. To automatically install missing modules and update the static initialization
   script if missing or outdated:
   ```zsh
   # Install missing modules and update ${ZIM_HOME}/init.zsh if missing or outdated.
   if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZIM_CONFIG_FILE:-${ZDOTDIR:-${HOME}}/.zimrc} ]]; then
     source ${ZIM_HOME}/zimfw.zsh init
   fi
   ```
   This step is optional, but highly recommended. If you choose to not include
   it, you must remember to manually run `zimfw install` every time you update
   your [`~/.zimrc`](#create-~%2F.zimrc) file. If you have chosen to keep the
   `zimfw.zsh` in a different path as mentioned in the previous step, replace
   `${ZIM_HOME}/zimfw.zsh` by the chosen path.

5. To source the static script, that will initialize your modules:
   ```zsh
   # Initialize modules.
   source ${ZIM_HOME}/init.zsh
   ```

#### Create `~/.zimrc`

This file configures the zimfw plugin manager. It's referred to as `~/.zimrc`
in the documentation for the sake of simplicity, but the actual location of the
file is defined by the following rules:

1. You can define the full path and name of the file with a `ZIM_CONFIG_FILE`
   environment variable. For example:
   ```zsh
   ZIM_CONFIG_FILE=~/.config/zsh/zimrc
   ```

2. Or, if you defined a `ZDOTDIR` environment variable, then the file must be at
   `${ZDOTDIR}/.zimrc`

3. Otherwise, it must be at at `~/.zimrc`, which is it's default location.

As for the contents of the file, you can start with just:
```zsh
# Fish-like syntax highlighting for Zsh.
zmodule zsh-users/zsh-syntax-highlighting
# Fish-like autosuggestions for Zsh.
zmodule zsh-users/zsh-autosuggestions
```

If you also want saner defaults:
```zsh
#
# Modules
#

# Sets sane Zsh built-in environment options.
zmodule environment
# Applies correct bindkeys for input events.
zmodule input
# Utility aliases and functions. Adds colour to ls, grep and less.
zmodule utility

#
# Modules that must be initialized last
#

# Fish-like syntax highlighting for Zsh.
zmodule zsh-users/zsh-syntax-highlighting
# Fish-like autosuggestions for Zsh.
zmodule zsh-users/zsh-autosuggestions
```

If you also want one of our prompt [themes]:
```zsh
#
# Modules
#

# Sets sane Zsh built-in environment options.
zmodule environment
# Applies correct bindkeys for input events.
zmodule input
# Utility aliases and functions. Adds colour to ls, grep and less.
zmodule utility

#
# Prompt
#

# Exposes to prompts how long the last command took to execute, used by asciiship.
zmodule duration-info
# Exposes git repository status information to prompts, used by asciiship.
zmodule git-info
# A heavily reduced, ASCII-only version of the Spaceship and Starship prompts.
zmodule asciiship

#
# Modules that must be initialized last
#

# Fish-like syntax highlighting for Zsh.
zmodule zsh-users/zsh-syntax-highlighting
# Fish-like autosuggestions for Zsh.
zmodule zsh-users/zsh-autosuggestions
```

If you want to use our [completion] module too, instead of using `compinit` directly:
```zsh
#
# Modules
#

# Sets sane Zsh built-in environment options.
zmodule environment
# Applies correct bindkeys for input events.
zmodule input
# Utility aliases and functions. Adds colour to ls, grep and less.
zmodule utility

#
# Prompt
#

# Exposes to prompts how long the last command took to execute, used by asciiship.
zmodule duration-info
# Exposes git repository status information to prompts, used by asciiship.
zmodule git-info
# A heavily reduced, ASCII-only version of the Spaceship and Starship prompts.
zmodule asciiship

#
# Completion
#

# Additional completion definitions for Zsh.
zmodule zsh-users/zsh-completions --fpath src
# Enables and configures smart and extensive tab completion.
# completion must be sourced after all modules that add completion definitions.
zmodule completion

#
# Modules that must be initialized last
#

# Fish-like syntax highlighting for Zsh.
# zsh-users/zsh-syntax-highlighting must be sourced after completion
zmodule zsh-users/zsh-syntax-highlighting
# Fish-like autosuggestions for Zsh.
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
