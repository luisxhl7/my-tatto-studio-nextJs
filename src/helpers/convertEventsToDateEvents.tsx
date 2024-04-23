import { parseISO } from "date-fns";

interface Event {
    title: string;
    nameArtist: string;
    description: string;
    dateInit: Date;
    dateEnd: Date;
    bgColor: string;
    user: {
        _id: string;
        name: string;
    };
}

export const convertEventsToDateEvents = (events: any[] = []): any[] => {
    return events.map(event => {
        if (typeof event.dateInit === 'string' && typeof event.dateEnd === 'string') {
            event.dateInit = parseISO(event.dateInit);
            event.dateEnd = parseISO(event.dateEnd);
        }
        return event;
    });
};


