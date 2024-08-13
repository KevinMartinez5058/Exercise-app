import React from 'react';

export default function Team() {
  return (
    <section className="team">
      <div className="content-title">
        <div className="line"></div>
        <h2>Meet our team</h2>
        <div className="line"></div>
      </div>

      <div className="ceo">
        <div className="team-img">
          <img src="" alt="team image" />
        </div>
        <div className="team-text">
          <h3>Dr. Sarah Smith</h3>
          <h4>Founder & CEO</h4>
          <p >
            Dr. Sarah Smith is a fitness enthusiast and AI expert with a passion
            for leveraging technology to enhance personal wellness. With a
            background in computer science and sports science, Sarah founded
            FitProAI to bridge the gap between cutting-edge AI advancements and
            personalized fitness coaching.
          </p>
        </div>
      </div>

      <div className="team-content">
        <div className="team-member ">
          <div className="team-img">
            <img src="" alt="team image" />
          </div>
          <div className="team-text">
            <h3>John Doe</h3>
            <h4>Head of Product Development</h4>
            <p>
              John Doe brings over a decade of experience in software
              engineering and product development to the FitPro team. He is
              dedicated to creating intuitive and effective solutions that
              empower users to achieve their fitness goals through seamless
              integration of technology and fitness expertise.
            </p>
          </div>
        </div>

        <div className="team-member ">
          <div className="team-img">
            <img src="" alt="team image" />
          </div>
          <div className="team-text">
            <h3>Emily Brown</h3>
            <h4>Fitness Coach & Content Specialist</h4>
            <p>
              Emily Brown is a dedicated fitness coach who helps individuals
              achieve their health and wellness goals through personalized
              training programs. With a passion for empowering others to lead
              active, healthy lifestyles, she combines her expertise in fitness
              with a supportive and motivational approach, guiding her clients
              on their journey to improved strength, endurance, and overall
              well-being.
            </p>
          </div>
        </div>

        <div className="team-member ">
          <div className="team-img">
            <img src="" alt="team image" />
          </div>
          <div className="team-text">
            <h3>Alex johnson</h3>
            <h4>Customer support manager</h4>
            <p>
              Alex Johnson is committed to providing exceptional customer
              service and support to the FitPro community. With a background in
              customer relations and a love for fitness, Alex ensures that every
              user's experience with our platform is positive, supportive, and
              inspiring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
