import React from 'react';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('should correctly add up', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(114195)
})

test('should correctly add up sigle expense', () => {
    const total = selectExpensesTotal([{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}])
    expect(total).toBe(195)
})