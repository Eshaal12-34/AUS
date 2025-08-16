import React from 'react';
import Banner from "../components/Banner";
import "../assets/main.css"


const VisionMission = () => {
  return (
    <>
      <Banner
    title = "Vision & Mission"
    />
    <div className="container">
     <h2 className='section-title mt-5' data-aos="fade-up" data-aos-delay="300">Our Vision</h2>
     <div className='Left-section'>
        <div className='left-image' data-aos="fade-up" data-aos-delay="300">
          <img src="assets/img/team/01.jpg" alt="Vision" />
        </div>
        <div className='left-content'>
    
       <p data-aos="fade-up" data-aos-delay="300" style={{textAlign:"justify"}}> At Abasyn University School, our vision is to create a 
        nurturing, inclusive, and stimulating environment where every student is encouraged and inspired to
         achieve their fullest potential. We are committed to providing a holistic education that goes beyond
          academic excellence, integrating moral values, creativity, critical thinking, and emotional 
          intelligence into every aspect of learning.  Our goal is to equip students with the skills, mindset, and confidence to navigate and contribute positively to an ever-changing, interconnected world. We emphasize the importance of integrity, resilience, empathy, and collaboration, ensuring that our students can tackle global challenges with ethical judgment and determination.
         At Abasyn University School, we believe education is more than acquiring knowledge; it is about shaping well-rounded individuals who can think critically, act responsibly, and embrace diversity. We are dedicated to nurturing not only the intellectual growth of our students but also their emotional, social, and moral development, preparing them to become leaders, innovators, and change-makers who will leave a meaningful impact on society and the world.
        </p>
        </div>
     </div>
    {/* Mission Section */}
      <h2 className='section-title mt-5' data-aos="fade-up" data-aos-delay="300">Our Mission</h2>
        <div className="Right-section">
          <div className="right-content">
           
            <p data-aos="fade-up" data-aos-delay="300" style={{ textAlign: "justify" }}>
              At Abasyn University School, our mission is to provide a nurturing, inclusive, and stimulating 
              environment where every student is encouraged and inspired to achieve their fullest potential. 
              We are committed to delivering a holistic education that integrates academic excellence with 
              moral values, creativity, critical thinking, and emotional intelligence. We aim to equip 
              students with the skills, mindset, and confidence to navigate and contribute positively to an
               ever-changing, interconnected world. Through emphasizing integrity, resilience, empathy, and 
               collaboration, we ensure our students tackle global challenges with ethical judgment and 
               determination. Our mission is to shape well-rounded individuals who think critically, act 
               responsibly, and embrace diversity, nurturing not only their intellectual growth but also their 
               emotional, social, and moral development. We strive to develop leaders, innovators, and 
               change-makers who will make a meaningful impact on society and the world.</p>
          </div>
          <div className="left-image" data-aos="fade-up" data-aos-delay="300">
            <img src="assets/img/team/01.jpg" alt="Vision" />
          </div>
        </div>
      </div>
 
      
    </>
  );
}

export default VisionMission;