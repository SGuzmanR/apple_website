import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState, useEffect } from "react"

import { heroVideo, smallHeroVideo } from "../utils"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 700 ? smallHeroVideo : heroVideo)

  const handleVideoSrc = () => {
    if(window.innerWidth < 700) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc);
    return () => {
      window.removeEventListener('resize', handleVideoSrc);
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>

        <div className="max-[480px]:w-full w-8/12">
          <video className="pointer-events-none" loop autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="https://www.apple.com/iphone-15-pro/specs/" target="_blank" className="btn font-bold">Buy it</a>
        <p className="font-normal text-xl max-sm:text-base">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero