define("plugins/jquery.retinafy",["jquery"],function(e){e.fn.retinafy=function(){var t={checkRetinaSrc:function(e,t){var n=new XMLHttpRequest;n.open("HEAD",e),n.onreadystatechange=function(){if(n.readyState!==4)return n.status>=200&&n.status<=399?t(!0):t(!1)},n.send()}};return this.each(function(){if(window.devicePixelRatio>1){var n=e(this),r=n.find("img");r.each(function(){var n=e(this),r=n.attr("src"),i=r.replace(/\.\w+$/,function(e){return"@2x"+e});t.checkRetinaSrc(i,function(e){e&&n.attr("src",i)})})}})}}),define("log",[],function(){(!window.console||!console.log||config.debug===!1)&&function(){var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,r=window.console={};while(n--)r[t[n]]=e}()}),define("fonts",[],function(){function t(e){var t=document.getElementsByTagName("html")[0];t.className=t.className.replace(/(\s|^)wf-loading(\s|$)/g," "),e&&(t.className+=" wf-inactive")}if(config.typekit!==undefined&&config.typekit!=="XXXXX"){var e=setTimeout(t(!0),3e3);requirejs(["typekit"],function(){try{Typekit.load()}catch(t){console.log("Error on Typekit.load():",t)}clearTimeout(e),console.log("Fonts loaded.")})}else t(!1)}),define("analytics",["autotrack"],function(){if(config.debug===!1&&config.analytics!==undefined&&config.analytics!=="UA-XXXXXXXX-X"){var e=e||[];e.push(["_setAccount",config.analytics]),e.push(["_trackPageview"]),e.push(["_trackPageLoadTime"])}else console.log("Google analytics not included.")}),requirejs.config({paths:{jquery:["//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min","vendor/jquery-1.9.1.min"],autotrack:"//www.google.com/js/gweb/analytics/autotrack",typekit:"//use.typekit.net/"+config.typekit}}),requirejs(["jquery","plugins/jquery.retinafy","log","fonts","analytics"],function(e){var t={init:function(){this.retinafy(),console.log("Main initiated:",this)},retinafy:function(){e("body").retinafy(),console.log("Retinafy fired.")}};e(document).ready(function(){console.log("Dom ready."),t.init()})}),define("main",function(){})