import { useState } from "react";
import { AvailabilitiesData } from "../../availabilitiesContext";
import { Container, Date, Hour } from "./availabilityElements";

interface AvailabilityProps {
  availability: AvailabilitiesData;
}


// interface AvailabilitiesData {
//   availability: Availability;
// }

export function Availability({availability}: AvailabilityProps) {
  // const { isLoading, data, error } = useQuery('availability', async () => {
  //   const response = await fetch('http://localhost:3000/api/availability')
  //   const data = await response.json()

  //   const availabilities = data.availabilities.map((availabilities: AvailabilitiesData) => {
  //     return {
  //       id: availabilities.id,
  //       hour: availabilities.hour_available,
  //     }
  //   })

  //   return availabilities;
  // })
  
  const [isActiveDay, setIsActiveDay] = useState(false)
  const [isActiveHour, setIsActiveHour] = useState(false)

  function handleColorDay() {
    setIsActiveDay((atual) => atual ? false : true)
  }

  function handleColorHour() {
    setIsActiveHour((atual) => atual ? false : true)
  }

  return(

    <Container>      

      <Date onClick={() => {handleColorDay()}}>
        {isActiveDay ? 
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

      <Hour onClick={() => {handleColorHour()}}>
        {isActiveHour ?
          <div className="active">
            <p>{availability.hour}</p>
          </div>
        : 
          <div className="notActive">
            <p>{availability.hour}</p>
          </div>
        }
      </Hour>

      {/* <Loader />     */}

      {/* <div className="loader">Loading...</div> */}

      

      {/* <Date onClick={handleActiveButton}>
        <div>
          {isActiveDay ? <p>21</p> : <p>SEG</p>}
          
          
        </div>
      </Date> */}
    </Container>
  );
}