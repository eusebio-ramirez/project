import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
  "../assets/imgs/1.jpg",
  "../assets/imgs/2.jpg",
  "../assets/imgs/3.jpg",
  "../assets/imgs/2.jpg",
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 500,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "red",
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{ minWidth: "100%", height: "auto" }}
          />
        ))}
      </Box>
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? "primary.main" : "grey.400",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AutoCarousel;
