import { useState } from "react"

import { navLists } from "../constants"
import { appleImg, bagImg, hmImg, hmImgClose, searchImg}  from "../utils"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visibleOpen, setVisibleOpen] = useState(false);

  const handleNavToggle = () => {
    setOpen(!open);
  }

  const handleMouseEnter = () => {
    setVisibleOpen(true);
  }

  const handleMouseLeave = () => {
    setVisibleOpen(false);
  }

  return (
    <header>
      {visibleOpen &&
        <div className="bg-zinc w-[100vw] h-[50vh] absolute top-0 left-0 z-10">
          <div className="common-padding screen-max-width">
            Items
          </div>
        </div>
      }

      {open && 
        <div className="bg-zinc w-[100vw] h-[100vh] absolute top-0 left-0 z-20">
          <div className="common-padding screen-max-width h-full">
            <div className="flex flex-col gap-6">
              {navLists.map((item, index) => (
                <div key={item.title} className="text-3xl flex justify-start items-center cursor-pointer text-gray hover:text-white transition-all gap-5">
                  <ul>
                    <li>
                      <a>
                        {item.title}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      
      <div className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
        <div className="flex w-full max-w-screen-lg justify-between z-20">
          <a href="/" className="cursor-pointer">
            <img src={appleImg} alt="Apple logo" width={14} height={18} />
          </a>

          <nav className="flex max-[1150px]:hidden">
            {navLists.map((item, index) => (
              <div key={item.title} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                <ul>
                  <li>
                    <a
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.title}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="Search Icon" width={18} height={18} className="cursor-pointer" />
            <img 
              src={bagImg} 
              alt="Bag Icon" 
              width={18} 
              height={18} 
              className="cursor-pointer" 
            />
            <img 
              src={open ? hmImgClose : hmImg} 
              alt="Hamburger Icon Open" 
              width={18}
              height={18}
              className="max-[1150px]:flex hidden cursor-pointer"
              onClick={handleNavToggle} 
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
