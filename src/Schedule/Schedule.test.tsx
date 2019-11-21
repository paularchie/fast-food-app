import React from 'react';
import { render } from '@testing-library/react';
import Schedule from './Schedule';
import { ScheduleItem } from './ScheduleTypes';

const scheduleItemsMock: ScheduleItem[] = [
    {
        sequenceNumber: 1,
        time: '0:00',
        task: 'Make Sandwich',
        orderNumber: 1,
    },
    {
        sequenceNumber: 2,
        time: '1:00',
        task: 'Serve Sandwich',
        orderNumber: 1,
    },
]

test('should render the component', () => {
    const { getByTestId } = render(<Schedule items={scheduleItemsMock} />);
    expect(getByTestId('schedule-container')).toBeDefined();
});

test('should have the correct headings', () => {
    const { getByTestId } = render(<Schedule items={scheduleItemsMock} />);
    const header = getByTestId('schedule-header');

    expect(header.children[0].textContent).toBe('Sequence Number');
    expect(header.children[1].textContent).toBe('Time');
    expect(header.children[2].textContent).toBe('Task');
    expect(header.children[3].textContent).toBe('Order Number');
});

test('should render a correct number of schedule items', () => {
    const { getAllByTestId } = render(<Schedule items={scheduleItemsMock} />);
    const scheduleItems = getAllByTestId('schedule-item');
    expect(scheduleItems.length).toBe(2);
});

test('should correctly populate the schedule items', () => {
    const { getAllByTestId } = render(<Schedule items={scheduleItemsMock} />);

    const sequenceNumbers = getAllByTestId('sequence-number');
    expect(sequenceNumbers[0].textContent).toBe('1');
    expect(sequenceNumbers[1].textContent).toBe('2');

    const times = getAllByTestId('time');
    expect(times[0].textContent).toBe('0:00');
    expect(times[1].textContent).toBe('1:00');

    const tasks = getAllByTestId('task');
    expect(tasks[0].textContent).toBe('Make Sandwich');
    expect(tasks[1].textContent).toBe('Serve Sandwich');

    const orderNumbers = getAllByTestId('order-number');
    expect(orderNumbers[0].textContent).toBe('1');
    expect(orderNumbers[1].textContent).toBe('1');
});
