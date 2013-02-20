define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<p>This is a handlebars template, honest!</p>";});

return this["templates"];

});