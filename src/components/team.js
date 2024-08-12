import React from 'react';

export default function Team() {
  return (
    <section className="team">
      <div className="content-title">
        <h2>Meet our team</h2>
      </div>

      <div className="ceo">
        <div className="team-img">
          <img src="" alt="" />
        </div>
        <div className="team-text">
          <h2>Dr. Sarah Smith</h2>
          <h3>Founder & CEO</h3>
          <p>
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
            <img src="" alt="" />
          </div>
          <div className="team-text">
            <h2>John Doe</h2>
            <h3>Head of Product Development</h3>
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
            <img src="" alt="" />
          </div>
          <div className="team-text">
            <h2>Emily Brown</h2>
            <h3>Fitness Coach & Content Specialist</h3>
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
            <img src="" alt="" />
          </div>
          <div className="team-text">
            <h2>Alex johnson</h2>
            <h3>Customer support manager</h3>
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
