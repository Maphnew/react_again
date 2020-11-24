import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={235}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount={23} expensesTotal={23512322}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})