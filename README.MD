# BAHTML

BAHTML is a simpler way of writing bare HTML. Its a custom markup language that compiles into HTML. Plan for v1.0.0 is to support for at least most commonly used nodes such as ``` <p> <h> ``` and ``` <div> ```.

### Syntax

The syntax is simple. The idea is to writing the tag name in between '::' followed by text to go in between HTML Tags. One liners are will not be supported as of v1.0.0 so every line should be individually separated as seen below. No comments supported at this time either.

```

::p:: Hello, world! //OUTPUT -> <p>Hello, World!</p>

::h1:: Good morning! //OUTPUT -> <h1>Good morning!</h1>

::div class="dev":: //OUTPUT -> <p class="dev"></div>


```

### Features

Custom built transpiler

### Technologies Used

Typescript and Node.js
