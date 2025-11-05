---
title: Commands
---

The zimfw plugin manager installs your modules at `${ZIM_HOME}/modules` and
builds a static script at `${ZIM_HOME}/init.zsh` that will initialize them. Your
modules are defined in your `~/.zimrc` file.

The `~/.zimrc` file must contain `zmodule` calls to define the modules to be
initialized. The modules will be initialized in the same order they're defined.

The `~/.zimrc` file is not sourced during Zsh startup and it's only used to
configure the zimfw plugin manager.

### zmodule

Below are some usage examples:

  * A module from the [@zimfw] organization: `zmodule archive`
  * A module from another GitHub organization: `zmodule StackExchange/blackbox`
  * A module with a custom URL: `zmodule https://gitlab.com/Spriithy/basher.git`
  * A module at an absolute path, that is already installed:
    `zmodule /usr/local/share/zsh-autosuggestions`
  * A module with a custom fpath: `zmodule zsh-users/zsh-completions --fpath src`
  * A module with a custom initialization file and with git submodules disabled:
    `zmodule spaceship-prompt/spaceship-prompt --source spaceship.zsh --no-submodules` or
    `zmodule spaceship-prompt/spaceship-prompt --name spaceship --no-submodules`
  * A module with two custom initialization files:
    `zmodule sindresorhus/pure --source async.zsh --source pure.zsh`. Separate
    zmodule calls can also be used. In this equivalent example, the second call
    automatically discovers the second file to be sourced:
    ```
    zmodule sindresorhus/pure --source async.zsh
    zmodule sindresorhus/pure
    ```
  * A module with a custom initialization command:
    `zmodule skywind3000/z.lua --cmd 'eval "$(lua {}/z.lua --init zsh enhanced once)"'`
  * A module with an on-pull command. It can be used to create a cached initialization script:
    `zmodule skywind3000/z.lua --on-pull 'lua z.lua --init zsh enhanced once >! init.zsh'`
  * A module with a big git repository: `zmodule romkatv/powerlevel10k --use degit`
  * A module with a custom root subdirectory: `zmodule ohmyzsh/ohmyzsh --root plugins/vim-interaction`
  * A module with multiple roots:
    ```
    zmodule sorin-ionescu/prezto --root modules/command-not-found
    zmodule sorin-ionescu/prezto --root modules/gnu-utility
    ```
    or
    ```
    zmodule ohmyzsh/ohmyzsh --root plugins/perl
    zmodule ohmyzsh/ohmyzsh --root plugins/vim-interaction
    ```

<pre>Usage: <b>zmodule</b> &lt;url&gt; [<b>-n</b>|<b>--name</b> &lt;module_name&gt;] [<b>-r</b>|<b>--root</b> &lt;path&gt;] [options]

Add <b>zmodule</b> calls to your <b>~/.zimrc</b> file to define the modules to be initialized. The initiali-
zation will be done in the same order it&apos;s defined.

  &lt;url&gt;                      Module absolute path or repository URL. The following are equiva-
                             lent: <b>&apos;foo&apos;</b>, <b>&apos;zimfw/foo&apos;</b>, <b>&apos;https://github.com/zimfw/foo.git</b>&apos;.
                             If an absolute path is given, the module is considered externally
                             installed and won&apos;t be installed or updated by zimfw.
  <b>-n</b>, <b>--name</b> &lt;module_name&gt;   Set a custom module name. Default: the last component in &lt;url&gt;.
                             Slashes can be used inside &lt;module_name&gt; to organize the module
                             into subdirectories. The module will be installed at
                             <b>${ZIM_HOME}/</b>&lt;module_name&gt;.
  <b>-r</b>, <b>--root</b> &lt;path&gt;          Relative path to the module root.

Per-module options:
  <b>-b</b>, <b>--branch</b> &lt;branch_name&gt;
                             Use specified branch when installing and updating the module.
                             Overrides the tag option. Default: the repository default branch.
  <b>-t</b>, <b>--tag</b> &lt;tag_name&gt;       Use specified tag when installing and updating the module. Over-
                             rides the branch option.
  <b>-u</b>, <b>--use</b> &lt;tool_name&gt;      Install and update the module using the defined tool. Default is
                             either defined using <b>zstyle &apos;:zim:zmodule&apos; use &apos;</b>&lt;tool_name&gt;<b>&apos;</b> or
                             set to <b>&apos;auto&apos;</b>. The tools available are:
                             <b>&apos;auto&apos;</b> tries to auto detect the tool to be used. When installing
                             a new module, <b>&apos;git&apos;</b> will be used if the git command is available,
                             otherwise <b>&apos;degit&apos;</b> will be used.
                             <b>&apos;git&apos;</b> uses the git command. Local changes are preserved on up-
                             dates.
                             <b>&apos;degit&apos;</b> uses curl or wget, and currently only works with GitHub
                             URLs. Modules install faster and take less disk space. Local
                             changes are lost on updates. Git submodules are not supported.
                             <b>&apos;mkdir&apos;</b> creates an empty directory. The &lt;url&gt; is only used to set
                             the module name. Use the <b>-c</b>, <b>--cmd</b> option or <b>--on-pull</b> option to
                             execute the desired command to generate the module files.
      <b>--no-submodules</b>        Don&apos;t install or update git submodules.
  <b>-z</b>, <b>--frozen</b>               Don&apos;t install or update the module.

  The per-module options above are carried over multiple zmodule calls for the same module.
  Modules are uniquely identified by their name.

Per-module-root options:
      <b>--if</b> &lt;test&gt;            Will only initialize module root if specified test returns a zero
                             exit status. The test is evaluated at every new terminal startup.
      <b>--if-command</b> &lt;command_name&gt;
                             Will only initialize module root if specified external command is
                             available. This is evaluated at every new terminal startup.
                             Equivalent to <b>--if &apos;(( \${+commands[</b>&lt;command_name&gt;<b>]} ))&apos;</b>.
      <b>--if-ostype</b> &lt;ostype&gt;   Will only initialize module root if <b>OSTYPE</b> is equal to the given
                             expression. This is evaluated at every new terminal startup.
                             Equivalent to <b>--if &apos;[[ \${OSTYPE} == </b>&lt;ostype&gt;<b> ]]&apos;</b>.
      <b>--on-pull</b> &lt;command&gt;    Execute command after installing or updating the module. The com-
                             mand is executed in the module root directory.
  <b>-d</b>, <b>--disabled</b>             Don&apos;t initialize the module root or uninstall the module.

  The per-module-root options above are carried over multiple zmodule calls for the same mod-
  ule root.

Per-call initialization options:
  <b>-f</b>, <b>--fpath</b> &lt;path&gt;         Will add specified path to fpath. The path is relative to the
                             module root directory. Default: <b>&apos;functions&apos;</b>, if the subdirectory
                             exists and is non-empty.
  <b>-a</b>, <b>--autoload</b> &lt;function_name&gt;
                             Will autoload specified function. Default: all valid names inside
                             the <b>functions</b> subdirectory, if any.
  <b>-s</b>, <b>--source</b> &lt;file_path&gt;   Will source specified file. The path is relative to the module
                             root directory. Default: <b>&apos;init.zsh&apos;</b>, if a non-empty <b>functions</b>
                             subdirectory exists, else the largest of the files matching the
                             glob <b>(init.zsh|</b>&lt;name&gt;<b>.(zsh|plugin.zsh|zsh-theme|sh))</b>, if any. The
                             &lt;name&gt; in the glob is resolved to the last component of the mod-
                             ule name and the last component of the path to the module root.
  <b>-c</b>, <b>--cmd</b> &lt;command&gt;        Will execute specified command. Occurrences of the <b>{}</b> placeholder
                             in the command are substituted by the module root directory path.
                             I.e., <b>-s &apos;foo.zsh&apos;</b> and <b>-c &apos;source {}/foo.zsh&apos;</b> are equivalent.

  Setting any per-call initialization option above will disable the default values from the
  other per-call initialization options, so only your provided values will be used. I.e. these
  values are either all automatic or all manual in each zmodule call. To use default values
  and also provided values, use separate zmodule calls.
</pre>

### zimfw

The Zim Framework plugin manager:

  * Added new modules to `~/.zimrc`? Run `zimfw install`.
  * Removed modules from `~/.zimrc`? Run `zimfw uninstall`.
  * Want to update your modules to their latest revisions? Run `zimfw update`.
  * Want to upgrade zimfw to its latest version? Run `zimfw upgrade`.

<pre>Usage: <b>zimfw</b> &lt;action&gt; [option]

Actions:
  <b>build</b>               Build <b>${ZIM_HOME}/init.zsh</b> and <b>${ZIM_HOME}/login_init.zsh</b>.
                      Also does <b>compile</b>. Use <b>-v</b> to also see its output.
  <b>clean</b>               Clean all. Does both <b>clean-compiled</b> and <b>clean-dumpfile</b>.
  <b>clean-compiled</b>      Clean Zsh compiled files.
  <b>clean-dumpfile</b>      Clean completion dumpfile.
  <b>compile</b>             Compile Zsh files.
  <b>info</b>                Print zimfw and system info.
  <b>list</b>                List all modules defined in <b>${_zconfig}</b>.
                      Use <b>-v</b> to also see their initialization details.
  <b>init</b>                Same as <b>install</b>, but with output tailored for the terminal startup.
  <b>install</b>             Install new modules. Also does <b>build</b>, <b>compile</b>. Use <b>-v</b> to also see their
                      output, any on-pull output and skipped modules.
  <b>update</b>              Update current modules. Also does <b>build</b>, <b>compile</b>. Use <b>-v</b> to also see
                      their output, any on-pull output and skipped modules.
  <b>reinstall</b>           Reinstall modules that failed check. Prompts for confirmation, unless <b>-q</b>
                      is used. Also does <b>build</b>, <b>compile</b>. Use <b>-v</b> to also see their output, any
                      on-pull output and skipped modules.
  <b>uninstall</b>           Delete unused modules. Prompts for confirmation, unless <b>-q</b> is used.
  <b>check</b>               Check if updates for current modules are available. Use <b>-v</b> to also see
                      skipped and up to date modules.
  <b>check-version</b>       Check if a new version of zimfw is available.
  <b>upgrade</b>             Upgrade zimfw. Also does <b>compile</b>. Use <b>-v</b> to also see its output.
  <b>help</b>,    <b>--help</b>     Print this help.
  <b>version</b>, <b>--version</b>  Print zimfw version.

Options:
  <b>-q</b>                  Quiet (yes to prompts and only output errors)
  <b>-v</b>                  Verbose (output more details)
</pre>

[@zimfw]: https://github.com/zimfw
