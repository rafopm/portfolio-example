'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { Tools } from './components/pages/Tools';
import { HomePage } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { BackgroundImage } from './components/BackgroundImage';


export default function Home() {
  const activePage = useSearchParams().get('page');
  //console.log(activePage.get('page'))
  let componentToRender;

  switch (activePage) {
    case 'HomePage':
      componentToRender = <HomePage />;
      break;
    case 'Projects':
      componentToRender = <Projects />;
      break;
    case 'Tools':
      componentToRender = <Tools />;
      break;
    case 'About':
      componentToRender = <About />;
      break;
    case 'Contact':
      componentToRender = <Contact />;
      break;
    default:
      componentToRender = <HomePage />;
      break;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {componentToRender}
      </div>
      <BackgroundImage />
    </main>
  )
}
