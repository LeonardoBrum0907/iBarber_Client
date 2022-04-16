import { useState } from "react";
import { AvailabilitiesData } from "../../availabilitiesContext";
import { Container, Date } from "./availabilityElements";

interface AvailabilityProps {
  availability: AvailabilitiesData;
  selected: string;
}

export function AvailabilityDay({availability, selected}: AvailabilityProps) {  
  const [isActiveDay, setIsActiveDay] = useState(false)

  function handleColorDay() {
    setIsActiveDay((atual) => atual ? false : true)
  }

  return (
    <Container>      

      <Date id="botao" onClick={() => {handleColorDay()}}>        
        {selected === availability.id && isActiveDay?
          <div className="active">
            <p className="dayMonth">{availability.month_day}</p>
            <p className="dayWeek">SEG</p>
          </div>          

        :

          <div className="notActive">
            <p className="dayMonth">{availability.month_day}</p>
            <p className="dayWeek">SEG</p>
          </div>
        }
      </Date>

      {/* <Loader />     */}
    </Container>
  );
}