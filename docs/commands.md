---
title: Commands
---

<!-- The fact that this formatting works is a miracle, though it's probably best not to touch it -->

### zimfw

The command line utility for Zim: 
 - Added new modules to `~/.zimrc`? Run `zimfw install`.
 - Removed modules from `~/.zimrc`? Run `zimfw uninstall`.
 - Want to update your modules to their latest revisions? Run `zimfw update`.
 - Want to upgrade `zimfw` to its latest version? Run `zimfw upgrade`.

<pre>Usage: <b>zimfw</b> &lt;action&gt; [<b>-q</b>|<b>-v</b>]

Actions:
  <b>build</b>           Build <b>init.zsh</b> and <b>login_init.zsh</b>
  <b>clean</b>           Clean all (see below)
  <b>clean-compiled</b>  Clean Zsh compiled files
  <b>clean-dumpfile</b>  Clean completion dump file
  <b>compile</b>         Compile Zsh files
  <b>help</b>            Print this help
  <b>info</b>            Print Zim and system info
  <b>install</b>         Install new modules
  <b>uninstall</b>       Delete unused modules
  <b>update</b>          Update current modules
  <b>upgrade</b>         Upgrade <b>zimfw.zsh</b>
  <b>version</b>         Print Zim version

Options:
  <b>-q</b>              Quiet (yes to prompts, and only outputs errors)
  <b>-v</b>              Verbose
</pre>


### zmodule
Called within your `~/.zimrc` to define the modules to be initialized. 
The modules are initialized in the same order they are defined.

<pre>Usage: <b>zmodule</b> &lt;url&gt; [<b>-n</b>|<b>--name</b> &lt;module_name&gt;] [options]

Add <b>zmodule</b> calls to your <b>${ZDOTDIR:-${HOME}}/.zimrc</b> file to define the modules to be initialized.
The modules are initialized in the same order they are defined.

  &lt;url&gt;                      Module absolute path or repository URL. The following URL formats
                             are equivalent: <b>name</b>, <b>zimfw/name</b>, <b>https://github.com/zimfw/name.git</b>.
  <b>-n</b>|<b>--name</b> &lt;module_name&gt;    Set a custom module name. Default: the last component in the &lt;url&gt;.

Repository options:
  <b>-b</b>|<b>--branch</b> &lt;branch_name&gt;  Use specified branch when installing and updating the module.
                             Overrides the tag option. Default: the repository&apos;s default branch.
  <b>-t</b>|<b>--tag</b> &lt;tag_name&gt;        Use specified tag when installing and updating the module.
                             Overrides the branch option.
  <b>-z</b>|<b>--frozen</b>                Don&apos;t install or update the module.

Initialization options:
  <b>-f</b>|<b>--fpath</b> &lt;path&gt;          Add specified path to fpath. The path is relative to the module
                             root directory. Default: <b>functions</b>, if the subdirectory exists.
  <b>-a</b>|<b>--autoload</b> &lt;func_name&gt;  Autoload specified function. Default: all valid names inside the
                             module&apos;s specified fpath paths.
  <b>-s</b>|<b>--source</b> &lt;file_path&gt;    Source specified file. The file path is relative to the module root
                             directory. Default: the file with largest size matching
                             <b>{init.zsh,module_name.{zsh,plugin.zsh,zsh-theme,sh}}</b>, if any exist.
  <b>-c</b>|<b>--cmd</b> &lt;command&gt;         Execute specified command. Occurrences of the <b>{}</b> placeholder in the
                             command are substituted by the module root directory path.
                             <b>-s &apos;script.zsh&apos;</b> and <b>-c &apos;source {}/script.zsh&apos;</b> are equivalent.
  <b>-d</b>|<b>--disabled</b>              Don&apos;t initialize or uninstall the module.
</pre>
