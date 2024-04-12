import React ,{useRef} from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Footer from '../components/Footer'
import ClubCard from '../components/ClubCard'
import ContactUs from '../components/ContactUs'

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <Carousel/>
      <div className='container'>
      <h3 className='display-4 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>EVENTS</h3>
      </div>
      
      <Card/>
      <hr ref={aboutRef}></hr>
      <div className='container'>

      <h3 className='display-4 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>CLUBS</h3>
      </div>
      <ClubCard/>
      <hr ref={contactRef}></hr>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
