import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from "tsparticles";

const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (
        <>
            {init && (
                <Particles
                    options={{
                        particles: {
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                },
                            },
                            color: {
                                value: '#fff',
                            },
                            shape: {
                                type: 'square',
                            },
                            opacity: {
                                value: 1,
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                            links: {
                                enable: false,
                                distance: 100,
                                color: '#fff',
                            },
                            move: {
                                enable: true,
                                speed: { min: 0.5, max: 1.5 },
                                outModes: 'bounce',
                                direction: 'top',
                            },
                            zIndex: {
                                value: -1,
                            },
                        },
                    }}
                />  //Particles 끝
            )}
        </>
    )
}

export default Particle