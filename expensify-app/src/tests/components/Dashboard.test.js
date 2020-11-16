import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/Dashboard';

test('should render dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})