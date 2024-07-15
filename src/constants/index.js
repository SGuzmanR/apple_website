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
  },
  { 
    title: "Mac",
  },
  { 
    title: "iPad",
  },
  { 
    title: "iPhone",
  },
  { 
    title: "Watch",
  },
  { 
    title: "Vision",
  },
  { 
    title: "Airpods",
  },
  { 
    title: "TV & Home",
  },
  { 
    title: "Entretainment",
  },
  { 
    title: "Support",
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

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];