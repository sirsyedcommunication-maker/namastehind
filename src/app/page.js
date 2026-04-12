import HeroCarousel from '@/components/HeroCarousel';
import TripCard from '@/components/TripCard';
import Destinations from '@/pages/Destinations';
import Page2 from '@/pages/Page2';
import "../app/globals.css"
import BookingForm from '@/components/BookingForm';
import ManaliDestination from '@/pages/ManaliDestination';
import Testimonials from '@/pages/Testimonials';
import tripsData from "@/data/tripsData";

export default function Home() {
  return (
    <>
      <BookingForm />
    <div className=''>
      <HeroCarousel />
      <Page2 />
      <TripCard />
      <Destinations />
      <ManaliDestination />
      <Testimonials />
    </div>
    </>
  );
}