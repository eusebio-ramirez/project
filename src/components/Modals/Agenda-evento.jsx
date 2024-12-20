import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AgendaEventoModal = ({ handleClose, eventData, modalRef }) => {
  return (
    <Box
      id="modal-agenda"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <Box
        ref={modalRef}
        sx={{
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 3,
          boxShadow: 6,
          width: "90%",
          maxWidth: "600px",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          {eventData[0]}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lugar: {eventData[1]}
        </Typography>
        <Typography variant="body1">Descripción: {eventData[2]}</Typography>
      </Box>
    </Box>
  );
};

export default AgendaEventoModal;
