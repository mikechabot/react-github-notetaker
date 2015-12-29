var React = require('react');

var AddNote = React.createClass({
    displayName: 'AddNote',
    propTypes: {
        addNote: React.PropTypes.func.isRequired
    },
    // Get value from input field
    setRef: function(ref) {
    	this.note = ref;
    },
    handleSubmit: function() {
    	var newNote = this.note.value;
    	this.note.value = ''; //clear input field;
    	this.props.addNote(newNote);
    },
    render() {
        return (
            <div className="input-group">
            	<input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
            	<span className="input-group-btn">
            		<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
            	</span>
            </div>
        );
    }
});

module.exports = AddNote;