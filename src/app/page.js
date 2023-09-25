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
    <main >
      <div >
        {componentToRender}
      </div>
      <BackgroundImage />
    </main>
  )
}
