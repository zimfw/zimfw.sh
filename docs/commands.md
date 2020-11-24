---
title: Commands
---

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
  <b>-q</b>              Quiet, only outputs errors
  <b>-v</b>              Verbose
</pre>


### zmodule
Called within your `~/.zimrc` to define the modules to be initialized. 
The modules are initialized in the same order they are defined.

<pre>
Usage: <strong>zmodule</strong> &lt;url&gt; [<strong>-n</strong>|<strong>--name</strong> &lt;module_name&gt;] [options]

Add <strong>zmodule</strong> calls to your <strong>~/.zimrc</strong> file to define the modules to be initialized. The modules are
initialized in the same order they are defined.

  &lt;url&gt;                      Module absolute path or repository URL. The following URL formats
                             are equivalent: <strong>name</strong>, <strong>zimfw/name</strong>, <strong>https://github.com/zimfw/name.git</strong>.
  <strong>-n</strong>|<strong>--name</strong> &lt;module_name&gt;    Set a custom module name. Default: the last component in the &lt;url&gt;.

Repository options:
  <strong>-b</strong>|<strong>--branch</strong> &lt;branch_name&gt;  Use specified branch when installing and updating the module.
                             Overrides the tag option. Default: <strong>master</strong>.
  <strong>-t</strong>|<strong>--tag</strong> &lt;tag_name&gt;        Use specified tag when installing and updating the module.
                             Overrides the branch option.
  <strong>-z</strong>|<strong>--frozen</strong>                Don't install or update the module.

Initialization options:
  <strong>-f</strong>|<strong>--fpath</strong> &lt;path&gt;          Add specified path to fpath. The path is relative to the module
                             root directory. Default: <strong>functions</strong>, if the subdirectory exists.
  <strong>-a</strong>|<strong>--autoload</strong> &lt;func_name&gt;  Autoload specified function. Default: all valid names inside the
                             module's specified fpath paths.
  <strong>-s</strong>|<strong>--source</strong> &lt;file_path&gt;    Source specified file. The file path is relative to the module root
                             directory. Default: the file with largest size matching
                             <strong>{init.zsh,module_name.{zsh,plugin.zsh,zsh-theme,sh}}</strong>, if any exist.
  <strong>-c</strong>|<strong>--cmd</strong> &lt;command&gt;         Execute specified command. Occurrences of the <strong>{}</strong> placeholder in the
                             command are substituted by the module root directory path.
                             <strong>-s 'script.zsh'</strong> and <strong>-c 'source {}/script.zsh'</strong> are equivalent.
  <strong>-d</strong>|<strong>--disabled</strong>              Don't initialize or uninstall the module.
</pre>