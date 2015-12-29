var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    displayName: 'SearchGithub',
    mixins: [Router.History],
    getRef: function(ref) {
    	this.usernameRef = ref;
    },
    handleSubmit: function() {
    	var username = this.usernameRef.value;
    	this.usernameRef.value = '';
    	this.history.pushState(null, '/profile/' + username);	// Transition to new route
    },
    render() {
        return (
            <div className="col-sm-12">
            	<form onSubmit={this.handleSubmit}>
            		<div className="form-group col-sm-7">
            			<input type="text" className="form-control" ref={this.getRef} />
            		</div>
           			<div className="form-group col-sm-5">
            			<button type="text" className="btn btn-primary btn-block">Search Github</button>
            		</div>
            	</form>
            </div>
        );
    }
});

module.exports = SearchGithub;