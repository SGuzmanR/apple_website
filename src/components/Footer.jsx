import { appleImg } from "../utils"
import { footerLinks, footerPrincipalLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-10 sm:px-10 px-5 bg-[#1d1d1f]">
      <div className="screen-max-width">
        <div className="flex flex-col gap-5 text-sm text-gray px-4">
          <div>
            <small>*</small> Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax maybe assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </div>

          <div className="flex flex-col list-decimal">
            <ol className="flex flex-col gap-4 list-decimal list-outside">
              <li className="gap-1">
                <p>Available to qualified customers and requires 24‑month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. You’ll need to select AT&T, T‑Mobile, or Verizon as your carrier when you check out. An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the <a className="hover:underline text-white cursor-pointer" href="/">Apple Card Customer Agreement</a>. Additional iPhone Payments terms are <a className="hover:underline text-white cursor-pointer" href="/">here</a>. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to, installment term lengths and eligible products. See <a className="hover:underline text-white cursor-pointer" href="support.apple.com/kb/HT211204">support apple</a> for information about upcoming changes to ACMI financing.</p>
              </li>
              <li className="gap-1">
                <p>Display size: The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches (iPhone 15 Pro) or 6.69 inches (iPhone 15 Pro Max) diagonally. Actual viewable area is less.</p>
              </li>
              <li className="gap-1">
                <p>iPhone 15 Pro and iPhone 15 Pro Max are splash, water, and dust resistant and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes). Splash, water, and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty.</p>
              </li>
              <li className="gap-1">
                <p>Stand sold separately.</p>
              </li>
              <li className="gap-1">
                <p>USB 3 cable with 10Gb/s speed required.</p>
              </li>
              <li className="gap-1">
                <p>Wi‑Fi 6E available in countries and regions where supported.</p>
              </li>
              <li className="gap-1">
                <p>The included USB‑C Charge Cable is compatible with AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C).</p>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-2">
            <p>
              Apps are available on the App Store. Title availability is subject to change.
            </p>
            <p>
              Apple TV+ requires a subscription.
            </p>
            <p>
              To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </p>
            <p>
              If you reside in the U.S. territories, please call Goldman Sachs at 877‑255‑5923 with questions about Apple Card.
            </p>
          </div>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex w-full h-auto flex-1 gap-2 text-sm">
          <a href="/" className="cursor-pointer">
            <img
              src={appleImg}
              alt="Apple logo"
              width={16}
              height={18}
            />
          </a>
          <span className="font-bold text-gray">&#x0003e;</span>
          <a href="https://www.apple.com/iphone/" className="cursor-pointer">iPhone</a>
          <span className="font-bold text-gray">&#x0003e;</span>
          <a>iPhone 15 Pro</a>
        </div>

        {/* <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="grid grid-cols-5 grid-rows-3 gap-4 max-sm:hidden">
          {footerPrincipalLinks.map((item) => (
            <div key={item.title} className="flex flex-col row-span-1">
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
              <div className="flex flex-col gap-1 h-fit">
                {item.content.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-white text-sm break-words"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex gap-2 flex-col max-sm:text-center">
          <p className="text-gray text-sm">
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

          <p className="text-gray text-sm">
            Or call us: {' '}
            <span className="underline text-white">
              <a href="/">0080-0080-0080</a>
            </span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col justify-between max-sm:gap-1">
          <p className="text-gray text-sm">
            Copyright &copy; 2024 Apple Inc. All rigths reserved.
          </p>

          <div className="flex max-sm:flex-wrap">
            {footerLinks.map((item, index) => (
              <p key={item}>
                <a href="/" className="text-white text-sm hover:underline">
                  {item}{' '}
                  {index !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
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