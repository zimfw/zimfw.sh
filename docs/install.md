---
title: Installation
---

Installing Zim is easy:

* With curl:
  
      curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

* With wget:
  
      wget -nv -O - https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

Open a new terminal and you're done. Enjoy your Zsh IMproved! Take some time to
check the available [themes](../themes) and [modules](../modules) you can add to your `~/.zimrc`.

### Manual installation

1. Set Zsh as the default shell:
   
       chsh -s $(which zsh)

2. Add the lines in the following templates to the respective dot files:
   
   * [~/.zshenv](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zshenv)
   * [~/.zshrc](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zshrc)
   * [~/.zlogin](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zlogin)
   * [~/.zimrc](https://raw.githubusercontent.com/zimfw/install/master/src/templates/zimrc)

3. Copy https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh to
   `~/.zim/zimfw.zsh`.

4. Install the modules defined in `~/.zimrc` and build the initialization scripts:
   
       zsh ~/.zim/zimfw.zsh install
