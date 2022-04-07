import { useState } from "react";
import { Container, Date } from "./availabilityElements";

interface AvailabilityProps {
  isActive: boolean;
  handleActiveButton: () => void;
}

export function Availability({isActive, handleActiveButton}: AvailabilityProps) {
   const [isActiveDay, setIsActiveDay] = useState(false)
   const [isActiveHour, setIsActiveHour] = useState(false)

  function handleColorDay() {
    setIsActiveDay((atual) => atual ? false : true)
    isActive = isActiveDay
    
    // console.log(isActive);
  }

  function handleColorHour() {
    setIsActiveHour((atual) => atual ? false : true)
  }

  return(

    <Container>      
      {/* <Date onClick={() => {handleColorDay()}}>
        {isActiveDay ? 
          <div className="active">
            <p className="dayMonth">21</p>
            <p className="dayWeek">SEG</p>
          </div>

        :

          <div className="notActive">
            <p className="dayMonth">21</p>
            <p className="dayWeek">SEG</p>
          </div>
        }
      </Date>

      <Hour onClick={() => {handleColorHour()}}>
        {isActiveHour ?
          <div className="active">        
            <p>09:00</p>
          </div>
        :
          <div className="notActive">        
            <p>09:00</p>
          </div>
        }
      </Hour> */}

      <Date onClick={handleColorDay}>
        <div>
          {isActiveDay ? <p>21</p> : <p>SEG</p>}
          
          
        </div>
      </Date>
    </Container>
  );
}