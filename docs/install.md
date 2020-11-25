---
title: Installation
---

Installing Zim is easy:

* With curl:
  
      curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

* With wget:
  
      wget -nv -O - https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

Open a new terminal and you're done! Enjoy your Zsh IMproved! Take some time to
read about the [available modules](../modules) and tweak your `~/.zshrc` file.

If you have a different shell framework installed (like oh-my-zsh or prezto),
*uninstall those first to prevent conflicts*.

### Manual installation

1. Set Zsh as the default shell:
   
       chsh -s $(which zsh)

2. Add the lines in the following templates to the respective dot files:
   
   * [~/.zshenv](https://github.com/zimfw/install/blob/master/src/templates/zshenv)
   * [~/.zshrc](https://github.com/zimfw/install/blob/master/src/templates/zshrc)
   * [~/.zlogin](https://github.com/zimfw/install/blob/master/src/templates/zlogin)
   * [~/.zimrc](https://github.com/zimfw/install/blob/master/src/templates/zimrc)

3. Copy https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh to
   `~/.zim/zimfw.zsh`.

4. Install the modules defined in `~/.zimrc` and build the initialization scripts:
   
       zsh ~/.zim/zimfw.zsh install