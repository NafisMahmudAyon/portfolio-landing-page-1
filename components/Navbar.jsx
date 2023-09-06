import React from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from './Icons';
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='px-3 py-4'>
        <div className={`mx-auto   max-w-[1300px] w-full flex items-center justify-between ${inter.className} text-primary dark:text-primaryDark  `}>
            {/* logo  */}
            <div className=' text-[40px] font-bold '>LOGO</div>
            {/* menu  */}
            <div className=' flex gap-6 text-[16px] '>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/works">Works</a>
                <a href="/contact">Contact</a>
            </div>
            {/* button  */}
            <div className='flex gap-3  '>
                <button type="button" className=' bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover hover:dark:bg-bgButtonHoverDark  text-Button dark:text-ButtonDark hover:text-ButtonHover hover:dark:text-ButtonHoverDark  px-6 py-2 rounded-lg '>Let's Talk</button>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-4 sm:ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-bg text-primary" : "bg-bgDark text-primaryDark"}`}
                >
                    {
                        mode === "dark" ?
                        <SunIcon className={"bg-bgDark text-primaryDark"} />
                        
                        : <MoonIcon className={"bg-bg text-primary "} />
                    }
                </button>
            </div>
        </div>
        
    </header>
  )
}

export default Navbar