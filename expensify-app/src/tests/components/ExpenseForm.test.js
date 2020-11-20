import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[2]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})