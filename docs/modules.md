---
title: Modules
---

Zim Framework alone won't change your Zsh experience! By enabling modules, you pick what features you want.

A brief list of modules and their descriptions can be seen below. Clicking on the name of a module will take you to the full documentation for that module.

Add `zmodule <module>` to your `~/.zimrc` and run `zimfw install` to install it.

Behaviour
--------

| Name                                                    | Description                                                |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| [completion](https://github.com/zimfw/completion)       | Enables and configures smart and extensive tab completion. |
| [environment](https://github.com/zimfw/environment)     | Sets generic Zsh built-in environment options.             |
| [input](https://github.com/zimfw/input)                 | Applies correct bindkeys for input events.                 |
| [run-help](https://github.com/zimfw/run-help)           | Figures out where to get the best help, and gets it.       |

Productivity
------------

| Name                                                | Description                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------- |
| [archive](https://github.com/zimfw/archive)         | Provides archive and unarchive functions for easy archive manipulation.     |
| [asdf](https://github.com/zimfw/asdf)               | Sets up asdf, with auto install and optimized usage of the direnv plugin.   |
| [direnv](https://github.com/zimfw/direnv)           | Sets up the direnv Zsh shell integration                                    |
| [exa](https://github.com/zimfw/exa)                 | Adds aliases and better defaults for exa.                                   |
| [fzf](https://github.com/zimfw/fzf)                 | Configures fzf for faster fetching of files and directories names.          |
| [git](https://github.com/zimfw/git)                 | Provides nice git aliases and functions.                                    |
| [k](https://github.com/zimfw/k)                     | All kubectl aliases in one function.                                        |
| [magic-enter](https://github.com/zimfw/magic-enter) | Shown when there is no command and user presses ENTER.                      |
| [pvenv](https://github.com/zimfw/pvenv)             | Manages all python venvs in one place.                                      |
| [ruby](https://github.com/zimfw/ruby)               | Provides ruby, bundler, rbenv and rvm aliases and initialization.           |
| [ssh](https://github.com/zimfw/ssh)                 | Provides a convenient way to load ssh-agent.                                |
| [termtitle](https://github.com/zimfw/termtitle)     | Sets a custom terminal title.                                               |
| [utility](https://github.com/zimfw/utility)         | Adds utility aliases and functions. Adds colour to ls, grep and less.       |

Prompt enhancement
------------------

| Name                                                    | Description                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| [duration-info](https://github.com/zimfw/duration-info) | Exposes to prompts how long the last command took to execute. |
| [git-info](https://github.com/zimfw/git-info)           | Exposes git repository status information to prompts.         |
| [prompt-pwd](https://github.com/zimfw/prompt-pwd)       | Formats the current working directory to be used by prompts.  |

Distro-specific
---------------

| Name                                          | Description                                  |
| --------------------------------------------- | -------------------------------------------- |
| [homebrew](https://github.com/zimfw/homebrew) | Adds aliases for Homebrew.                   |
| [pacman](https://github.com/zimfw/pacman)     | Adds aliases for the pacman package manager. |

Community modules
-----------------

These are modules provided by users of the community.

| Name                                                                              | Description                                                                              |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [joke/zim-chezmoi](https://github.com/joke/zim-chezmoi)                           | Sets up [chezmoi](https://github.com/twpayne/chezmoi) in zsh.                            |
| [joke/zim-github-cli](https://github.com/joke/zim-github-cli)                     | Sets up [github-cli](https://github.com/cli/cli) in zsh.                                 |
| [joke/zim-gopass](https://github.com/joke/zim-gopass)                             | Sets up [gopass](https://github.com/gopasspw/gopass) in zsh.                             |
| [joke/zim-helm](https://github.com/joke/zim-helm)                                 | Sets up [helm](https://github.com/helm/helm) in zsh.                                     |
| [joke/zim-istioctl](https://github.com/joke/zim-istioctl)                         | Sets up [istioctl](https://github.com/istio/istio) in zsh.                               |
| [joke/zim-k9s](https://github.com/joke/zim-k9s)                                   | Sets up [k9s](https://github.com/derailed/k9s) in zsh.                                   |
| [joke/zim-kn](https://github.com/joke/zim-kn)                                     | Sets up [kn](https://github.com/knative/client) in zsh.                                  |
| [joke/zim-kubectl](https://github.com/joke/zim-kubectl)                           | Sets up [kubectl](https://kubernetes.io/docs/reference/kubectl/kubectl/) in zsh.         |
| [joke/zim-minikube](https://github.com/joke/zim-minikube)                         | Sets up [minikube](https://github.com/kubernetes/minikube) in zsh.                       |
| [joke/zim-mise](https://github.com/joke/zim-mise)                                 | Sets up [mise](https://github.com/jdx/mise) in zsh.                                      |
| [joke/zim-rtx](https://github.com/joke/zim-rtx)                                   | Sets up [rtx](https://github.com/jdxcode/rtx) in zsh.                                    |
| [joke/zim-skaffold](https://github.com/joke/zim-skaffold)                         | Sets up [skaffold](https://github.com/GoogleContainerTools/skaffold) in zsh.             |
| [joke/zim-starship](https://github.com/joke/zim-starship)                         | Sets up [starship](https://github.com/starship/starship) prompt in zsh.                  |
| [joke/zim-steampipe](https://github.com/joke/zim-steampipe)                       | Sets up [steampipe](https://github.com/turbot/steampipe) in zsh.                         |
| [joke/zim-yq](https://github.com/joke/zim-yq)                                     | Sets up [yq](https://github.com/mikefarah/yq) in zsh.                                    |
| [kiesman99/zim-zoxide](https://github.com/kiesman99/zim-zoxide)                   | Sets up [zoxide](https://github.com/ajeetdsouza/zoxide) in zsh.                          |
| [pXius/zim-gcloud](https://github.com/pXius/zim-gcloud)                           | Adds completion to [gcloud CLI](https://cloud.google.com/sdk/gcloud).                    |
| [shanwker1223/zim-alias-finder](https://github.com/shanwker1223/zim-alias-finder) | Provides suggestions to executed commands from registered aliases.                       |
