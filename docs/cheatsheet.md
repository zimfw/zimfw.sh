---
title: Cheatsheet
---

<h1>Table of Contents</h1>

[[toc]]

---

# Expressions

| Expression        | Example             | Description                             |
| ----------------- | ------------------- | --------------------------------------- |
| `!!`              | `sudo !!`           | Last command                            |
| `!*`              | `vim !*`            | Last command’s parameters               |
| `!^`              |                     | Last command’s first parameter          |
| `!$`              |                     | Last command’s last parameter           |
| `!?ls`            | `sudo !?ls`         | Command and params of last `ls` command |
| `!?ls?:*`         |                     | Params of last `ls` command             |
| `*(m0)`           | `rm *(m0)`          | Last modified today                     |
| `*(m-4)`          |                     | Last modified <4 days ago               |

# Process Substitution

| Expression   | Example                                       | Description                                                             |
| ------------ | --------------------------------------------- | ----------------------------------------------------------------------- |
| `<(COMMAND)` | `grep "needle" <(curl "https://haystack.io")` | Replace argument with *named pipe/FIFO* (read-only) with command output |
| `=(COMMAND)` | `vim =(curl "https://haystack.io")`           | Replace argument with *file* (writable) containing command output       |

# [Tab Completion](https://github.com/zimfw/completion)

| Provides helpful explanations for options and what they do. |
| ----------------------------------------------------------- |
| *ls -(tab)*                                                 |
| *cap (tab)*                                                 |
| *rake (tab)*                                                |
| *ssh (tab)*                                                 |
| *sudo umount (tab)*                                         |
| *kill (tab)*                                                |
| *unrar (tab)*                                               |

# [ls](https://github.com/zimfw/utility#ls)

  * `ls` lists directories first (GNU only) and with colour (applies to all aliases below).
  * `ll` lists with long format and human-readable sizes (applies to all aliases below).
  * `l`  lists all files.
  * `lm` lists all files using pager.
  * `lr` lists recursively.
  * `lx` lists sorted by extension (GNU only).
  * `lk` lists sorted by largest file size last.
  * `lt` lists sorted by newest modification time last.
  * `lc` lists sorted by newest status change (ctime) last.

# [Utilities](https://github.com/zimfw/utility)

  * `get` downloads from the given URL using `aria2c`, `axel`, `wget` or `curl`.
  * `mkcd` creates and changes to the given directory.
  * `mkpw` generates a random password with the given length and set of characters.


# [Archives](https://github.com/zimfw/archive) (requires module)

  * `archive` generates an archive based on file extension.
  * `unarchive` unarchives files based on the extensions.
  * `lsarchive` lists archives contents based on the extensions.

# [Git](https://github.com/zimfw/git)

  * `G` is short for `git`.

### Branch

  * `Gb` lists, creates, renames, and deletes branches.
  * `Gbc` creates a new branch.
  * `Gbd` detaches *HEAD* at the tip of the current or given branch.
  * `Gbl` lists branches and their commits.
  * `GbL` lists local and remote branches and their commits.
  * `Gbm` renames a branch.
  * `GbM` renames a branch even if the new branch name already exists.
  * `GbR` resets a branch even if the branch name already exists.
  * `Gbs` lists branches and their commits with ancestry graphs.
  * `GbS` lists local and remote branches and their commits with ancestry graphs.
  * `Gbu` unsets the remote-tracking information for the current or given branch.
  * `GbG` deletes all local branches tracking remote branches that are gone.
  * `Gbx` deletes a branch.
  * `GbX` deletes a branch irrespective of its merged status.

### Commit

  * `Gc` records changes to the repository.
  * `Gca` commits all modified and deleted files.
  * `GcA` commits all modified and deleted files interactively.
  * `Gcm` commits with the given message.
  * `Gco` checks out a branch or paths to the working tree.
  * `GcO` checks out hunks from the index or the tree interactively.
  * `Gcf` amends the tip of the current branch reusing the same log message as *HEAD*.
  * `GcF` amends the tip of the current branch.
  * `Gcp` applies changes introduced by existing commits.
  * `GcP` applies changes introduced by existing commits without committing.
  * `Gcr` reverts existing commits by reverting patches and recording new commits.
  * `GcR` removes the *HEAD* commit.
  * `Gcs` shows one or more objects (blobs, trees, tags and commits).
  * `GcS` commits with GPG signature.
  * `Gcu` commits with fixup message using given commit.
  * `GcU` commits with squash message using given commit.
  * `Gcv` verifies the GPG signature of commits.

### Conflict

  * `GCl` lists unmerged files.
  * `GCa` adds unmerged file contents to the index.
  * `GCe` executes merge-tool on all unmerged files.
  * `GCo` checks out our changes for unmerged paths.
  * `GCO` checks out our changes for all unmerged paths.
  * `GCt` checks out their changes for unmerged paths.
  * `GCT` checks out their changes for all unmerged paths.

### Data

  * `Gd` displays information about files in the index and the work tree.
  * `Gdc` lists cached files.
  * `Gdx` lists deleted files.
  * `Gdm` lists modified files.
  * `Gdu` lists untracked files.
  * `Gdk` lists killed files.
  * `Gdi` lists ignored files.

### Fetch

  * `Gf` downloads objects and references from another repository.
  * `Gfc` clones a repository into a new directory.
  * `Gfm` fetches from and merges with another repository or local branch.
  * `Gfr` fetches from and rebases on top of another repository or local branch.
  * `Gfu` prunes stale remote-tracking branches, fetches all remotes and merges.

### Grep

  * `Gg` displays lines matching a pattern.
  * `Ggi` displays lines matching a pattern ignoring case.
  * `Ggl` lists files matching a pattern.
  * `GgL` lists files that are not matching a pattern.
  * `Ggv` displays lines not matching a pattern.
  * `Ggw` displays lines matching a pattern at word boundary.

### Index

  * `Gia` adds file contents to the index.
  * `GiA` adds file contents to the index interactively.
  * `Giu` adds file contents to the index (updates only known files).
  * `Gid` displays changes between the index and a named commit (diff).
  * `GiD` displays changes between the index and a named commit (word diff).
  * `Gir` resets the current *HEAD* to the specified state.
  * `GiR` resets the current index interactively.
  * `Gix` removes files from the index (recursively).
  * `GiX` removes files from the index (recursively and forced).

### Log

  * `Gl` displays the log.
  * `Gls` displays the stats log.
  * `Gld` displays the diff log.
  * `Glf` displays the diff log of a given file, continuing beyond renames.
  * `Glo` displays the one line log.
  * `GlO` displays the one line log with authors and dates.
  * `Glg` displays the graph log.
  * `GlG` displays the graph log with authors and dates.
  * `Glv` displays the log, verifying the GPG signature of commits.
  * `Glc` displays the commit count for each contributor in descending order.
  * `Glr` manages reflog information.

### Merge

  * `Gm` joins two or more development histories together.
  * `Gma` aborts the conflict resolution, and reconstructs the pre-merge state.
  * `Gmc` continues the merge after conflicts are resolved.
  * `GmC` performs the merge but does not commit.
  * `GmF` creates a merge commit even if the merge could be resolved as a fast-forward.
  * `GmS` performs the merge and GPG-signs the resulting commit.
  * `Gmv` verifies the GPG signature of the tip commit of the side branch being merged.
  * `Gmt` runs the merge conflict resolution tools to resolve conflicts.

### Push

  * `Gp` updates remote refs along with associated objects.
  * `Gpf` forces a push safely (with "lease").
  * `GpF` forces a push.
  * `Gpa` pushes all branches.
  * `GpA` pushes all branches and tags.
  * `Gpt` pushes all tags.
  * `Gpc` pushes the current branch and adds *origin* as an upstream reference for it.
  * `Gpp` pulls and pushes the current branch from *origin* to *origin*.

### Rebase

  * `Gr` forward-ports local commits to the updated upstream head.
  * `Gra` aborts the rebase, and checks out the original branch.
  * `Grc` continues the rebase after merge conflicts are resolved.
  * `Gri` makes a list of commits to be rebased and opens the editor.
  * `Grs` skips the current patch.
  * `GrS` rebases and GPG-signs the commits.

### Remote

  * `GR` manages tracked repositories.
  * `GRl` lists remote names and their URLs.
  * `GRa` adds a new remote.
  * `GRx` removes a remote.
  * `GRm` renames a remote.
  * `GRu` fetches remotes updates.
  * `GRp` prunes all stale remote-tracking branches.
  * `GRs` shows information about a given remote.
  * `GRS` changes URLs for a remote.

### Stash

  * `Gs` stashes the changes of the dirty working directory.
  * `Gsa` applies the changes recorded in a stash to the working directory.
  * `Gsx` drops a stashed state.
  * `GsX` drops all the stashed states.
  * `Gsl` lists stashed states.
  * `Gsd` displays changes between the stash and its original parent.
  * `Gsp` removes and applies a single stashed state from the stash list.
  * `Gsr` recovers a given stashed state.
  * `Gss` stashes the working directory changes, including untracked files.
  * `GsS` stashes the working directory changes interactively.
  * `Gsw` stashes the working directory changes retaining the index.
  * `Gsu` unapplies (reverts) applied changes.

### Submodule

  * `GS` initializes, updates, or inspects submodules.
  * `GSa` adds given a repository as a submodule.
  * `GSf` evaluates a shell command in each of checked out submodules.
  * `GSi` initializes submodules.
  * `GSI` initializes and clones submodules recursively.
  * `GSl` lists the commits of all submodules.
  * `GSm` moves a submodule.
  * `GSs` synchronizes remote URL of submodules to the value specified in `.gitmodules`.
  * `GSu` fetches and merges the latest remote changes for all submodules.
  * `GSx` removes a submodule.

### Tag

  * `Gt` creates, lists, deletes or verifies a tag object signed with GPG.
  * `Gts` creates a GPG-signed tag.
  * `Gtv` verifies the GPG signature of tags.
  * `Gtx` deletes tags with given names.

### Main working tree

  * `Gws` displays the working tree status in short format.
  * `GwS` displays the working tree status.
  * `Gwd` displays changes between the working tree and the index (diff).
  * `GwD` displays changes between the working tree and the index (word diff).
  * `Gwr` resets the current *HEAD* to the specified state, does not touch the index nor the working tree.
  * `GwR` resets the current *HEAD*, index and working tree to the specified state.
  * `Gwc` cleans untracked files from the working tree (dry-run).
  * `GwC` cleans untracked files from the working tree.
  * `Gwm` moves or renames files.
  * `GwM` moves or renames files (forced).
  * `Gwx` removes files from the working tree and from the index (recursively).
  * `GwX` removes files from the working tree and from the index (recursively and forced).

### Working trees

  * `GW` manages multiple working trees.
  * `GWa` creates path with a new working tree.
  * `GWl` lists details of all working trees.
  * `GWm` moves a working tree to a new location.
  * `GWp` prunes working tree information.
  * `GWx` removes a working tree.
  * `GWX` removes a working tree (forced).

### Misc

  * `G..` changes the current directory to the top level of the working tree.
  * `G?` looks up the aliases defined here with the given regular expressions.

# [Homebrew](https://github.com/zimfw/homebrew) (requires module)

  * `brewc` cleans the cache.
  * `brewC` scrubs the cache, including downloads for the latest versions.
  * `brewd` checks your system for potential problems.
  * `brewe` edits given formula.
  * `brewi` shows information about given formula.
  * `brewI` installs given formula.
  * `brewl` lists installed formulae.
  * `brewL` lists installed formulae that don't depend on other installed formula.
  * `brewo` lists outdated installed formulae.
  * `brewr` reinstalls given formula.
  * `brews` performs a search of formula names.
  * `brewS` manages background services with macOS' launchctl daemon manager.
  * `brewu` updates Homebrew and all formulae.
  * `brewU` upgrades outdated and unpinned formulae.
  * `brewx` uninstalls a given formula.
  * `brewX` deletes all installed versions of given formula.

### Homebrew Cask

  * `cask` is short for `brew cask`.
  * `caske` edits given cask.
  * `caski` shows information about given cask.
  * `caskI` installs given cask.
  * `caskl` lists installed casks.
  * `casko` lists outdated installed casks.
  * `caskr` reinstalls given cask.
  * `casks` performs a search of cask tokens.
  * `caskU` upgrades given cask or all outdated casks, if none given.
  * `caskx` uninstalls given cask.
  * `caskX` uninstalls even if given cask does not appear to be present.
  * `caskz` zaps all files associated with given cask.

# [Pacman](https://github.com/zimfw/pacman) (requires module)

  * `pacb` builds package in the current directory, cleanups, and installs.
  * `paci` installs, syncs, and upgrades packages.
  * `pacu` installs, syncs, and upgrades packages (forcibly refreshes package list).
  * `pacU` installs packages from pkg file.
  * `pacd` installs all packages in current directory.
  * `pacr` removes package and unneeded dependencies.
  * `pacrm` removes package, unneeded dependencies, and configuration files.
  * `pacq` queries package information from remote repository.
  * `pacQ` queries package information from local repository.
  * `pacs` searches for package in the remote repository.
  * `pacS` searches for package in the local repository.
  * `pacol` lists orphan packages.
  * `pacor` removes all orphan packages.
  * `pacown` lists all files provided by a given package.
  * `pacblame` shows packages that own a specified file.

#### aur helpers

  * `aurb` clones the given package name from the AUR, builds, and installs.
  * `aurd` clones the given package name from the AUR, but does not build.
  * `auru` from a directory created with `aurb`, will update, build, and install the package.
