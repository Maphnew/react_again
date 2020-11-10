import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
});

test('set text filter', () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'text'
    })
});

test('set text filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
});

test('sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
})

test('sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})