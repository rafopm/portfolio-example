'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import ThemeButton from './ThemeButton';
import Styles from '../styles/Menu.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';;

const Items = [
    {
        id: 1,
        desc: 'HomePage',
        display: 'Inicio',
    },
    {
        id: 2,
        desc: 'Projects',
        display: 'Proyectos',
    },
    {
        id: 3,
        desc: 'Tools',
        display: 'Herramientas',
    },
    // {
    //     id: 4,
    //     desc: 'About',
    //     display: 'Sobre Mi',
    // },
    {
        id: 5,
        desc: 'Contact',
        display: 'Contactos',
    },
];

export const Menu = () => {
    const navMenuRef = useRef(null);
    const [active, setActive] = useState(useSearchParams().get('page'));
    const [showMenu, setShowMenu] = useState(false);
    const [loading, setLoading] = useState(true); // Agregar la variable de estado 'loading'
    const router = useRouter();
    active === null && setActive('HomePage');
    const isMobile = useMediaQuery('(max-width: 768px)');

    const handleClick = (component) => {
        router.push(`?page=${component}`);
        setActive(component);
    };

    useEffect(() => {
        if (isMobile) {
            setShowMenu(false);
        }
    }, [isMobile]);

    useEffect(() => {
        setLoading(false); // Establecer 'loading' en false una vez que todos los elementos se hayan cargado
    }, []);

    const handleImageLoad = () => {
        setLoading(false); // Establecer 'loading' en false una vez que la imagen se haya cargado
    };

    return (
        <div className="relative">
            {!loading && ( // Mostrar el componente completo solo si 'loading' es false

                <div className={`${Styles.MenuContainer} ${showMenu && Styles.menuMobile}`}>
                    <div
                        className={`${Styles.logo} flex text-2xl ml-5 mr-5  p-2 transition-colors `}

                    >
                        <Image src="/images/logor.svg" width={30} height={30} alt="Logo Rafael" onClick={() => handleClick('HomePage')} onLoad={handleImageLoad} />
                        <div onClick={() => setShowMenu(!showMenu)} className={Styles.iconMenu}>
                            {showMenu ? (
                                <Image src="/images/x.svg" width={30} height={30} alt="x (cerrar)" />
                            ) : (
                                <Image src="/images/hamburguer.svg" width={30} height={30} alt="menu hamburguer" />
                            )}
                        </div>
                    </div>
                    {isMobile ? (
                        showMenu && (
                            <>
                                <div className={`${Styles.navMenu} ${Styles.menuMobile}`} ref={navMenuRef} onClick={() => setShowMenu(!showMenu)}>
                                    {Items.map((item) => (
                                        <div key={item.id} onClick={() => handleClick(item.desc)} className={active === item.desc ? Styles.activeItem : Styles.Item}>
                                            <span className={Styles.line}>
                                                <h1>{item.display}</h1>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div >
                                    <ThemeButton />
                                </div>
                            </>)
                    ) : (<>
                        <div className={Styles.navMenu} ref={navMenuRef}>
                            {Items.map((item) => (
                                <div key={item.id} onClick={() => handleClick(item.desc)} className={active === item.desc ? Styles.activeItem : Styles.Item}>
                                    <span className={Styles.line}>
                                        <h1>{item.display}</h1>
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div >
                            <ThemeButton />
                        </div>
                    </>)
                    }
                </div>
            )}
        </div>
    );
};