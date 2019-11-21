export type ScheduleItem = {
    sequenceNumber: number
    time: string
    task: string
    orderNumber?: number
};

export type ScheduleProps = {
    items: ScheduleItem[]
};