import React from 'react';
import ReactDOM from 'react-dom';
import DummyComponent from './DummyComponent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DummyComponent/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

