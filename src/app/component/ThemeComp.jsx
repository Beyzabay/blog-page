"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { CiDark } from "react-icons/ci";



const ThemeComp = () => {
const [mounted, setMounted] = useState(false)
const {systemTheme, theme,setTheme} = useTheme()

useEffect(() => {
    setMounted(true)
}, [])

const themeMode = theme === "system" ? systemTheme : theme

  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ? 
                <IoIosSunny onClick={() => setTheme('light')} className="size-6"/> : 
                <CiDark onClick={() => setTheme('dark')} className="size-6"/> 

            )
        }
    </div>



    // <div><IoIosSunny className="size-6"/></div>
  )
}

export default ThemeComp