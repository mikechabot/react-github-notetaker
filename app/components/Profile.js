var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
    displayName: 'Profile',
    mixins: [ReactFireMixin],	// Mixins add functionality to 'this', adds methods to be used
    getInitialState: function() {
        return {
        	notes: [1,2,3],
        	bio: {},
        	repos: []
        };
    },
    componentDidMount: function() { // Do all AJAX calls here. Called after component mounts to view
    	this.ref = new Firebase('https://blazing-heat-6301.firebaseio.com');	// This is the root
    	this.init(this.props.params.username);
    },
    componentWillReceiveProps(nextProps) {
    	this.unbind('notes');
    	this.init(nextProps.params.username);
    },
    componentWillUnmount: function() {
    	this.unbind('notes');
    },
    init: function(username) {
    	var childRef = this.ref.child(username);				// Username endpoint in Firebase
    	this.bindAsArray(childRef, 'notes');									// This is a Listener! Set the property on state we want to bind to (this.state.notes)

    	helpers.getGithubInfo(username)
    		.then(function(data) {
    			this.setState({
    				bio: data.bio,
    				repos: data.repos
    			})
    		}.bind(this))	// Set context of 'this'
    },
    handleAddNote: function(newNote) {
    	// This just appends a note to user's firebase mikechabot/4
    	this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },
    render: function() {
        return (
            <div className="row">
            	<div className="col-md-4">
            		<UserProfile username={this.props.params.username} bio={this.state.bio} />
            	</div>
            	<div className="col-md-4">
            		<Repos username={this.props.params.username} repos={this.state.repos} />
            	</div>
            	<div className="col-md-4">
            		<Notes 
            			username={this.props.params.username} 
            			notes={this.state.notes} 
            			addNote={this.handleAddNote} />
            	</div>
            </div>
        );
    }
});

module.exports = Profile;