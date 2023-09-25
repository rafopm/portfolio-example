'use client'

import Styles from '../../styles/Home.module.css'
import Link from 'next/link';
import TextoAnimado from '../../utils/TextoAnimado';
import { Redes } from '../../utils/Redes';
import Trail from '../../utils/TrailSpringTexto';
import { useSpring, animated } from '@react-spring/web';

export const HomePage = () => {
  const cardSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Duración de la animación en milisegundos (0.5 segundos)
    delay: 500, 
  });

  return (
    <div className={Styles.container} >

      <div className={Styles.elementos}>
        <div className={Styles.social}>

          <Redes />

        </div>
        <div className={`${Styles.cards} `}>

          <div className={`${Styles.card}  opacity-90 ${Styles['cardHover']}`}>

            <animated.div style={cardSpring} >
              <div className={`${Styles.bloque}  opacity-90 bg-background-light dark:bg-background-dark `}>
              </div>
              {/* <Card className={`${Styles.bloque} max-w-md mx-auto opacity-90 `}>
              </Card> */}
            </animated.div>
            <Trail posicionEjeX={-300} altoObjeto={35}>
              <p className="font-bold text-2xl text-secondary ">Hola, soy</p>
              <p className="font-bold text-3xl dark:text-tertiary  text-color-text-dark">Rafael Pampavilca</p>
              <p className="font-bold text-2xl text-secondary ">Desarrollador web</p>
            </Trail>


            <div className="flex justify-end ">
              <Link href="/?page=Contact" passHref>
                <Trail posicionEjeX={350} altoObjeto={70}>

                  <button className=" mt-4 ml-10 mr-20 text-lg dark:text-text-light  text-text-light bg-tertiary z-50 flex flex-row items-center font-semibold py-2 px-4 border border-gray-900 rounded shadow hover:scale-110 hover:text-secondary dark:hover:text-secondary transition-transform duration-300 ease-in-out transform-gpu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                    </svg>
                    <span> Escríbeme</span>
                  </button>

                </Trail>
              </Link >
            </div>
          </div>


          <div className={Styles.cardOcultar}>
            <animated.div style={cardSpring} >
              <TextoAnimado text="Rafael * Pampavilca * ">
                <img className={Styles.imageAnimar} src="images/avatar.svg" alt="Avatar" />
              </TextoAnimado>
            </animated.div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
