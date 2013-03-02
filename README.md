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

Use these tools to install the necessary JavaScript components (libraries and plugins) you require for your project.

`bower install`

These components and node packages are listed in `component.json`, which defaults to:-

- [RequireJS](http://requirejs.org/)
- [jQuery](http://jquery.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Modernizr](http://modernizr.com/)

Running the default grunt task will start a simple connect http server (running on port 9001), watch your jade, sass, js and hbs files for changes, compiling and live-reloading when a change is detected.

`grunt`

The build task uses the r.js optimizer to concatenate and minify your code, including RequireJS, so that you can include just 1 script file (which defaults to `js/main.min.js`). It also generates a [HTML5 App Cache Manifest](http://www.html5rocks.com/en/tutorials/appcache/beginner/).

`grunt build`

### Updates

**v0.0.3** [02/03/13]

- Added grunt-contrib-sass for scss compilation.
- Added grunt-manifest, after forking existing plugin and bringing up to date for grunt v0.4.0.

**v0.0.2** [20/02/13]

- Added grunt-contrib-jade for dynamic jade template compilation.
- Added an Events object to the app namespace which acts as a mediator.

**v0.0.1**

- Initial release.

### To-do

- **Commenting**.
- Flesh out the mixins .scss file with my most used and common mixins.
- See what can be done at this stage to ease the introduction of JavaScript testing.
- implement grunt-contrib-copy before running r.js to slim down the dest folder.