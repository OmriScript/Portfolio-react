import { useRef, useEffect } from 'react';
import Hammer from "hammerjs"

import { ProjectList } from '../cmps/ProjectList'
import { About } from '../cmps/About'
import { Contact } from '../cmps/Contact'

export function Home() {
    const containerRef = useRef(null)
    let hammerjs

    useEffect(() => {
        // enable swiping left & right on touch-screens larger than 720px
        hammerjs = new Hammer(containerRef.current)
        hammerjs.on("swipeleft", (ev) => {
            containerRef.current.scrollLeft -= ev.deltaX;
        })
        hammerjs.on("swiperight", (ev) => {
            containerRef.current.scrollLeft -= ev.deltaX;
        })
    });

    const handleOnWheel = (ev) => {
        if (window.innerWidth < 720) return
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