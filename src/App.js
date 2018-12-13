import React, {Component} from 'react';

import Form from './components/Form';
import List from './components/List';

import withCrud from './wrappers/withCrud';

class App extends Component {
    render() {
        const {data, create, update, remove} = this.props;

        return (
            <div>
                <Form onSubmit={create}/>

                <List
                    todos={data}
                    onToggle={update}
                    onRemove={remove}/>
            </div>
        );
    }
};

export default withCrud(App, '/api/todos');
