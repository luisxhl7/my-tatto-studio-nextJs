import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { MenuCalendarProps } from "@/interface";
import './menu-calendar.scss'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const MenuCalendar = ({
  setDate,
  setView,
  setArtist,
  artist,
  view,
}: MenuCalendarProps) => {

  const handlePrev = () => {
    if (view === "month") {
      setDate(
        (prevDate: Date) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
      );
    } else if (view === "week") {
      setDate(
        (prevDate: Date) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() - 7
          )
      );
    } else if (view === "day") {
      setDate(
        (prevDate: Date) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() - 1
          )
      );
    }
  };

  const handleNext = () => {
    if (view === "month") {
      setDate(
        (prevDate: Date) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
      );
    } else if (view === "week") {
      setDate(
        (prevDate: Date) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() + 7
          )
      );
    } else if (view === "day") {
      setDate(
        (prevDate: Date) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() + 1
          )
      );
    }
  };

  const handleInitValue = () => {
    setDate(new Date());
  };

  const handleChange = (event: SelectChangeEvent) => {
    setArtist(event.target.value as string);
  };

  return (
    <div className="menu">
      <div className="menu__content-arrows">
        <button
          onClick={handlePrev}
          className="menu__content-arrows__button-arrow"
        >
          <KeyboardArrowLeft />
        </button>
        <button onClick={handleInitValue} className="menu__content-arrows__button-today">Hoy</button>
        <button
          onClick={handleNext}
          className="menu__content-arrows__button-arrow"
        >
          <KeyboardArrowRight />
        </button>
      </div>
      <div className="menu__content-date">
        <button
          onClick={() => setView("month")}
          className="menu__content-date__btn"
          >
          Mes
        </button>
        <button
          onClick={() => setView("week")}
          className="menu__content-date__btn"
        >
          Semana
        </button>
        <button
          onClick={() => setView("day")}
          className="menu__content-date__btn"
        >
          Día
        </button>
      </div>
      <div className="menu__content-selected">
        <ThemeProvider theme={darkTheme}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tatuador</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={artist}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"todos"}>Todos</MenuItem>
              <MenuItem value={"keneth"}>Keneth</MenuItem>
              <MenuItem value={"luis"}>Luis</MenuItem>
              <MenuItem value={"veronica"}>Veronica</MenuItem>
              <MenuItem value={"yeison"}>Yeison</MenuItem>
              <MenuItem value={"juan"}>Juan</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};
