import { Dispatch, SetStateAction } from "react";
import { ListDayProps } from "../../pages/scheduling";
import { useAvailability } from "../../useAvailability";
import { DateItem, DateItemNumber, DateItemWeekDay } from "./availabilityElements";

interface AvailabilityProps {
  availability: ListDayProps;
  selectedDay: number;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

export function AvailabilityDay({availability, selectedDay, setSelectedDay}: AvailabilityProps) {
  const {isLoading} = useAvailability();

  return (
    
    <DateItem 
      onClick={() => availability.status && setSelectedDay(availability.number)}
      style={{
        opacity: availability.status ? 1 : 0.3,
        cursor: availability.status ? "pointer" : "no-drop",
        background: availability.number === selectedDay ? '#6C63FF' : 'rgba(255, 255, 255, 0.3)',
      }} 
    >
      <DateItemNumber
        style={{
          color: availability.number === selectedDay ? 'yellow' : 'white',
        }}
      >{availability.number}</DateItemNumber>
      <DateItemWeekDay>{availability.weekday}</DateItemWeekDay>
    </DateItem>
);
}