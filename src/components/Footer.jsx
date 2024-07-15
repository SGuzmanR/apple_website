import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="flex gap-2 justify-center items-center flex-col max-sm:text-center">
          <p className="font-semibold text-gray text-sm">
            More ways to shop: {' '}
            <span className="underline text-white">
              <a href="/">Find an Apple Store {' '}</a>
            </span>
            or {' '}
            <span className="underline text-white">
              <a href="/">other retailer {' '}</a>
            </span>
            near you.
          </p>

          <p className="font-semibold text-gray text-sm">
            Or call us: {' '}
            <span className="underline text-white">
              <a href="/">0080-0080-0080</a>
            </span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col items-center justify-between max-sm:gap-4 max-sm:text-center">
          <p className="font-semibold text-gray text-sm">
            Copyright &copy; 2024 Apple Inc. All rigths reserved.
          </p>

          <div className="flex gap-5 max-sm:gap-2 max-sm:flex-wrap max-sm:justify-center">
            {footerLinks.map((item) => (
              <p key={item}>
                <a href="/" className="font-semibold text-gray text-sm hover:underline hover:text-white">
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer