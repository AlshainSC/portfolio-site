"use client"

import React, { useEffect, useRef, FC } from "react"
import { useSpring, animated } from "react-spring"
import Link from "next/link"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [topDividerProps, setTopDividerProps] = useSpring(() => ({
    width: "20%",
    height: "4px"
  }))
  const [bottomDividerProps, setBottomDividerProps] = useSpring(() => ({
    width: "40%",
    height: "4px"
  }))

  const flexContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => {
      setTopDividerProps({ width: "100%" })
      setBottomDividerProps({ width: "100%" })
    }

    const handleMouseLeave = () => {
      setTopDividerProps({ width: "20%" })
      setBottomDividerProps({ width: "40%" })
    }

    const flexContainerElement = flexContainerRef.current
    if (flexContainerElement) {
      flexContainerElement.addEventListener("mouseenter", handleMouseEnter)
      flexContainerElement.addEventListener("mouseleave", handleMouseLeave)
      return () => {
        flexContainerElement.removeEventListener("mouseenter", handleMouseEnter)
        flexContainerElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center" ref={flexContainerRef}>
      <nav className="py-4 fixed top-0 flex flex-col justify-center">
        <div className="flex min-h-2 relative  flex-col-reverse">
          <animated.span
            className="flex absolute inset-0 h-2 top-1/2 -mt-px bg-gray-300 top-divider"
            style={{
              ...topDividerProps,
              backgroundColor: topDividerProps.width.to((width) =>
                +width <= 20 ? "gray" : "#879abf"
              )
            }}
          ></animated.span>
        </div>
        <div
          className="flex flex-row justify-between"
          onMouseEnter={() => {
            setTopDividerProps({ width: "100%" }),
              setBottomDividerProps({ width: "100%" })
          }}
          onMouseLeave={() => {
            setTopDividerProps({ width: "20%" }),
              setBottomDividerProps({ width: "40%" })
          }}
        >
          <Link
            href="/home"
            className="text-gray-200 font-medium hover:text-white transition-colors mr-4"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-200 font-medium hover:text-white transition-colors mr-4"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-gray-200 font-medium hover:text-white transition-colors mr-4"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-gray-200 font-medium hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className=" flex h-2 relative ">
          <animated.span
            className="flex absolute inset-0 h-2 top-1/2 -mt-px bg-gray-300 bottom-divider"
            style={{
              ...bottomDividerProps,
              backgroundColor: bottomDividerProps.width.to(
                (width) => (+width <= 30 ? "gray" : "#8abf9e") // Example using muted blue, tweak condition
              )
            }}
          ></animated.span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
