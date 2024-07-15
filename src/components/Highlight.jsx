import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import VideoCarousel from "./VideoCarousel"
import { rightImg, watchImg } from "../utils"

const Highlight = () => {
  useGSAP(() => {
    gsap.to('#title', {
      y: 0,
      opacity: 1,
    })

    gsap.to('.link', {
      scrollTrigger: {
        trigger: '.link',
        start: '20% bottom'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25
    })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mg-12 w-full flex items-center justify-between max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-center">
          <h1 id="title" className="section-heading">Get the highlights</h1>

          <div className="flex items-center gap-4 max-sm:w-full flex-row justify-center align-center">
            <p className="link">
              <span>Watch the film</span>
              <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              <span>Watch the event</span>
              <img src={rightImg} alt="Watch" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlight