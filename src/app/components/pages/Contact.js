'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Styles from '../../styles/Contactos.module.css'
import { Redes } from '../../utils/Redes';
import Trail from '../../utils/TrailSpringTexto';
import { useSpring, animated } from '@react-spring/web';

export const Contact = () => {
  const form = useRef();
  const SERVICEID = process.env.NEXT_PUBLIC_SERVICIO;
  const TEMPLATEID = process.env.NEXT_PUBLIC_TEMPLATE;
  const PUBLICKEYID = process.env.NEXT_PUBLIC_PUBLICKEY;

  const [successMessage, setSuccessMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    const formData = new FormData(form.current);
    const name = formData.get('Nombre');
    const email = formData.get('Email');
    const message = formData.get('Mensaje');


    if (!name || !email || !message) {
      alert('Por favor, ingresa todos los campos.');
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }

    setIsFormDisabled(true);

    emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, PUBLICKEYID)
      .then((result) => {

        setSuccessMessage('Mensaje enviado correctamente.');
        form.current.reset();
        setIsFormDisabled(false);
      })
      .catch((error) => {
        console.log(error.text);
        alert('Ocurrió un error mientras se enviaba el mensaje. Por favor, intenta otra vez.');
        setIsFormDisabled(false);
      });
  };

  const cardSpring1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Duración de la animación en milisegundos (0.5 segundos)
    delay: 1000, // Retraso de 500 milisegundos antes de que comience la animación
  });

  const cardSpring2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Duración de la animación en milisegundos (0.5 segundos)
    delay: 2000, // Retraso de 500 milisegundos antes de que comience la animación
  });


  return (
    <div className="bg-background-light mt-10 dark:bg-background-dark w-fit m-auto rounded-2xl "  >
      <div >
        <div>
          <br className="mt-0 mb-3" />
        </div>

        <div className="dark:bg-color-text-dark">
          <div className={Styles.bodyContainer}>

            <div className="w-full  max-w-md mx-450 rounded-lg pt-0  p-8 mt-1">
              <div className="flex flex-col mb-4  ">
                <Trail posicionEjeX={-300} altoObjeto={35}>
                  <div className="mr-5 dark:text-secondary text-2xl">¡Contáctame! </div>
                </Trail>
                
                  <div className="mr-5 "> Para contratarme, compartir experiencias, consultar por algún proyecto o solo para saludar. ¡Siempre respondo! </div>
                
              </div>
              {successMessage ? (
                <div className="mt-4 text-green-500 font-bold">{successMessage}</div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 dark:text-ligth" htmlFor="Nombre">
                      Nombre
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"

                      name="Nombre"
                      required
                      disabled={isFormDisabled}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block  text-sm font-bold mb-2 dark:text-ligth" htmlFor="Email">
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"

                      name="Email"
                      required
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      disabled={isFormDisabled}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 dark:text-ligth" htmlFor="Mensaje">
                      Mensaje
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-100"
                      name="Mensaje"
                      required
                      rows={8}
                      disabled={isFormDisabled}
                    />
                  </div>
                  <div className="flex justify-end">
                    <input
                      className={`bg-secondary hover:bg-color-primary text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      type="submit"
                      value="Enviar"
                      disabled={isFormDisabled}
                    />
                  </div>
                </form>
              )}
            </div>

            <div className={Styles.cardsContainer}>
              <animated.div style={cardSpring1} className=" w-full mt-10 mx-auto h-25">
                <div className={`${Styles.card} max-w-xs mx-auto h-25 hover:scale-110 hover:brightness-125   transition-transform duration-300 ease-in-out transform-gpu `} decoration="top" decorationColor="indigo">
                  <div>Redes</div>
                  <br />
                  <Redes color="text-primary" />
                </div>
              </animated.div>
              <animated.div style={cardSpring2} className=" w-full mt-10 mx-auto h-25">
                <div className="max-w-xs mx-auto hover:scale-110 hover:brightness-125 transition-transform duration-300 ease-in-out transform-gpu" decoration="top" decorationColor="indigo">
                  <div>Email</div>
                  <br />
                  <h1 className='text-center'>rafopm@outlook.com</h1>
                </div>
              </animated.div>

            </div>
          </div>
        </div>

      </div >
    </div >
  )
}
