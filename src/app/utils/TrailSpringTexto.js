'use client'
import { useTrail, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import Styles from '../styles/TrailSpringTexto.module.css'

const Trail = ({ children, posicionEjeX,altoObjeto }) => {
    const items = Array.isArray(children) ? children : [children];
    const [open, setOpen] = useState(true);

    const trail = useTrail(items.length, {
        config: { mass: 10, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 50,
        height: open ? altoObjeto : 0,
        from: { opacity: 0, y:0 , x: posicionEjeX, height: 0 },
    });

    useEffect(() => {
        setOpen(true);
        return () => {
          setOpen(false);
        };
      }, []);

    return (
        <div  open={open}>
            {trail.map(({ height, ...style }, index) => (
                <animated.div key={index} className={Styles.trailsText} style={style}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
        </div>
    );
};

export default Trail;