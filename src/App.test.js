import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<app/>);

  const expected = 1;
  const actual = wrapper.length;

  expect(actual).toEqual(expected);
});
