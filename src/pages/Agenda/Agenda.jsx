import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";

import { agenda } from "../../json/agenda";
import "./agenda.css";
import useModal from "../../hooks/useModal";

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);
  const {isModalOpen, openModal, closeModal, modalRef} = useModal();

  useEffect(() => {
    setEvents(agenda);
    window.scrollTo(0, 0);
  }, []);

  const handleEventClick = (eventClickInfo) => {
    openModal();
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

  return (
    <>
      <div id="calendar">
        <div className="container">
          <div className="row">
            <div>
              <h3 className="title">Agenda del Titular</h3>
              <hr className="hr-gob" />
            </div>
            {isModalOpen ? (
              <div ref={modalRef} id="modal-agenda">
                <div className="close-icon">
                  <i
                    className="fa-sharp fa-solid fa-xmark"
                    onClick={() => {
                      closeModal();
                    }}
                  />
                </div>
                <p className="agenda-title">{eventData[0]}</p>
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
              </div>
            ) : null}
            <div className="container">
              <div className="agenda">
                <FullCalendar {...calendarOptions} locale={esLocale} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;
