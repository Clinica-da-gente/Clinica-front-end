import { Calendar as CalendarDefault, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import ptBR from 'date-fns/locale/pt-BR'
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface IEvent {
    start: Date,
    end: Date,
    title: string,
}

interface ICalendar {
    myEventsList?: IEvent[],
    defaultDate?: Date,
    onSelectEvent?: (e: any) => void,
    onSelectSlot?: (e: any) => void,
    eventPropGetter?: (e: any) => any,
}

const Calendar = ({ myEventsList, defaultDate = new Date(), onSelectEvent, onSelectSlot, eventPropGetter }: ICalendar) => {
    const locales = {
        'pt-BR': ptBR,
    }
      
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })
      
    const messages = {
        allDay: 'Dia Inteiro',
        previous: '←',
        next: '→',
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        agenda: 'Agenda',
        date: 'Data',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'Não há nada marcado nesse intervalo',
        yesterday: 'Ontem'
    }

    
    return (
        <CalendarDefault
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(95vh - 80px)' }}
            messages={messages}
            culture='pt-BR'
            defaultDate={defaultDate}
            selectable={true}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            eventPropGetter={eventPropGetter}
        ></CalendarDefault>
    );
};

export default Calendar;