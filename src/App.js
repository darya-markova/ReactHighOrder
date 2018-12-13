import React from 'react';

import Form from './components/Form';
import List from './components/List';

import withCrud from './wrappers/withCrud';

const App = ({data, create, update, remove}) => {
    return (
        <div>
            <h1>App</h1>
            <Form onSubmit={create}/>

            <List
                todos={data}
                onToggle={update}
                onRemove={remove}/>
        </div>
    );
};

export default withCrud(App, '/api/todos');
