# Frontmend Framework

A bare bones front-end "delete friendly" boilerplate, fuelled bower and grunt.

## My Flow

Create a directory for your project and jump into it.

`mkdir yourproject && cd yourproject`

Clone the Frontmend repository to the current directory.

`git clone git@github.com:saulhardman/frontmend.git .`

Install the development dependencies; [bower](http://twitter.github.com/bower/) is a package manager and [grunt](http://gruntjs.com/) is a task-based command line tool.

`sudo npm install -g bower && sudo npm install -g grunt-cli && npm install`

Use these tools to install the necessary javascript components (libraries and plugins) you require for your project.

`bower install`

These components and node packages are listed in `component.json`, which defaults to:-

- [RequireJS](http://requirejs.org/)
- [jQuery](http://jquery.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Modernizr](http://modernizr.com/)

Running the default grunt task will start a simple connect http server whilst watching your handlebars templates and compiling when they change.

`grunt`

The build task uses the r.js optimizer to concatinate and minify your code, including the RequireJS, so that you can include just 1 script file (which defaults to `js/main.min.js`).

`grunt build`

## To-do

- Flesh out the mixins .scss file with my most used and common mixins.
- See what can be done at this stage to ease the introduction of JavaScript testing.
- create a node package using npm (like [heisenburg.js](https://github.com/Heisenbergjs/heisenberg-npm)).
- utilise the mediator pattern to trigger and receive messages across modules.