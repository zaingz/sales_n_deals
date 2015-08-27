"use strict";

//var injectTapEventPlugin = require('react-tap-event-plugin');
var React = require('react');

// Globaly set react so it becomes accesible every where
window.React = React;

// We can also make mui and ThemeManager global like react
//var mui = require("material-ui");
//var ThemeManager = new mui.Styles.ThemeManager();

//injectTapEventPlugin();

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;





// Main Layout of application
var App = React.createClass({
  render () {
    return (
      <div>        
        <RouteHandler/>
      </div>
    )
  }
});
/////////////////////////////

// getting pages
var SplashScreen = require('./pages/splash_screen.jsx');
var Home = require('./pages/home.jsx');

// Defining Routes for pages (Page is acutually a component)
var routes = (
  <Route handler={App}>
    <DefaultRoute name="splash_screen" handler={SplashScreen}/>
    <Route name="home" handler={Home}/>
  </Route>
);

// Rendering Main Componet "App"
Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById("app"));
});