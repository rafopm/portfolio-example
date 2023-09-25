import React from 'react'
import { TbBrandJavascript, TbBrandCss3, TbBrandNextjs, TbBrandBootstrap, TbBrandTailwind, TbBrandHtml5, TbBrandReact, TbBrandMysql, TbBrandMongodb } from 'react-icons/tb';

import { BiLogoSpringBoot, BiLogoJava, BiLogoNodejs, BiLogoTypescript } from 'react-icons/bi';

import { SiExpress, SiOracle, SiSecurityscorecard, SiAdobeillustrator, SiJoomla } from 'react-icons/si';

import { DiMsqlServer, DiPhotoshop, DiWordpress } from 'react-icons/di';

import { RiFileExcel2Fill } from 'react-icons/ri';
import Trail from '@/app/utils/TrailSpringTexto';
// {/* JavaScript CSS  HTML  React NextJS  Bootstrap Tailwind */}
const frontend = [
  {
    name: 'React',
    icon: <TbBrandReact size={30} />,
  },
  {
    name: 'JavaScript',
    icon: <TbBrandJavascript size={30} />,
  },
  {
    name: 'CSS',
    icon: <TbBrandCss3 size={30} />,
  },
  {
    name: 'NextJS',
    icon: <TbBrandNextjs size={30} />,
  },
  {
    name: 'Bootstrap',
    icon: <TbBrandBootstrap size={30} />,
  },
  {
    name: 'Tailwind',
    icon: <TbBrandTailwind size={30} />,
  },
  {
    name: 'HTML',
    icon: <TbBrandHtml5 size={30} />,
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript size={30} />,
  },
];

const backend = [
  {
    name: 'Java',
    icon: <BiLogoJava size={30} />,
  },
  {
    name: 'Spring Boot',
    icon: <BiLogoSpringBoot size={30} />,
  },
  {
    name: 'Express',
    icon: <SiExpress size={30} />,
  },
  {
    name: 'NodeJS',
    icon: <BiLogoNodejs size={30} />,
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript size={30} />,
  },
]

// MySQL
// MongoDB
// Oracle Database JSON
// SQL Server
const database = [
  {
    name: 'MySQL',
    icon: <TbBrandMysql size={30} />,
  },
  {
    name: 'MongoDB',
    icon: <TbBrandMongodb size={30} />,
  },
  {
    name: 'Oracle JSON',
    icon: <SiOracle size={30} />,
  },
  {
    name: 'SQL Server',
    icon: <DiMsqlServer size={30} />,
  },
]






const otros = [
  {
    name: 'Excel Avanzado',
    icon: <RiFileExcel2Fill size={30} />,
  },
  {
    name: 'Photoshop',
    icon: <DiPhotoshop size={30} />,
  },
  {
    name: 'Corel Draw',
    icon: <SiSecurityscorecard size={30} />,
  },
  {
    name: 'Illustrator',
    icon: <SiAdobeillustrator size={30} />,
  },
  {
    name: 'WordPress',
    icon: <DiWordpress size={30} />,
  },
  {
    name: 'Joomla',
    icon: <SiJoomla size={30} />,
  },
]
export const Tools = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center text-text-light dark:text-text-dark">
      <div>
        <div className='mt-10 text-2xl  text-center'>FRONTEND</div>
        <Trail posicionEjeX={-300} altoObjeto={120}>
          <div className="flex flex-wrap justify-center text-center">
            {frontend.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4 p-4 bg-background-light dark:bg-background-dark border-primary border-solid border-2 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:text-secondary"
              >
                {logo.icon}
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </Trail>

      </div>

      <div>
        <div className='mt-10 text-2xl  text-center'>BACKEND</div>
        <Trail posicionEjeX={300} altoObjeto={120}>
          <div className="flex flex-wrap justify-center text-center">
            {backend.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4 p-4 bg-background-light dark:bg-background-dark border-primary border-solid border-2 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:text-secondary"
              >
                {logo.icon}
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </Trail>
      </div>

      <div>
        <div className='mt-10 text-2xl  text-center'>BASE DE DATOS</div>
        <Trail posicionEjeX={-300} altoObjeto={120}>
          <div className="flex flex-wrap justify-center text-center">
            {database.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4 p-4 bg-background-light dark:bg-background-dark border-primary border-solid border-2 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:text-secondary"
              >
                {logo.icon}
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </Trail>
      </div>

      <div>
        <div className='mt-10 text-2xl  text-center'>OTROS</div>
        <Trail posicionEjeX={300} altoObjeto={120}>
          <div className="flex flex-wrap justify-center text-center">
            {otros.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4 p-4 bg-background-light dark:bg-background-dark border-primary border-solid border-2 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:text-secondary"
              >
                {logo.icon}
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </Trail>
      </div>

      <div></div>

    </div>
  )
}
