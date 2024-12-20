import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useRef, useState } from "react";

import "./agenda.css";
import { useAgendaStore } from "../../hooks";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const Agenda = () => {
  const { datos } = useAgendaStore();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalStatus(false);
    }
  };

  const [events, setEvents] = useState(datos[0]);
  const [modalStatus, setModalStatus] = useState(false);
  const [eventData, setEventData] = useState([]);

  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEventClick = (eventClickInfo) => {
    setModalStatus(true);
    const eventTitle = eventClickInfo.event.title;
    const eventPlace = eventClickInfo.event.extendedProps.place;
    const eventDescription = eventClickInfo.event.extendedProps.description;
    setEventData([eventTitle, eventPlace, eventDescription]);
  };

  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    weekends: true,
    events: events,
    eventClick: handleEventClick,
  };

  const renderBody = () => {
    return (
      <>
        <p className="agenda-location">
           <i className="fa-solid fa-location-dot"></i>
           {eventData[1]}
          
        </p>
        <iframe
          id="url"
          src={eventData[2]}
          className="twitter-embed"
          allow="encrypted-media"
        ></iframe>
      </>
    );
  };

  return (
    <>
      <div id="calendar">
        <Container>
          <Row>
            <div>
              <h3 className="title">Agenda del Titular</h3>
              <hr className="hr-gob" />
            </div>
            {modalStatus ? (
              <ModalComponent
                title={eventData[0]}
                onCloseModal={() => setModalStatus(false)}
                renderBody={renderBody()}
              />
            ) : 
            null}
            <Container>
              <div className="agenda">
                <FullCalendar {...calendarOptions} locale={esLocale} />
              </div>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
};