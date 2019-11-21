import React, { useState, useEffect } from 'react';
import './OrdersPage.scss';
import Schedule from '../Schedule/Schedule';
import { ScheduleItem } from '../Schedule/ScheduleTypes';

enum Tasks {
    MakeSandwich = 'Make Sandwich',
    ServeSandwich = 'Serve Sandwich'
}

const TaskDurationMap = {
    [Tasks.MakeSandwich]: 60,
    [Tasks.ServeSandwich]: 30
}


const OrdersPage = () => {

    const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
    const [numberOfOrders, setNumberOfOrders] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [sequenceNumber, setSequenceNumber] = useState<number>(1);


    useEffect(() => {
        // ignore on initial component render
        if (!numberOfOrders) {
            return;
        }

        const { items, sequenceNo, time } = updateSchedule();

        // update the state for another order iteration
        setScheduleItems(items);
        setSequenceNumber(sequenceNo);
        setCurrentTime(time);

    }, [numberOfOrders]);

    const updateSchedule = () => {
        let time = currentTime;
        // copy the schedule items with the last item being removed
        const items = scheduleItems.slice(0, scheduleItems.length - 1);
        // decrement the sequence number as the last item has been removed 
        let sequenceNo = sequenceNumber - 1;
        const tasks = Object.values(Tasks);

        tasks.forEach(task => {
            items.push(
                {
                    sequenceNumber: ++sequenceNo,
                    task,
                    time: formatTime(time),
                    orderNumber: numberOfOrders,
                }
            );

            time = time + getTaskDuration(task);
        })

        items.push(
            {
                sequenceNumber: ++sequenceNo,
                task: 'Take a break!!!!',
                time: formatTime(time),
            }
        );

        return { items, sequenceNo, time }
    }

    const formatTime = (timeInSeconds: number): string => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        const seconds = remainingSeconds === 0 ? '00' : remainingSeconds;
        return minutes + ':' + seconds;
    }

    const getTaskDuration = (task: Tasks): number => {
        return TaskDurationMap[task];
    }


    return (
        <div className="container" data-testid="orders-page-container">
            <button
                data-testid="place-order-button"
                onClick={() => setNumberOfOrders(numberOfOrders + 1)}
            >
                Place Order
            </button>
            <Schedule items={scheduleItems} />
        </div>
    );
};

export default OrdersPage;