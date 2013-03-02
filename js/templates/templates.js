define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["example"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<p>This is a handlebars template!</p>";
  });

return this["templates"];

});