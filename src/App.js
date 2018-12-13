import React, {Component} from 'react';

import { connect } from 'react-redux'

import Form from './components/Form';
import List from './components/List';

import withCrud from './wrappers/withCrud';


import { mainAction } from "./actions/mainAction";



class App extends Component {
    componentDidMount() {
        console.log('APP DID MOUNT', this.props);
    }

    render() {
        const {data, create, update, remove} = this.props;

        return (
            <div>

                <Form onSubmit={this.props.addNewItem}/>


                <hr/>

                {
                    this.props.items.map((value,index) => <div key={index}>{index}: {value}</div>)
                }

                <List
                    todos={data}
                    onToggle={update}
                    onRemove={remove}/>
            </div>
        );
    }

};

export default connect(state=>({
    items: state.items
}), dispatch=>({
    addNewItem(value) {
        dispatch(mainAction(value))
    }
}))
(withCrud(App, '/api/todos'))
