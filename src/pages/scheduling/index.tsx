import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { availabilitiesContext } from "../../availabilitiesContext";
import { AvailabilityDay } from "../../components/AvailabilityDay";
import { Logo } from "../../components/Logo";
import { Container, Content, DateNextArea, DatePrevArea, DateTitleArea, DayButton, Main, Month } from "./schedulingElements";

interface schedulingProps {
  closeButton?: () => void;
  isDesactive?: boolean;
}


export default function Scheduling({closeButton, isDesactive}: schedulingProps) {
  const [selectedDayButton, setSelectedDayButton] = useState('');
  const [selectedHourButton, setSelectedHourButton] = useState('');

  const availabilities = useContext(availabilitiesContext);
  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState();
  const [listDays, setListDays] = useState([])
  const [listHours, setListHours] = useState([])

  useEffect(() =>{
    let today = new Date();

    setSelectedMonth(today.getMonth())
  },[])
  const handleLeftDateClick = () => {
    let mountDate = new Date(0, selectedMonth, 1);
    mountDate.setMonth( mountDate.getMonth() - 1)
    setSelectedMonth( mountDate.getMonth())
  }
  const handleRightDateClick = () => {
    let mountDate = new Date(0, selectedMonth, 1);
    mountDate.setMonth( mountDate.getMonth() + 1)
    setSelectedMonth( mountDate.getMonth())
  }
  

  return (
    <Container>
      <Content>
        <Head>
          <title>iBarber | Scheduling</title>
        </Head>

        <Month>
          <DatePrevArea onClick={handleLeftDateClick}>
            <IoIosArrowBack />
          </DatePrevArea>
          
          <DateTitleArea>
            {month[selectedMonth]}
          </DateTitleArea>

          <DateNextArea onClick={handleRightDateClick}>
            <IoIosArrowForward />
          </DateNextArea>
            
        </Month>

        <span>Reserve  seu horário</span>
        <p>Confira os horários disponíveis com Giovani Farias</p>

        <Main>

          {availabilities.map(availability => (
            <DayButton key={availability.id} onClick={() => {setSelectedDayButton(availability.id)}}>
              <AvailabilityDay key={availability.id} selected={selectedDayButton} availability={availability}/>
            </DayButton>
          ))}

          {/* {availabilities.map(availability => (
            <HourButton key={availability.id} onClick={() => {setSelectedHourButton(availability.id)}}>
              <AvailabilityHour key={availability.id} selected={selectedHourButton} availability={availability}/>
            </HourButton>
          ))} */}

        </Main>
        
        <Logo />

        {/* <img src={Bigode} alt="Logo que é um bigode com bordas amarelas" /> */}
      </Content>
    </Container>
  );
}