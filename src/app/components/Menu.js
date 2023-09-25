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

    return (
        <div className="relative">
            {!loading && ( // Mostrar el componente completo solo si 'loading' es false

                <div className={`${Styles.MenuContainer} ${showMenu && Styles.menuMobile}`}>
                    <div
                        className={`${Styles.logo} flex text-2xl ml-5 mr-5  p-2 transition-colors `}

                    >
                        <Image src="/images/logor.svg" width={30} height={30} alt="Logo Rafael" onClick={() => handleClick('HomePage')} />
                        <div onClick={() => setShowMenu(!showMenu)} className={Styles.iconMenu}>
                            {showMenu ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
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