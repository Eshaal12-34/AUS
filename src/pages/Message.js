import React from 'react';
import Banner from "../components/Banner";
import "../assets/main.css"


const Message = () => {
  return (
    <>
      <Banner
    title = "Messages"
    />
    <div className="container">
     <h2 className='section-title mt-5' data-aos="fade-up" data-aos-delay="300">Principal's Message</h2>
     <div className='Left-section'>
        <div className='left-image' data-aos="fade-up" data-aos-delay="300">
          <img src="assets/img/principa.jpg" alt="Vision" />
        </div>
        <div className='left-content'>
    
       <p data-aos="fade-up" data-aos-delay="300" style={{textAlign:"justify"}}> Learning is not just about acquiring 
        knowledge; it must bring about a positive transformation in one’s character and outlook on 
        life. True education refines our thoughts, strengthens our values, and inspires us to act with 
        integrity. Those who aspire to reach the pinnacle of success must nurture qualities of positivity, 
        hard work, and discipline from the very beginning, for these are the foundations upon which great
        achievements are built. The younger generation carries the responsibility of shaping a better 
        tomorrow a world where peace, compassion, and happiness are not exceptions but the norm. By 
        dedicating themselves to continuous learning, ethical conduct, and service to humanity, today’s 
        youth can become the torchbearers of hope and progress, guiding society toward a brighter and 
        more harmonious future. In this journey, every step towards knowledge is also a step towards 
        wisdom.Let us strive to use that wisdom to create a legacy that will inspire generations to come
        </p>
        </div>
     </div>
</div>
      
    </>
  );
}

export default Message;