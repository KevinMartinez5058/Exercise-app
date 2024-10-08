import React from 'react';

export default function Why() {
  return (
    <section>
      <div className="content-title">
        <div className="line"></div>
        <h2>Why choose us?</h2>
        <div className="line"></div>
      </div>

      <div className="content-img">
        <img src="" alt="content-image" />
      </div>
      <div class="why-content">
        <div className="sub-content">
          <h3 className="sub-content-title">Nutritional Guidance</h3>
          <p className="sub-content-text">
            Receive personalized nutrition advice and meal plans to complement
            your fitness
          </p>
        </div>
        <div className="sub-content">
          <h3 className="sub-content-title">Progress Tracking</h3>
          <p className="sub-content-text">
            Visualize your journey with detailed metrics and achievements,
            motivating you to stay on track and celebrate your milestones.
          </p>
        </div>

        <div className="sub-content">
          <h3 className="sub-content-title">Personalized Workouts</h3>
          <p className="sub-content-text">
            Tailored exercise plans based on your goals and fitness level,
            ensuring every workout is effective and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
