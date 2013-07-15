define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<p>This is a handlebars template!</p>";
  });

return this["templates"];

});