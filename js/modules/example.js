define(["jquery", "templates/templates"], function ($, templates) {
    var example = {
        $el: $("#example"),
        templates: templates,
        init: function (Events) {
            this.Events = Events;
            this.bindEvents();
        },
        bindEvents: function () {
            this.Events.on("render", $.proxy(this.render, this));
        },
        render: function () {
            this.$el.html(this.templates["example"]());
        }
    };
    return example;
});