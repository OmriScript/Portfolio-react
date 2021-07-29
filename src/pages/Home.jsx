import { useRef } from 'react';

import { ProjectList } from '../cmps/ProjectList'
import { About } from '../cmps/About'
import { Contact } from '../cmps/Contact'
export function Home() {
    const containerRef = useRef()
    const handleOnWheel = (ev) => {
        // ev.preventDefault();
        console.log('eeeee.deltaY', ev.deltaY);
        console.log('containerRef.current.scrollLeft', containerRef.current.scrollLeft)
        containerRef.current.scrollLeft += ev.deltaY;
    }
    return (
        <div className="home scroll-container" ref={containerRef} onWheel={(ev) => { handleOnWheel(ev) }}>

            <ProjectList />
            <About />
            <Contact />
        </div>
    )
}
