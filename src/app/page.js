'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Tools } from './components/pages/Tools';
import { HomePage } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { BackgroundImage } from './components/BackgroundImage';
import RiseLoader  from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#D16AE6",
};

export default function Home() {
  const activePage = useSearchParams().get('page');
  const [showHome, setShowHome] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    switch (activePage) {
      case 'HomePage':
        setShowHome(true);
        setShowProjects(false);
        setShowTools(false);
        setShowAbout(false);
        setShowContact(false);
        break;
      case 'Projects':
        setShowHome(false);
        setShowProjects(true);
        setShowTools(false);
        setShowAbout(false);
        setShowContact(false);
        break;
      case 'Tools':
        setShowHome(false);
        setShowProjects(false);
        setShowTools(true);
        setShowAbout(false);
        setShowContact(false);
        break;
      case 'About':
        setShowHome(false);
        setShowProjects(false);
        setShowTools(false);
        setShowAbout(true);
        setShowContact(false);
        break;
      case 'Contact':
        setShowHome(false);
        setShowProjects(false);
        setShowTools(false);
        setShowAbout(false);
        setShowContact(true);
        break;
      default:
        setShowHome(true);
        setShowProjects(false);
        setShowTools(false);
        setShowAbout(false);
        setShowContact(false);
        break;
    }
  }, [activePage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div>
        {showHome && <HomePage />}
        {showProjects && <Projects />}
        {showTools && <Tools />}
        {showAbout && <About />}
        {showContact && <Contact />}

      </div>
      <BackgroundImage />

      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-900">

          <RiseLoader 
            color="#D16AE6"
            loading={loading}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

    </main>
  );
}