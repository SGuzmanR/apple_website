import { useState, useRef, useEffect } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLists } from "../constants"
import { appleImg, bagImg, hmImg, hmImgClose, searchImg}  from "../utils"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoverContent, setHoverContent] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const mobileRef = useRef(null);

  useEffect(() => {
    const handleBodyScroll = () => {
      if (open) {
        document.body.style.overflow = "hidden";
        document.body.style.overflowX = "hidden";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [open]);

  const handleNavToggle = () => {
    setOpen(!open);
  };

  const handleMouseEnter = (item) => {
    setHoverContent(item);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
  };

  useGSAP(() => {
    if (mobileRef.current) {
      gsap.to(mobileRef.current, {
        opacity: 1,
        duration: 1,
        translateY: 0,
        ease: "expo.inOut",
      });
    }
  }, [open]);

  return (
    <nav className="flex justify-center items-center w-full py-5 h-16 relative">
      {/* Hover Items */}
      {hoverContent && (
        <div
          className="bg-zinc w-[100vw] h-auto absolute top-0 left-0 z-10"
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-20 flex items-center justify-center w-full">
            <div key={hoverContent.title}>
              {hoverContent.subTitle && <p>{hoverContent.title}</p>}
              {hoverContent.content && (
                <div className="flex flex-row gap-24">
                  {hoverContent.content?.map((a, index) => (
                    <div key={index} className="">
                      <h3 className="text-gray pb-3 text-sm">{a.subTitle}</h3>
                      <ul
                        className={`flex flex-col gap-1 ${
                          index === 0
                            ? "text-2xl font-semibold"
                            : "text-sm"
                        }`}
                      >
                        {a.content?.map((b, index) => (
                          <li key={index}>
                            <a href={b.href}>{b.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile */}
      {open && (
        <div
          ref={mobileRef}
          className="bg-zinc w-screen h-screen fixed top-0 left-0 overflow-hidden z-10 opacity-0 translate-y-[-80vh]"
        >
          <div className="px-8 pt-20 screen-max-width">
            <div className="flex flex-col gap-5">
              {navLists.map((item) => (
                <div
                  key={item.title}
                  className={`w-full text-2xl flex cursor-pointer transition-colors gap-5 text-gray active:text-white`}
                >
                  <ul>
                    <li>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full z-10 justify-between screen-max-width max-sm:mx-6 sm:mx-8">
        <div
          className={`flex items-center justify-center place-items-center ${
            open ? "hidden" : ""
          }`}
        >
          <a href="/" className="cursor-pointer">
            <img
              src={appleImg}
              alt="Apple logo"
              width={18}
              height={20}
            />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center z-10">
          <div className="flex flex-row max-lg:hidden gap-8">
            {navLists.map((item, index) => (
              <ul
                key={item.title}
                className={`flex text-sm w-full cursor-pointer transition-colors ${ activeItem === item && hoverContent ? "text-white" : "text-gray hover:text-white"}`}
              >
                <li>
                  <a
                    onMouseEnter={() => handleMouseEnter(item)}
                    className="text-nowrap"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className={`flex flex-row gap-5 ${open ? "hidden" : ""}`}>
            <div className="cursor-pointer relative">
              <img
                src={searchImg}
                alt="Search Icon"
                width={18}
                height={18}
              />
            </div>
            <a className="cursor-pointer">
              <img
                src={bagImg}
                alt="Bag Icon"
                width={18}
                height={18}
              />
            </a>
          </div>
          <a className="pl-5 hidden max-lg:flex cursor-pointer">
            <img
              src={open ? hmImgClose : hmImg}
              alt="Hamburger Icon Open"
              width={18}
              height={18}
              onClick={handleNavToggle}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
