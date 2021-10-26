# BAHTML

BAHTML is a simpler way of writing bare HTML. Its a custom markup language that compiles into HTML.

### Syntax

The syntax is simple. The idea is to writing in files with extension .baml the tag name in between '::' followed by text to go in between HTML Tags. There is also no need to write head or body tags just the lines you wish to write, rest will be generated later and can be edited in each .html file. One liners are will not be supported as of v1.0.0 so every lines should be written individually and separated by 1 line space as seen below. No comments supported at this time either.

```

::p:: Hello, world! //OUTPUT -> <p>Hello, World!</p>

::h1:: Good morning! //OUTPUT -> <h1>Good morning!</h1>

::div class="dev":: //OUTPUT -> <p class="dev"></div>


```

### Installation

Install node.js v10+ if not already installed.

```

npm install -D bahtml

yarn add -D bahtml

```

Add "type": "module" to your package.json since there is no commonJs support yet.

### Usage

There are a few ways to run the transpiler. The easiest and fastest way is to ``` cd ``` into your project folder or whatever folder ``` .baml ``` files are being kept and run the command ```npx bahtml ``` this will transpiles all .baml files found. See example for all the ways to run the transpiler below:

```

//run the following terminal command where all .baml files are stored

//npx
npx bahtml

//yarn
yarn bahtml

```

```

import { fileGenerator, transpiler } from "bahtml";

/* No support for calling them from the browser as of yet. */

fileGenerator('./test.baml'); //Takes in the path to any .baml file and Converts it into .html

transpiler();   //Looks at current directory and converts all files with a .baml extension into html    

```

### Features

Custom built transpiler

### Technologies Used

Typescript and Node.js
