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

  let componentToRender; 
  switch (activePage) { 
    case 'HomePage': 
      componentToRender = <HomePage /> 
      break; 
    case 'Projects': 
      componentToRender = <Projects /> 
      break; 
    case 'Tools': 
      componentToRender = <Tools /> 
      break; 
    case 'About': 
      componentToRender = <About /> 
      break; 
    case 'Contact': 
      componentToRender = <Contact /> 
      break; 
    default: 
      componentToRender = <HomePage /> 
      break; 
  } 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div>
      {componentToRender} 

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