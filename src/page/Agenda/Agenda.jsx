import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import AgendaEventoModal from "../../components/Modals/Agenda-evento";
import { useTheme } from "@emotion/react";
import { useAgenda } from "../../hooks/useAgenda";
import MessageBox from "../../components/Message/Message-box";
import TitlePage from "../../components/Titles/Title-page";

const Agenda2 = () => {
  const theme = useTheme();
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState([]);
  const { agenda, loading, error } = useAgenda();

  const processedAgenda = useMemo(() => {
    return agenda.map((item) => ({
      ...item,
      dateFormatted: new Date(item.date).toLocaleDateString(),
    }));
  }, [agenda]);

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
      </Box>
    );
  };

  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    weekends: true,
    events: processedAgenda,
    eventClick: handleEventClick,
    eventContent: renderEventContent,
    locale: esLocale,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek",
    },
  };

  if (loading) return <MessageBox message="Cargando Agenda..." />;
  if (error) return <MessageBox message="Error al cargar la Agenda" />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 2,
        padding: 5,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <TitlePage title="Agenda del Titular" />
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
