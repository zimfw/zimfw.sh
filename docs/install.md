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
[modules] and [themes] you can add to your `~/.zimrc`.

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

3. Restart your terminal and you're done. Enjoy your Zsh IMproved!

### Manual installation

1. Set Zsh as the default shell, if you haven't done so already:
    ```zsh
    chsh -s $(which zsh)
    ```

2. [Set up your `~/.zshrc` file](#set-up-~%2F.zshrc)

3. Restart your terminal and you're done. Enjoy your Zsh IMproved!

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
   This is optional. Alternatively, the `zimfw.zsh` script can be installed with
   a package manager or downloaded anywhere your user has write access to: just
   replace the occurrences of `${ZIM_HOME}/zimfw.zsh` by the preferred path,
   like `/usr/local/share/zimfw/zimfw.zsh` for example. If you choose to not
   include this step, you should install or manually download the `zimfw.zsh`
   script once and keep it at the preferred path.

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
   your `~/.zimrc` file. If you have chosen to keep the `zimfw.zsh` script in a
   different path as mentioned in the previous step, replace
   `${ZIM_HOME}/zimfw.zsh` by the chosen path.

5. To source the static script, that will initialize your modules:
   ```zsh
   # Initialize modules.
   source ${ZIM_HOME}/init.zsh
   ```

[modules]: ../modules
[themes]: ../themes
[completion]: https://github.com/zimfw/completion
[zsh-users/zsh-completions]: https://github.com/zsh-users/zsh-completions
