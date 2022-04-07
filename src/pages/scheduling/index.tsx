import Head from "next/head";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Availability } from '../../components/Availability';
import { Logo } from "../../components/Logo";
import { Container, Month } from "./schedulingElements";


export default function Scheduling() {
  // const [isActive, setIsActive] = useState(false)
  const isActive = false;

  function closeButton() {
    // if(isActive) {
    //   setIsActive(false);
    // }
    console.log(isActive)
  }

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

      <div className="teste">
        <Availability isActive={isActive} handleActiveButton={closeButton}/>
        <Availability isActive={isActive} handleActiveButton={() => closeButton()}/>
        <Availability isActive={isActive} handleActiveButton={() => closeButton()}/>
        <Availability isActive={isActive} handleActiveButton={() => closeButton()}/>
      </div>



      <Logo />

      {/* <img src={Bigode} alt="Logo que é um bigode com bordas amarelas" /> */}
    </Container>
  );
}