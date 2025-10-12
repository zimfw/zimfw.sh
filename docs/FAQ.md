---
title: Frequently Asked Questions
---

# How do I...?

#### How do I install Zim Framework?

Visit the [installation](../install) page to learn more about various ways of installing Zim Framework.

#### How do I uninstall Zim Framework?

The best way to remove Zim Framework is to manually delete `~/.zim`, `~/.zimrc`, and remove the initialization lines from your `~/.zshenv`, `~/.zshrc` and `~/.zlogin`.

#### How do I add modules?

Simply edit your Zim Framework config, installed by default at `~/.zimrc`, and add a line with the `zmodule` command followed by the module you wish to install. For more information about the `zmodule` options, visit the [commands page](../commands#zmodule). After adding the relevant lines to your `~/.zimrc`, run `zimfw install` to install the new modules and then restart your shell with `exec zsh`.
