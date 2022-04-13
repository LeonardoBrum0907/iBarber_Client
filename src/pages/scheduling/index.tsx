import Head from "next/head";
import { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { availabilitiesContext } from "../../availabilitiesContext";
import { Availability } from '../../components/Availability';
import { Logo } from "../../components/Logo";
import { Container, Main, Month } from "./schedulingElements";


export default function Scheduling() {
  const availabilities = useContext(availabilitiesContext);

  return (
    <Container>
      <Head>
        <title>iBarber | Scheduling</title>
      </Head>

      <Month>
        <IoIosArrowBack /> Fevereiro <IoIosArrowForward />
      </Month>

      <span>Reserve  seu horário</span>
      <p>Confira os horários disponíveis com Giovani Farias</p>

      <Main>

        {availabilities.map(availability => (
          <Availability key={availability.id} availability={availability}/>
        ))}

      </Main>
      
      <Logo />

      {/* <img src={Bigode} alt="Logo que é um bigode com bordas amarelas" /> */}
    </Container>
  );
}