---
title: Installation
---

Installing Zim is easy:

* With curl:

      curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

* With wget:

      wget -nv -O - https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

Open a new terminal and you're done. Enjoy your Zsh IMproved! Take some time to
tweak your `~/.zshrc` file, and to also check the available [modules] and [themes]
you can add to your `~/.zimrc`.

### Manual installation

1. Set Zsh as the default shell:

       chsh -s $(which zsh)

2. Prepend the lines in the following templates to the respective dot files:

   * [~/.zshenv](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zshenv)
   * [~/.zshrc](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zshrc)
   * [~/.zlogin](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zlogin)
   * [~/.zimrc](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zimrc)

3. Restart your terminal to automatically install the `zimfw` command line utility,
   install the modules defined in `~/.zimrc`, and build the initialization scripts.

[modules]: ../modules
[themes]: ../themes
