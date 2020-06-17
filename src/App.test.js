import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/Main/Home/Container/Home';

it('renders without crashing', () => {
  shallow(<Home />);
});