import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";
import AgendaEventoModal from "../../components/Modals/Agenda-evento";
import { useTheme } from "@emotion/react";

const Agenda2 = () => {
  const theme = useTheme();
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState([]);
  const modalRef = useRef(null);
  const { data, error } = useFetch(
    "https://api-project-ap9h.onrender.com/api/agenda"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      const events = [
        ...data,
        {
          id: 1000,
          title: "Evento de navidad",
          place: "Lugar de prueba",
          description: "Descripción de prueba",
          start: "2024-12-01",
          color: "var(--wine)",
        },
      ];

      setEvents(events);
    }
    if (error) {
      toast.error("Error al cargar la agenda");
      console.error(error);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const handleEventClick = (eventClickInfo) => {
    setShowModal(true);
    const { title, extendedProps } = eventClickInfo.event;
    setEventData([title, extendedProps.place, extendedProps.description]);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <Box
        sx={{
          backgroundColor:
            eventInfo.event.extendedProps.color || "primary.main",
          color: "#fff",
          borderRadius: 1,
          padding: "2px 4px",
          fontSize: "0.9rem",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <strong>{eventInfo.timeText}</strong>
        <span>{eventInfo.event.title}</span>
      </Box>
    );
  };

  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    weekends: true,
    events: events,
    eventClick: handleEventClick,
    eventContent: renderEventContent,
    locale: esLocale,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 2,
        padding: 2,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          Agenda del Titular
        </Typography>
      </Box>

      {showModal && (
        <AgendaEventoModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          eventData={eventData}
          modalRef={modalRef}
        />
      )}

      <FullCalendar {...calendarOptions} />
    </Box>
  );
};

export default Agenda2;
