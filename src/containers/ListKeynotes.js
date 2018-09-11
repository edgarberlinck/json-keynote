import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeynotes } from '../actions';
class ListKeynotes extends Component {
    componentWillMount () {
        this.props.fetch();
    }
    render() { 
        console.log(this.props.list);
        return ( <div>
            List
        </div> );
    }
}
 
function mapStateToProps (state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, {
    fetch: fetchKeynotes
})(ListKeynotes);