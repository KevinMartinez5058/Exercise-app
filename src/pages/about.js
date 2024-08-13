import React from 'react';
import './about.css';
import Navbar from '../components/navbar';
import Content from '../components/aboutContent';
import Team from '../components/team';
import Footer from '../components/footer';

export default function About() {
  return (
    <main>
      <Navbar />
      <Content />
      <Team />
      <Footer />
    </main>
  );
}
