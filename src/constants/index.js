import {
  allColorsImg,
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { 
    title: "Store",
    href: "https://www.apple.com/store",
    content: [
      {
        subTitle: "Shop",
        content: [
          { title: "Shop the latest", href: "/" },
          { title: "Mac", href: "/" },
          { title: "iPad", href: "/" },
          { title: "iPhone", href: "/" },
          { title: "Apple Watch", href: "/" },
          { title: "Apple Vision Pro", href: "/" },
          { title: "Accessories", href: "/" },
        ],
      },
      {
        subTitle: "Quick Links",
        content: [
          { title: "Find a Store", href: "/" },
          { title: "Order Status", href: "/" },
          { title: "Apple Trade In", href: "/" },
          { title: "Financing", href: "/" },
          { title: "College Student Offer", href: "/" },
        ],
      },
      {
        subTitle: "Shop Special Stores",
        content: [
          { title: "Shop the latest", href: "/" },
          { title: "Education", href: "/" },
          { title: "Business", href: "/" },
          { title: "Veterans and Military", href: "/" },
          { title: "Government", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Mac",
    href: "https://www.apple.com/mac/",
    content: [
      {
        subTitle: "Explore Mac",
        content: [
          { title: "Explore All Mac", href: "/" },
          { title: "Macbook Air", href: "/" },
          { title: "Macbook Pro", href: "/" },
          { title: "iMac", href: "/" },
          { title: "Mac Mini", href: "/" },
          { title: "Mac Studio", href: "/" },
          { title: "Mac Pro", href: "/" },
          { title: "Displays", href: "/" },
          { title: "Compare Mac", href: "/" },
          { title: "Mac Does That", href: "/" },
        ],
      },
      {
        subTitle: "Shop Mac",
        content: [
          { title: "Buy Mac", href: "/" },
          { title: "Help Me Choose", href: "/" },
          { title: "Mac Accesories", href: "/" },
          { title: "Apple Trade In", href: "/" },
          { title: "Financing", href: "/" },
          { title: "College Student Offer", href: "/" },
        ],
      },
      {
        subTitle: "More from Mac",
        content: [
          { title: "Mac Support", href: "/" },
          { title: "AppleCare+ for Mac", href: "/" },
          { title: "macOS Sequoia Preview", href: "/" },
          { title: "Apple Intelligence", href: "/" },
          { title: "Apps by Apple", href: "/" },
          { title: "Continuity", href: "/" },
          { title: "iCloud+", href: "/" },
          { title: "Mac for Business", href: "/" },
          { title: "Education", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "iPad",
    href: "https://www.apple.com/ipad/",
    content: [
      {
        subTitle: "Explore iPad",
        content: [
          { title: "Explore All iPad", href: "/" },
          { title: "Macbook Air", href: "/" },
          { title: "iPad Pro", href: "/" },
          { title: "iPad", href: "/" },
          { title: "iPad Mini", href: "/" },
          { title: "Apple Pencil", href: "/" },
          { title: "Keyboards", href: "/" },
          { title: "Compare Mac", href: "/" },
          { title: "Why iPad", href: "/" },
        ],
      },
      {
        subTitle: "Shop iPad",
        content: [
          { title: "Buy iPad", href: "/" },
          { title: "iPad Accessories", href: "/" },
          { title: "Apple Trade In", href: "/" },
          { title: "Financing", href: "/" },
          { title: "College Student Offer", href: "/" },
        ],
      },
      {
        subTitle: "More from iPad",
        content: [
          { title: "iPad Support", href: "/" },
          { title: "AppleCare+ for iPad", href: "/" },
          { title: "iPadOS 18 Preview", href: "/" },
          { title: "Apple Intelligence", href: "/" },
          { title: "Apps by Apple", href: "/" },
          { title: "iCloud+", href: "/" },
          { title: "Education", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "iPhone",
    href: "https://www.apple.com/iphone/",
    content: [
      {
        subTitle: "Explore iPhone",
        content: [
          { title: "Explore All iPhone", href: "/" },
          { title: "iPhone 15 Pro", href: "/" },
          { title: "iPhone 15", href: "/" },
          { title: "iPhone 14", href: "/" },
          { title: "iPhone 13", href: "/" },
          { title: "iPhone SE", href: "/" },
          { title: "Compare iPhone", href: "/" },
          { title: "Switch from Android", href: "/" },
        ],
      },
      {
        subTitle: "Shop iPhone",
        content: [
          { title: "Buy iPhone", href: "/" },
          { title: "iPhone Accessories", href: "/" },
          { title: "Apple Trade In", href: "/" },
          { title: "Carrier Deals at Apple", href: "/" },
          { title: "Financing", href: "/" },
        ],
      },
      {
        subTitle: "More from iPhone",
        content: [
          { title: "iPhone Support", href: "/" },
          { title: "AppleCare+ for iPhone", href: "/" },
          { title: "iOS 18 Preview", href: "/" },
          { title: "Apple Intelligence", href: "/" },
          { title: "Apps by Apple", href: "/" },
          { title: "iPhone Privacy", href: "/" },
          { title: "iCloud+", href: "/" },
          { title: "Wallet, Pay, Card", href: "/" },
          { title: "Siri", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Watch",
    href: "https://www.apple.com/watch/",
    content: [
      {
        subTitle: "Explore Watch",
        content: [
          { title: "Explore All Apple Watch", href: "/" },
          { title: "Apple Watch Series 9", href: "/" },
          { title: "Apple Watch Ultra 2", href: "/" },
          { title: "Apple Watch SE", href: "/" },
          { title: "Apple Watch Nike", href: "/" },
          { title: "Apple Watch Hermès", href: "/" },
          { title: "Compare Watch", href: "/" },
          { title: "Why Apple Watch", href: "/" },
        ],
      },
      {
        subTitle: "Shop Watch",
        content: [
          { title: "Buy Apple Watch", href: "/" },
          { title: "Apple Watch Studio", href: "/" },
          { title: "Apple Watch Bands", href: "/" },
          { title: "Apple Watch Accessories", href: "/" },
          { title: "Apple Trade In", href: "/" },
          { title: "Financing", href: "/" },
        ],
      },
      {
        subTitle: "More from Watch",
        content: [
          { title: "Apple Watch Support", href: "/" },
          { title: "AppleCare+", href: "/" },
          { title: "watchOS 11 Preview", href: "/" },
          { title: "Apple Watch for Kids", href: "/" },
          { title: "Apps by Apple", href: "/" },
          { title: "Apple Fitness+", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Vision",
    href: "https://www.apple.com/apple-vision-pro/",
    content: [
      {
        subTitle: "Explore Vision",
        content: [
          { title: "Explore Apple Vision Pro", href: "/" },
          { title: "Guided Tour", href: "/" },
          { title: "Tech Specs", href: "/" },
        ],
      },
      {
        subTitle: "Shop Vision",
        content: [
          { title: "Buy Apple Vision Pro", href: "/" },
          { title: "Apple Vision Pro Accessories", href: "/" },
          { title: "Book a Demo", href: "/" },
          { title: "Financing", href: "/" },
        ],
      },
      {
        subTitle: "More from Vision",
        content: [
          { title: "Apple Vision Pro Support", href: "/" },
          { title: "AppleCare+", href: "/" },
          { title: "visionOS 2 Preview", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "AirPods",
    href: "https://www.apple.com/airpods/",
    content: [
      {
        subTitle: "Explore AirPods",
        content: [
          { title: "Explore All AirPods", href: "/" },
          { title: "AirPods Pro 2nd Generation", href: "/" },
          { title: "AirPods 2nd Generation", href: "/" },
          { title: "AirPods 3rd Generation", href: "/" },
          { title: "AirPods Max", href: "/" },
          { title: "Compare AirPods", href: "/" },
        ],
      },
      {
        subTitle: "Shop AirPods",
        content: [
          { title: "Buy AirPods", href: "/" },
          { title: "AirPods Accessories", href: "/" },
        ],
      },
      {
        subTitle: "More from AirPods",
        content: [
          { title: "AirPods Support", href: "/" },
          { title: "AppleCare+ for Headphones", href: "/" },
          { title: "Apple Music", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "TV & Home",
    href: "https://www.apple.com/tv-home/",
    content: [
      {
        subTitle: "Explore TV & Home",
        content: [
          { title: "Explore TV & Home", href: "/" },
          { title: "Apple TV 4K", href: "/" },
          { title: "HomePod", href: "/" },
          { title: "HomePod Mini", href: "/" },
        ],
      },
      {
        subTitle: "Shop TV & Home",
        content: [
          { title: "Buy Apple TV 4K", href: "/" },
          { title: "Buy HomePod", href: "/" },
          { title: "Buy HomePod Mini", href: "/" },
          { title: "Buy Siri Remote", href: "/" },
          { title: "TV & Home Accessories", href: "/" },
        ],
      },
      {
        subTitle: "More from TV & Home",
        content: [
          { title: "Apple TV Support", href: "/" },
          { title: "HomePod Support", href: "/" },
          { title: "AppleCare+", href: "/" },
          { title: "Apple TV App", href: "/" },
          { title: "Apple TV+", href: "/" },
          { title: "Home App", href: "/" },
          { title: "Apple Music", href: "/" },
          { title: "Siri", href: "/" },
          { title: "AirPlay", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Entertainment",
    href: "https://www.apple.com/entertainment/",
    content: [
      {
        subTitle: "Explore Entertainment",
        content: [
          { title: "Explore Entertainment", href: "/" },
          { title: "Apple One", href: "/" },
          { title: "Apple TV+", href: "/" },
          { title: "Apple Music", href: "/" },
          { title: "Apple Arcade", href: "/" },
          { title: "Apple Fitness+", href: "/" },
          { title: "Apple News+", href: "/" },
          { title: "Apple Podcast", href: "/" },
          { title: "Apple Books", href: "/" },
          { title: "App Store", href: "/" },
        ],
      },
      {
        subTitle: "Support",
        content: [
          { title: "Apple TV+ Support", href: "/" },
          { title: "Apple Music Support", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Accessories",
    href: "https://www.apple.com/shop/accessories/all",
    content: [
      {
        subTitle: "Shop Accessories",
        content: [
          { title: "Shop All Accessories", href: "/" },
          { title: "Mac", href: "/" },
          { title: "iPad", href: "/" },
          { title: "iPhone", href: "/" },
          { title: "Apple Watch", href: "/" },
          { title: "Apple Vision Pro", href: "/" },
          { title: "AirPods", href: "/" },
          { title: "TV & Home", href: "/" },
        ],
      },
      {
        subTitle: "Explore Accessories",
        content: [
          { title: "Made by Apple", href: "/" },
          { title: "Beats by Dr.Dre", href: "/" },
          { title: "AirTag", href: "/" },
        ],
      },
    ],
  },
  { 
    title: "Support",
    href: "https://support.apple.com/?cid=gn-ols-home-hp-tab",
    content: [
      {
        subTitle: "Explore Support",
        content: [
          { title: "Iphone", href: "/" },
          { title: "Mac", href: "/" },
          { title: "iPad", href: "/" },
          { title: "Watch", href: "/" },
          { title: "Apple Vision Pro", href: "/" },
          { title: "AirPods", href: "/" },
          { title: "Music", href: "/" },
          { title: "TV", href: "/" },
          { title: "Explore Support", href: "/" },
        ],
      },
      {
        subTitle: "Get Help",
        content: [
          { title: "Community", href: "/" },
          { title: "Check Coverage", href: "/" },
          { title: "Repair", href: "/" },
          { title: "Contact Us", href: "/" },
        ],
      },
      {
        subTitle: "Helpful Topics",
        content: [
          { title: "Get AppleCare+", href: "/" },
          { title: "Apple ID & Password", href: "/" },
          { title: "Billing & Subscriptions", href: "/" },
          { title: "Find My", href: "/" },
          { title: "Accessibility", href: "/" },
        ],
      },
    ],
  },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: '6.1" iPhone 15 Pro (All colors)',
    color: "#f2f5f3",
    img: allColorsImg,
  },
  {
    id: 2,
    title: `6.7” iPhone 15 Pro Max and
 6.1” iPhone 15 Pro in Natural Titanium`,
    color: "#8F8A81",
    img: yellowImg,
  },
  {
    id: 3,
    title: `6.7” iPhone 15 Pro Max and
 6.1” iPhone 15 Pro in Blue Titanium`,
    color: "#53596E",
    img: blueImg,
  },
  {
    id: 4,
    title: `6.7” iPhone 15 Pro Max and
 6.1” iPhone 15 Pro in White Titanium`,
    color: "#C9C8C2",
    img: whiteImg,
  },
  {
    id: 5,
    title: `6.7” iPhone 15 Pro Max and
 6.1” iPhone 15 Pro in Black Titanium`,
    color: "#454749",
    img: blackImg,
  },
];

export const footerPrincipalLinks = [
  {
    title: "Shop and Learn",
    content: [
      { title: "Store", href: "/"},
      { title: "Mac", href: "/"},
      { title: "iPad", href: "/"},
      { title: "iPhone", href: "/"},
      { title: "Watch", href: "/"},
      { title: "Vision", href: "/"},
      { title: "AirPods", href: "/"},
      { title: "TV & Home", href: "/"},
      { title: "AirTag", href: "/"},
      { title: "Accessories", href: "/"},
      { title: "Gift Cards", href: "/"},
    ],
  },
  {
    title: "Apple Wallet",
    content: [
      { title: "Wallet", href: "/"},
      { title: "Apple Card", href: "/"},
      { title: "Apple Pay", href: "/"},
      { title: "Apple Cash", href: "/"},
    ],
  },
  {
    title: "Account",
    content: [
      { title: "Manage Your Apple ID", href: "/"},
      { title: "Apple Store Account", href: "/"},
      { title: "iCloud.com", href: "/"},
    ],
  },
  {
    title: "Entertainment",
    content: [
      { title: "Apple One", href: "/"},
      { title: "Apple TV+", href: "/"},
      { title: "Apple Music", href: "/"},
      { title: "Apple Arcade", href: "/"},
      { title: "Apple Fitness+", href: "/"},
      { title: "Apple News+", href: "/"},
      { title: "Apple Podcast", href: "/"},
      { title: "Apple Books", href: "/"},
      { title: "App Store", href: "/"},
    ],
  },
  {
    title: "Apple Store",
    content: [
      { title: "Find a Store", href: "/"},
      { title: "Genius Bar", href: "/"},
      { title: "Today at Apple", href: "/"},
      { title: "Group Reservations", href: "/"},
      { title: "Apple Camp", href: "/"},
      { title: "Apple Store App", href: "/"},
      { title: "Certified Refurbished", href: "/"},
      { title: "Apple Trade In", href: "/"},
      { title: "Financing", href: "/"},
      { title: "Carrier Deals at Apple", href: "/"},
      { title: "Order Status", href: "/"},
      { title: "Shopping Help", href: "/"},
    ],
  },
  {
    title: "For Business",
    content: [
      { title: "Apple and Business", href: "/"},
      { title: "Shop for Business", href: "/"},
    ],
  },
  {
    title: "For Education",
    content: [
      { title: "Apple and Education", href: "/"},
      { title: "Shop for K-12", href: "/"},
      { title: "Shop for College", href: "/"},
    ],
  },
  {
    title: "For HealthCare",
    content: [
      { title: "Apple in HealthCare", href: "/"},
      { title: "Mac in HealthCare", href: "/"},
      { title: "Health on Apple Watch", href: "/"},
      { title: "Health Records on iPhone and iPad", href: "/"},
    ],
  },
  {
    title: "For Government",
    content: [
      { title: "Shop for Government", href: "/"},
      { title: "Shop for Veterans and Military", href: "/"},
    ],
  },
  {
    title: "Apple Values",
    content: [
      { title: "Accessibility", href: "/"},
      { title: "Education", href: "/"},
      { title: "Environment", href: "/"},
      { title: "Inclusion and Diversity", href: "/"},
      { title: "Privacy", href: "/"},
      { title: "Racial Equity and Justice", href: "/"},
      { title: "Supply Chain", href: "/"},
    ],
  },
  {
    title: "About Apple",
    content: [
      { title: "Newsroom", href: "/"},
      { title: "Apple Leadership", href: "/"},
      { title: "Career Opportunities", href: "/"},
      { title: "Investors", href: "/"},
      { title: "Ethics & Compliance", href: "/"},
      { title: "Events", href: "/"},
      { title: "Contact Apple", href: "/"},
    ],
  },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];