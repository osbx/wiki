# osbx Installation

The osbx core generator is a npm package that can be found on
[npmJS](https://www.npmjs.com/package/osbx) but the installation process is
made easier using the osbx-cli npm package, which is a basic command line
interface to help you creating your projects and manage them.

## Requirements

You're gonna need few dependencies to run an osbx project properly:

### Basic dependencies

- [NodeJS and NPM](https://nodejs.org/en/) (both comes together)
- [Git](https://git-scm.com/)
- A text editor such as VSCode (recommended), Vim, Emacs, SublimeText ...

### NPM dependencies

Once you have installed node and npm, you will have to run the next command to
run the project properly:

```
$ npm i -g osbx-cli nodemon ts-node
```

osbx-cli is the CLI that I talked about.

Nodemon is a npm package to run local server that watch for your file
modifications.

ts-node is the TypeScript-to-JavaScript compiler for nodeJS, this is required
to execute your project into node.

## Installing with osbx-cli

Once every dependency is correctly installed, you can try to run the following
command

```
$ osbx create-project
```

This will ask you some information to complete to generate your new osbx
project! Answer the questions, also choose generate base component if you're
not familiar with osbx yet. Your command prompt should look like this after
filling up all the information:

<center><img src="https://i.imgur.com/lVKC8s7.png" /></center>

The last question will ask you to choose the beatmap folder, copy the direct
link to your beatmap folder where you want to generate your storyboard.

After his work done, you should be able to see your new osbx project folder
created, congratulations!

You can now, open the folder with ``cd [project-name]`` and run the command
``npm run storyboard``. If everything is fine, you should see a message like:

```
### STARTING NEW BUILD ###
🟢 [Main]: Component successfully built!

Storyboard successfully generated! [11ms] 🎍
```
If it's the case, you're now ready to create your first storyboard using
`osbx`!

## Manual installation (not recommended)

If you want to create an osbx project with your own project structure, it's
possible by just installing the osbx package in a new created folder. You can
create your own plugin & component class containing the following structure:

```ts
// PLUGIN FILE
import Plugin from "osbx/lib/core/plugin";

class osbx_core extends Plugin {
    plugin_function() {
        // ...
    }
}

export default new osbx_core;
export { osbx_core }
```

```ts
// COMPONENT FILE
import Component from "osbx/lib/core/component";

export default class Main extends Component {
    public Generate() {
        // ...
    }
}
```

You will see later what plugins and components are, for now, just copy the
content of these files.

With these both files, you can add a main.ts file which will use the function
Generator::MakeStoryboard() and load a component array in the parameters.

```ts
// main.ts file
import package_file = require("./package.json");
import Generator from "osbx/lib/core/generator";
import Globals from "osbx/lib/core/globals";

// Import your components and plugins here
import component from "./components/component";
import plugin from "./plugins/plugin"

let start_time = new Date();

let globals = Globals.getInstance();
globals.config = package_file.config;
globals.start_time = start_time;

const COMPONENTS = [
    new component([plugin])
];

Generator.MakeStoryboard(COMPONENTS, package_file.config.beatmap_path, start_time);
```

You're now ready to get started!
