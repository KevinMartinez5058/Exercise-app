import React from 'react';
import './home.css';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Why from '../components/whyUs';
import Review from '../components/reviews';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Why /> {/* Work on this it looks weird in different screens */}
      <Review />
      <Footer />
    </main>
  );
}
