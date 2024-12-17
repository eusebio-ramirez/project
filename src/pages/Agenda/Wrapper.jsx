import React from "react";
import { useSnack } from "../Context/SnackProvider";
import { Agenda } from "../Agenda/Agenda";

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
];

export default function DemoWrapper() {
  const { createSnack } = useSnack();

  const onClickHandler = (day, month, year) => {
    const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`;
    createSnack(snackMessage, 'success');
  };

  return (
    <div className="relative flex h-screen max-h-screen w-full flex-col gap-4 px-4 pt-4 items-center justify-center">
      <div className="relative h-full w-4/6 overflow-auto mt-20">
        <Agenda onClick={onClickHandler} />
      </div>
    </div>
  );
}
