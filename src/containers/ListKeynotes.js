import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchKeynotes } from '../actions';
class ListKeynotes extends Component {
    componentWillMount () {
        this.props.fetch();
    }
    render() { 
        return ( <div>
            { this.props.list.map(keynote => <Item key={keynote._id} item={keynote} onEdit={ (_id) => alert(_id ) } onPlay={ (_id) => alert(_id ) } />) }
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

const Item = ({ item, onPlay, onEdit }) => (
    <div>
        <div>
            {item.title}
        </div>
        <small>{item.subtitle}</small>
        <div>
            <button onClick={() => onEdit(item._id)}>Edit</button>
            <button onClick={() => onPlay(item._id)}>Play</button>
        </div>
    </div>
)