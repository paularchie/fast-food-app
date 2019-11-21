import React from 'react';
import { ScheduleProps } from './ScheduleTypes';
import './Schedule.scss';

const Schedule = ({ items }: ScheduleProps): JSX.Element => {
    return (
        <div className="schedule-container" data-testid="schedule-container">
            <div className="schedule-header" data-testid="schedule-header">
                <span>Sequence Number</span>
                <span>Time</span>
                <span>Task</span>
                <span>Order Number</span>
            </div>
            <ul>
                {items.map(item => (
                    <li 
                        key={item.sequenceNumber}
                        className="schedule-item"
                        data-testid="schedule-item"
                    >
                        <span data-testid="sequence-number">{item.sequenceNumber}</span>
                        <span data-testid="time">{item.time}</span>
                        <span data-testid="task">{item.task}</span>
                        {item.orderNumber && <span data-testid="order-number">{item.orderNumber}</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Schedule;