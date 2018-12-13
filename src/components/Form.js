import React from 'react';

const Form = ({onSubmit}) => {
    let input;

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit({
            title: input.value
        });

        input.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
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