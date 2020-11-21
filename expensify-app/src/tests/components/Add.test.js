import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {AddExpensePage} from '../../components/Add';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('should render AddExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})