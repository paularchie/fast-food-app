import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OrdersPage from './OrdersPage';

test('should render the component', () => {
    const { getByTestId } = render(<OrdersPage />);
    expect(getByTestId('orders-page-container')).toBeDefined();
});

test('Place order button should have the correct text', () => {
    const { getByTestId } = render(<OrdersPage />);
    const button = getByTestId('place-order-button');
    expect(button.textContent).toBe('Place Order');
});

test('Placing an order should update the schedule', () => {
    const { getByTestId,queryByTestId ,queryAllByTestId } = render(<OrdersPage />);
    const button = getByTestId('place-order-button');

    expect(queryByTestId('schedule-item')).toBeNull();
    
    fireEvent.click(button);
    expect(queryAllByTestId('schedule-item').length).toBe(3);

    fireEvent.click(button);
    expect(queryAllByTestId('schedule-item').length).toBe(5);

    fireEvent.click(button);
    expect(queryAllByTestId('schedule-item').length).toBe(7);
});