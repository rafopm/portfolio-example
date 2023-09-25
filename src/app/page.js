'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { Tools } from './components/pages/Tools';
import { HomePage } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { BackgroundImage } from './components/BackgroundImage';
import RiseLoader from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#D16AE6",
};


const MemoizedComponent = React.memo(({ activePage }) => {
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

  return (
    <div>
      {componentToRender}
    </div>
  );
});

export default function Home() {
  const activePage = useSearchParams().get('page');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <MemoizedComponent activePage={activePage} />
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