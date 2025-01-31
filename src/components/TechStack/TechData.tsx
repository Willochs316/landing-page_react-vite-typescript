import Images from "@assets/images";
import { Svgs } from "@assets/svgs";

// IT & Information Stack
export const techStackItems = [
  {
    src: Images.shopify,
    title: "Shopify Developer",
    extraClass: "shopify-developer-mobile",
  },
  {
    src: Images.magento,
    title: "Magento Developer",
    extraClass: "tech-stack-item",
  },
  { src: Images.data, title: "Data Scientist", extraClass: "tech-stack-item" },
  {
    src: Images.webflow,
    title: "Webflow Developer",
    extraClass: "tech-stack-item",
  },
  {
    src: Images.dot,
    title: "Dot Net Developer",
    extraClass: "tech-stack-item",
  },
  {
    button: (
      <button className="next-button">
        <Svgs.ChevronRight />
      </button>
    ),
    extraClass: "tech-stack-item",
    buttonClass: "tech-btn-class",
  },
];

// Design & Creative Stack
export const designTechStackItems = [
  {
    button: (
      <button className="prev-button">
        <Svgs.ChevronLeft />
      </button>
    ),
    extraClass: "prev-button-mobile",
    buttonClass: "tech-btn-class",
  },
  { src: Images.figma, title: "UX Designer", extraClass: "tech-stack-item" },
  {
    src: Images.photoShop,
    title: "Graphics Designer",
    extraClass: "tech-stack-item",
  },
  {
    src: Images.ai,
    title: "Illustration Artist",
    extraClass: "tech-stack-item",
  },
  { src: Images.unreal, title: "Unreal Engine", extraClass: "tech-stack-item" },
  { src: Images.cinema, title: "Cinema 4D", extraClass: "tech-stack-item" },
];

export const rateItems = [
  { src: Images.medal, text: "989 Skills" },
  { src: Images.category, text: "45 Sub-Categories" },
  { src: Images.profile, text: "1011 Profiles" },
];
