import { useState } from "react";
import { AvailabilitiesData } from "../../availabilitiesContext";
import { Hour } from "./availabilityHourElements";

interface AvailabilityProps {
  availability: AvailabilitiesData;
  selected: string;
}

export function AvailabilityHour({availability, selected}: AvailabilityProps) {
  const [isActiveHour, setIsActiveHour] = useState(false)

  function handleColorHour() {
    setIsActiveHour((atual) => atual ? false : true)
  }

  return(
    <Hour onClick={() => {handleColorHour()}}>
      {selected === availability.id && isActiveHour ?
        <div className="active">
          <p>{availability.hour}</p>
        </div>
      : 
        <div className="notActive">
          <p>{availability.hour}</p>
        </div>
      }
    </Hour>
  );
}