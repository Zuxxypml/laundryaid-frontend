import React from 'react'
import Header from '../components/Header'
import DiscountButton from '../components/DiscountButton'
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Discount from '../components/Discount';
import Services from '../components/Services';


const components = [Services, Pricing , Discount, TestimonialCarousel];



function Home() {

  return (
    <div className=''>
      <Header />
      <Services/>
      <Pricing />
      <Discount />
      <TestimonialCarousel />
    </div>
  );
}

export default Home

// An African Black man, wearing a plain shirt adorned with the "LAUNDRY AID" logo, collects a sack of
//  clothes from an African Black woman.  The woman is standing at her door, which is designed to resemble 
//  a Nigerian door, featuring traditional architectural elements and possibly vibrant colors or patterns.


  // const pinnedRef = useRef(null);
  // const scrollRef = useRef(null);
  // const scrollRef2 = useRef(null)
  // const scrollImage = useRef(null)

  //   useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: scrollRef.current,
  //       start: "top top+=160px",
  //       end: "bottom bottom",
  //       pin: pinnedRef.current,
  //       pinSpacing: false,
  //       scrub: true,
  //     });
  //   });

  //   // Show content 2
  //   ScrollTrigger.create({
  //     trigger: scrollRef2.current,
  //     start: 'top center',
  //     onEnter: () => {
  //       gsap.to(scrollImage.current, { opacity: 1, y: 0, stagger: 0.2, duration: 1 })
  //       gsap.to(scrollRef2.current, { opacity: 1, y: 0, stagger: 0.2, duration: 1 })
  //       // scrollRef.current.style.opacity = 0;
  //       // scrollRef2.current.style.opacity = 1;
  //       // content3.current.style.opacity = 0;
  //     },
  //     onLeaveBack: () => {
  //       scrollImage.current.style.opacity = 1;
  //       scrollRef2.current.style.opacity = 0;
  //     },
  //     scrub: true,
  //   });
  

  //   return () => ctx.revert(); // Clean up
  // }, []);