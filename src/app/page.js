import Home from '@/app/components/Home'
import CardSection from '@/app/components/CardSection'
import ButtonBanner from '@/app/components/ButtonBanner'
import BgBanner from '@/app/components/BgBanner'
import DestinationSection from '@/app/components/DestinationSection'
import CarouselFeed from '@/app/components/Carousel'
import  Navbar  from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'


export default function page() {
  return (
    <>
    <Navbar/>
      <Home />
   <CardSection/>
   <ButtonBanner/>
   <BgBanner/>
   <DestinationSection/>
   <CarouselFeed/>
   <Footer/>
    </>
  );
}
