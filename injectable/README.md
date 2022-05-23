oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g injectable
$ injectable COMMAND
running command...
$ injectable (--version)
injectable/0.0.0 darwin-x64 node-v14.18.1
$ injectable --help [COMMAND]
USAGE
  $ injectable COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`injectable hello PERSON`](#injectable-hello-person)
* [`injectable hello world`](#injectable-hello-world)
* [`injectable help [COMMAND]`](#injectable-help-command)
* [`injectable plugins`](#injectable-plugins)
* [`injectable plugins:install PLUGIN...`](#injectable-pluginsinstall-plugin)
* [`injectable plugins:inspect PLUGIN...`](#injectable-pluginsinspect-plugin)
* [`injectable plugins:install PLUGIN...`](#injectable-pluginsinstall-plugin-1)
* [`injectable plugins:link PLUGIN`](#injectable-pluginslink-plugin)
* [`injectable plugins:uninstall PLUGIN...`](#injectable-pluginsuninstall-plugin)
* [`injectable plugins:uninstall PLUGIN...`](#injectable-pluginsuninstall-plugin-1)
* [`injectable plugins:uninstall PLUGIN...`](#injectable-pluginsuninstall-plugin-2)
* [`injectable plugins update`](#injectable-plugins-update)

## `injectable hello PERSON`

Say hello

```
USAGE
  $ injectable hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jzapantis/olcif-injectable/blob/v0.0.0/dist/commands/hello/index.ts)_

## `injectable hello world`

Say hello world

```
USAGE
  $ injectable hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `injectable help [COMMAND]`

Display help for injectable.

```
USAGE
  $ injectable help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for injectable.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `injectable plugins`

List installed plugins.

```
USAGE
  $ injectable plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ injectable plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `injectable plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ injectable plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ injectable plugins add

EXAMPLES
  $ injectable plugins:install myplugin 

  $ injectable plugins:install https://github.com/someuser/someplugin

  $ injectable plugins:install someuser/someplugin
```

## `injectable plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ injectable plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ injectable plugins:inspect myplugin
```

## `injectable plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ injectable plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ injectable plugins add

EXAMPLES
  $ injectable plugins:install myplugin 

  $ injectable plugins:install https://github.com/someuser/someplugin

  $ injectable plugins:install someuser/someplugin
```

## `injectable plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ injectable plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ injectable plugins:link myplugin
```

## `injectable plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ injectable plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ injectable plugins unlink
  $ injectable plugins remove
```

## `injectable plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ injectable plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ injectable plugins unlink
  $ injectable plugins remove
```

## `injectable plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ injectable plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ injectable plugins unlink
  $ injectable plugins remove
```

## `injectable plugins update`

Update installed plugins.

```
USAGE
  $ injectable plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->