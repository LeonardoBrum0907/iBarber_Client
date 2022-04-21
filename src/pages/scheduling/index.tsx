import Head from "next/head";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AvailabilityDay } from "../../components/AvailabilityDay";
import { Loader } from "../../components/Loader";
import { useAvailability } from "../../useAvailability";
import { Container, Content, DateList, DateNextArea, DatePrevArea, DateTitleArea, Main, Month, TimeItem, TimeItemText, TimeList } from "./schedulingElements";

interface schedulingProps {
  closeButton?: () => void;
  isDesactive?: boolean;
}

export interface ListDayProps {
  status: boolean;
  weekday: string;
  number: number;
}

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
const days = [
  'DOM',
  'SEG',
  'TER',
  'QUA',
  'QUI',
  'SEX',
  'SAB',
]

export default function Scheduling({closeButton, isDesactive}: schedulingProps) {
  const {data, isLoading} = useAvailability()
  
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);
  const [listDays, setListDays] = useState<ListDayProps[]>([]);
  const [listHours, setListHours] = useState<string[]>([]);
  
  useEffect(() =>{
    let today = new Date();
    setSelectedYear(today.getFullYear())
    setSelectedMonth(today.getMonth())
    setSelectedDay(today.getDate())
  },[])
  
  useEffect(() => {
    if(data) {
      let dayInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();//colocamos mes + 1 para sabermos quantos dias tem no mes, como colocamos o dia 0 e dia 0 não existe, ele retorna pro ultimo dia do mes
      let newListDays = [];

      for(let i = 1; i <= dayInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = d.getDate();

        const formattedMonth = month.padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');

        let selDate = `${formattedDay}/${formattedMonth}/${year}`;

        let availability = data.filter(e => e.month_day === selDate)

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[ d.getDay() ],
          number: i,

        })   
      }

      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [data, selectedMonth, selectedYear])

  useEffect(() => {
    if(data && selectedDay > 0) {
        let d = new Date(selectedYear, selectedMonth, selectedDay)

        let year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = d.getDate();

        const formattedMonth = month.padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');

        let selDate = `${formattedDay}/${formattedMonth}/${year}`;

        let availability = data.filter(e => e.month_day === selDate)

        if(availability.length > 0) {
          setListHours(availability[0].hour)
        }
    }
  },[data, selectedDay])

  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth( mountDate.getMonth() - 1)
    setSelectedYear( mountDate.getFullYear())
    setSelectedMonth( mountDate.getMonth())
    setSelectedDay(0)
  }
  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth( mountDate.getMonth() + 1)
    setSelectedYear( mountDate.getFullYear())
    setSelectedMonth( mountDate.getMonth())
    setSelectedDay(0);
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
            {month[selectedMonth]} {selectedYear}
          </DateTitleArea>

          <DateNextArea onClick={handleRightDateClick}>
            <IoIosArrowForward />
          </DateNextArea>
            
        </Month>

        <span>Reserve  seu horário</span>
        <p>Confira os horários disponíveis com Giovani Farias</p>


          {isLoading ? 
            <Loader /> 
          : 
            <Main>
              <DateList>
                {listDays.map((item, key) => (
                  <AvailabilityDay key={key} availability={item} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                ))}
              </DateList>

              {listHours.length > 0 &&
                <TimeList>
                  {listHours.map((item,key) => (
                    <TimeItem   key={key}>
                      <TimeItemText>{item}</TimeItemText>
                    </TimeItem>
                  ))}
                </TimeList>
              }
            </Main>
          }        
        
        <img src="/images/Logo.png" alt="bigode amarelo" />


        {/* <img src={Bigode} alt="Logo que é um bigode com bordas amarelas" /> */}
      </Content>
    </Container>
  );
}