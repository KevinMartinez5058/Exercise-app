import React from 'react';
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
      <Why />
      <Review />
      <Footer />
    </main>
  );
}
