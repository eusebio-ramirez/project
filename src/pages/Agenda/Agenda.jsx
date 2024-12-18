import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useRef, useState } from "react";


import "./agenda.css";
import { agenda } from "../../json/agenda";
import { useAgendaStore } from "../../hooks";

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
    console.log(datos[0]);
    console.log(agenda);
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

  return (
    <>
      <div id="calendar">
        <div className="container">
          <div className="row">
            <div>
              <h3 className="title">Agenda del Titular</h3>
              <hr className="hr-gob" />
            </div>
            {modalStatus ? (
              <div ref={modalRef} id="modal-agenda">
                <div className="close-icon">
                  <i
                    className="fa-sharp fa-solid fa-xmark"
                    onClick={() => {
                      setModalStatus(false);
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

