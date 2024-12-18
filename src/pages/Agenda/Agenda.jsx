import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import es from "date-fns/locale/es";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../../hooks/useModal";
import "./agenda.css";
import { setAgenda } from "../../features/Agenda/AgendaSlice";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader/Loader";
import ErrorFetch from "../../components/ErrorFetch/ErrorFetch";

const locales = {
  es: es,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) =>
    format(date, formatStr, { ...options, locale: es }),
  parse: (dateStr, formatStr, options) =>
    parse(dateStr, formatStr, new Date(), { ...options, locale: es }),
  startOfWeek: () => startOfWeek(new Date(), { locale: es }),
  getDay: (date) => getDay(date, { locale: es }),
  locales,
});

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango.",
  showMore: (total) => `+ Ver más (${total})`,
};

const Agenda = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const eventsGlobal = useSelector((state) => state.agenda.events);
  const dispatch = useDispatch();
  const { data, loading, error } = useGet('https://api-project-ap9h.onrender.com/api/agenda');
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);
  const { isModalOpen, openModal, closeModal } = useModal();

  const getAgenda = async () => {
    const formattedEvents = data.map((item) => ({
      id: item.id,
      title: item.title,
      start: moment(item.start, "YYYY-MM-DD").toDate(),
      end: moment(item.start, "YYYY-MM-DD").toDate(),
      place: item.place,
      description: item.description,
      color: item.color,
    }));
    dispatch(setAgenda(formattedEvents));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) getAgenda();
  }, [data]);

  useEffect(() => {
    const parsedEvents = eventsGlobal.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(parsedEvents);
  }, [eventsGlobal]);

  const handleSelectEvent = (event) => {
    openModal();
    setEventData([event.title, event.place, event.description]);
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: "var(--bs-blue)",
      borderRadius: "5px",
      color: "white",
      border: "none",
      padding: "2px 5px",
    },
  });

  const content = () => {
    if (loading) return <Loader />;
    if (error) return <ErrorFetch />;
    if (events.length !== 0) {
      return (
        <>
          <Modal
            show={isModalOpen}
            centered
            size="lg"
            className="agenda-modal"
            onHide={closeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>{eventData[0]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="agenda-location">
                <i className="bi bi-geo-alt-fill"></i>
                {eventData[1]}
              </p>
              <iframe
                id="url"
                src={eventData[2]}
                className="twitter-embed"
                allow="encrypted-media"
              ></iframe>
            </Modal.Body>
          </Modal>
          <div className="componentContainer">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '70vh' }}
              onSelectEvent={handleSelectEvent}
              eventPropGetter={eventStyleGetter}
              messages={messages}
            />
          </div>
        </>
      );
    }
    return null;
  }

  return (
    <>
      <Container className={`container1 ${grayscale ? "grayscale" : ""}`}>
        <h1 className="principalTitle">Agenda del Titular</h1>
        {content()}
      </Container>
    </>
  );
};

export default Agenda;
