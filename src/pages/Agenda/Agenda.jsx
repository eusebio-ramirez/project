import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import es from "date-fns/locale/es";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../../hooks/useModal";
import { agenda, fetchAgenda } from "../../json/agenda";
import "./agenda.css";
import { setAgenda } from "../../context/AgendaSlice";

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
  const events = useSelector((state) => state.agenda.events);
  const dispatch = useDispatch();
  //const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);
  const { isModalOpen, openModal, closeModal } = useModal();

  const getAgenda = async () => {
    const response = await fetchAgenda();
    const data = await response;
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
    //setEvents(formattedEvents);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getAgenda();
  }, []);

  const handleSelectEvent = (event) => {
    openModal();
    setEventData([event.title, event.place, event.description]);
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color || "var(--defaultColor)",
      borderRadius: "5px",
      color: "white",
      border: "none",
      padding: "2px 5px",
    },
  });

  return (
    <>
      <Container className={`container1 ${grayscale ? "grayscale" : ""}`}>
        <h1 className="principalTitle">Agenda del Titular</h1>
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
      </Container>
    </>
  );
};

export default Agenda;
