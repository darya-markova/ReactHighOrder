import React from 'react';

const Form = ({onSubmit}) => {
    let input;

    const handleSubmit = event => {
        event.preventDefault();

        /*onSubmit({
            value: input.value
        });*/
        onSubmit(input.value);

        input.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form Component</h2>
            <div>
                <input ref={element => input = element} />
                <span>
                    <button type="submit">Добавить</button>
                </span>
            </div>
        </form>
    );
};

export default Form;