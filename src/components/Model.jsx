import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import { allColorsImg } from "../utils";
import { models } from "../constants";

const Model = () => {
  const [model, setModel] = useState({
    title: '6.1" iPhone 15 Pro (All colors)',
    color: "#f2f5f3",
    img: allColorsImg,
  });

  useGSAP(() => {
    gsap.to('#heading', {
      scrollTrigger: {
        trigger: '#models',
        start: '20% bottom'
      },
      y:0,
      opacity: 1,
    })

    gsap.to('#models', {
      scrollTrigger: {
        trigger: '#models',
        start: '20% bottom'
      },
      y: 0,
      duration: 2,
      opacity: 1
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">Take a closer look</h1>

        <div className="flex flex-col items-center mt-5">
          <div id="models" className="w-full h-[60vh] overflow-hidden relative justify-center items-center flex opacity-0 translate-y-14">
            <img src={model.img} alt={model.title} className="w-auto h-auto object-contain" />
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">
              {model.title}
            </p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, index) => (
                  <li 
                    key={index}
                    style={{ backgroundColor: item.color }}
                    className={`w-6 h-6 rounded-full mx-2 cursor-pointer hover:border-2 border-white`}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model