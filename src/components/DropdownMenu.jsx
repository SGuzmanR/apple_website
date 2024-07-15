import { navLists } from '../constants'

const DropdownMenu = ({ hoveredIndex }) => {
  return (
    <div className="bg-zinc w-[100vw] h-[50vh] m-0 p-0 absolute top-0 left-0  z-10">
      <div className='common-padding screen-max-width'>
        {navLists.map((item) => (
          <div>
            {item[hoveredIndex].title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu