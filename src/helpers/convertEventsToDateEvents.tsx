import { parseISO } from "date-fns";

export const convertEventsToDateEvents = (events: any[] = []): any[] => {
    return events.map(event => {
        if (typeof event.dateInit === 'string' && typeof event.dateEnd === 'string') {
            event.dateInit = parseISO(event.dateInit);
            event.dateEnd = parseISO(event.dateEnd);
        }
        return event;
    });
};
