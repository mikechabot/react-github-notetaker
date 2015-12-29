import React from 'react';
import Router from 'react-router';

class SearchGitHub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    }
    handleSubmit() {
        const username = this.usernameRef.value;
        this.usernameRef.value = '';
        this.props.history.pushState(null, '/profile/' + username);   // Transition to new route
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="text" className="btn btn-primary btn-block">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGitHub.PropTypes = {
    history: React.PropTypes.object.isRequired
}
export default SearchGitHub;