var Router = require('react-router');
var Navigation = Router.Navigation;

var SplashScreen = React.createClass({
  mixins: [Navigation],
  

  render: function () {
    setTimeout(function(){ window.location.href = "/#/home" }, 3000);
    return (

    			<div className="splash_screen row">

    				<div className="col-s12 center-align logo">
    					<div className="clip-text clip-text_eleven clip-text--cover">Sale n Deal</div>
    				</div>

    			</div>

    	);
  }
});

module.exports =  SplashScreen;