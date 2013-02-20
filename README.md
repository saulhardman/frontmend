# Frontmend

A bare bones front-end "delete friendly" boilerplate, fuelled by [bower](http://twitter.github.com/bower/) and [grunt](http://gruntjs.com/).

## Requirements

To use Frontmend you need [node.js](http://nodejs.org/), follow the instructions on the site to get setup on your chosen operating system.

## Getting Started

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

### Updates

20/02/13 – Added grunt-contrib-jade for dynamic jade template compilation

20/02/13 – Added an Events object to the app namespace which acts as a mediator

### To-do

- **Commenting**.
- Flesh out the mixins .scss file with my most used and common mixins.
- See what can be done at this stage to ease the introduction of JavaScript testing.
- create a node package using npm (like [heisenburg.js](https://github.com/Heisenbergjs/heisenberg-npm)).