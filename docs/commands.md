---
title: Commands
---

The `zimfw` plugin manager builds an initialization script, at `${ZIM_HOME}/init.zsh`,
that initializes the modules you defined in your `~/.zimrc` file.

The `~/.zimrc` file must contain a `zmodule` call for each module you want to
use. The modules will be initialized in the order they are defined.

The `~/.zimrc` file is not sourced during Zsh startup, and it's only used to
configure the `zimfw` plugin manager.

Check [examples of `~/.zimrc` files in the installation page](../install/#create-~%2F.zimrc).

### zmodule

Below are some usage examples:

  * A module from the [@zimfw] organization: `zmodule archive`
  * A module from another GitHub organization: `zmodule StackExchange/blackbox`
  * A module with a custom URL: `zmodule https://gitlab.com/Spriithy/basher.git`
  * A module at an absolute path, that is already installed:
    `zmodule /usr/local/share/zsh-autosuggestions`
  * A module with a custom fpath: `zmodule zsh-users/zsh-completions --fpath src`
  * A module with a custom initialization file, and with git submodules disabled:
    `zmodule spaceship-prompt/spaceship-prompt --source spaceship.zsh --no-submodules` or
    `zmodule spaceship-prompt/spaceship-prompt --name spaceship --no-submodules`
  * A module with two custom initialization files:
    `zmodule sindresorhus/pure --source async.zsh --source pure.zsh`
  * A module with a custom initialization command:
    `zmodule skywind3000/z.lua --cmd 'eval "$(lua {}/z.lua --init zsh enhanced once)"'`
  * A module with an on-pull command. It can be used to create a cached initialization script:
    `zmodule skywind3000/z.lua --on-pull 'lua z.lua --init zsh enhanced once >! init.zsh'`
  * A module with a big git repository: `zmodule romkatv/powerlevel10k --use degit`

<pre>Usage: <b>zmodule</b> &lt;url&gt; [<b>-n</b>|<b>--name</b> &lt;module_name&gt;] [options]

Add <b>zmodule</b> calls to your <b>~/.zimrc</b> file to define the modules to be initialized. The modules
are initialized in the same order they are defined.

  &lt;url&gt;                      Module absolute path or repository URL. The following URL formats
                             are equivalent: <b>foo</b>, <b>zimfw/foo</b>, <b>https://github.com/zimfw/foo.git</b>.
  <b>-n</b>|<b>--name</b> &lt;module_name&gt;    Set a custom module name. Default: the last component in &lt;url&gt;.
                             Use slashes inside the name to organize the module into subdirec-
                             tories.

Repository options:
  <b>-b</b>|<b>--branch</b> &lt;branch_name&gt;  Use specified branch when installing and updating the module.
                             Overrides the tag option. Default: the repository default branch.
  <b>-t</b>|<b>--tag</b> &lt;tag_name&gt;        Use specified tag when installing and updating the module. Over-
                             rides the branch option.
  <b>-u</b>|<b>--use</b> &lt;<b>git</b>|<b>degit</b>&gt;       Install and update the module using the defined tool. Default is
                             either defined by <b>zstyle &apos;:zim:zmodule&apos; use &apos;</b>&lt;<b>git</b>|<b>degit</b>&gt;<b>&apos;</b>, or <b>git</b>
                             if none is provided.
                             <b>git</b> requires git itself. Local changes are preserved on updates.
                             <b>degit</b> requires curl or wget, and currently only works with GitHub
                             URLs. Modules install faster and take less disk space. Local
                             changes are lost on updates. Git submodules are not supported.
  <b>--no-submodules</b>            Don&apos;t install or update git submodules.
  <b>-z</b>|<b>--frozen</b>                Don&apos;t install or update the module.
  <b>--on-pull</b> &lt;command&gt;        Execute command after installing or updating the module. The com-
                             mand is executed in the module root directory.
Initialization options:
  <b>-f</b>|<b>--fpath</b> &lt;path&gt;          Add specified path to fpath. The path is relative to the module
                             root directory. Default: <b>functions</b>, if the subdirectory exists.
  <b>-a</b>|<b>--autoload</b> &lt;func_name&gt;  Autoload specified function. Default: all valid names inside the
                             <b>functions</b> subdirectory, if any.
  <b>-s</b>|<b>--source</b> &lt;file_path&gt;    Source specified file. The file path is relative to the module
                             root directory. Default: <b>init.zsh</b>, if the <b>functions</b> subdirectory
                             also exists, or the largest of the files with name matching
                             <b>{init.zsh,module_name.{zsh,plugin.zsh,zsh-theme,sh}}</b>, if any.
  <b>-c</b>|<b>--cmd</b> &lt;command&gt;         Execute specified command. Occurrences of the <b>{}</b> placeholder in
                             the command are substituted by the module root directory path.
                             I.e., <b>-s &apos;foo.zsh&apos;</b> and <b>-c &apos;source {}/foo.zsh&apos;</b> are equivalent.
  <b>-d</b>|<b>--disabled</b>              Don&apos;t initialize or uninstall the module.

  Setting any initialization option above will disable all the default values from the other
  initialization options, so only your provided values are used. I.e. these values are either
  all automatic, or all manual.
</pre>

### zimfw

The Zim plugin manager:

  * Added new modules to `~/.zimrc`? Run `zimfw install`.
  * Removed modules from `~/.zimrc`? Run `zimfw uninstall`.
  * Want to update your modules to their latest revisions? Run `zimfw update`.
  * Want to upgrade `zimfw` to its latest version? Run `zimfw upgrade`.

<pre>Usage: <b>zimfw</b> &lt;action&gt; [<b>-q</b>|<b>-v</b>]

Actions:
  <b>build</b>           Build <b>${ZIM_HOME}/init.zsh</b> and <b>${ZIM_HOME}/login_init.zsh</b>.
                  Also does <b>check-dumpfile</b> and <b>compile</b>. Use <b>-v</b> to also see their output.
  <b>check-dumpfile</b>  Does <b>clean-dumpfile</b> if new completion configuration needs to be dumped.
  <b>clean</b>           Clean all. Does both <b>clean-compiled</b> and <b>clean-dumpfile</b>.
  <b>clean-compiled</b>  Clean Zsh compiled files.
  <b>clean-dumpfile</b>  Clean completion dumpfile.
  <b>compile</b>         Compile Zsh files.
  <b>help</b>            Print this help.
  <b>info</b>            Print Zim and system info.
  <b>list</b>            List all modules currently defined in <b>~/.zimrc</b>. Use <b>-v</b> to also see the mod-
                  ules details.
  <b>init</b>            Same as <b>install</b>, but with output tailored to be used at terminal startup.
  <b>install</b>         Install new modules. Also does <b>build</b>, <b>check-dumpfile</b> and <b>compile</b>. Use <b>-v</b> to
                  also see their output, any on-pull output, and see skipped modules.
  <b>uninstall</b>       Delete unused modules. Prompts for confirmation. Use <b>-q</b> for quiet uninstall.
  <b>update</b>          Update current modules. Also does <b>build</b>, <b>check-dumpfile</b> and <b>compile</b>. Use <b>-v</b>
                  to also see their output, any on-pull output, and see skipped modules.
  <b>upgrade</b>         Upgrade zimfw. Also does <b>compile</b>. Use <b>-v</b> to also see its output.
  <b>version</b>         Print zimfw version.

Options:
  <b>-q</b>              Quiet (yes to prompts, and only outputs errors)
  <b>-v</b>              Verbose (outputs more details)
</pre>

[@zimfw]: https://github.com/zimfw
