import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useRef, useState } from "react";
import Title from "../../widgets/title/title";
import "./agenda.css";
import useFetch from "../../hook/useFetch";
import useModal from '../../hook/useModal';
const Agenda = () => {

  const apiUrl = "https://api-project-ap9h.onrender.com/api/agenda";

  const { data, loading, error, getRequest } = useFetch(); // Usa el hook
  const { isModalOpen, openModal, closeModal, modalRef} = useModal(); // Usa el hook
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Llamar a getRequest al cargar el componente
    const fetchData = async () => {
      try {
        const result = await getRequest(apiUrl); // URL de la API
        console.log(result);
        setEvents(result);
      } catch (error) {
        alert('ERROR AL CARGAR LA INFORMACIÓN DE LA API '+error)
      }
    };

    fetchData(); // Ejecuta la función al cargar el componente
  }, [getRequest]); // Solo se ejecuta al montar el componente

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
            <Title string = {"Agenda del Titular"}/>
            {isModalOpen ? (
              <div className="modal-overlay">

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
