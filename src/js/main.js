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


// Header Component
var Header = require('./react_components/header.jsx');


// Main Layout of application
var App = React.createClass({
  render () {
    return (
      <div>        
        <Header title="Sale N Deals" />
        <hr />
        <ul>
          <li>
            <Link to="home" >Test Home</Link>
          </li>
          <li>
            <Link to="about" >About</Link>
          </li>
        </ul>
        <hr />
        <RouteHandler/>
      </div>
    )
  }
});
/////////////////////////////

// getting pages
var Home = require('./pages/home.jsx');
var About = require('./pages/about.jsx');

// Defining Routes for pages (Page is acutually a component)
var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="about" path="about" handler={About}/>
  </Route>
);

// Rendering Main Componet "App"
Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById("app"));
});