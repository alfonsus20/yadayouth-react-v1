import DonationImg from "../assets/donation.png";
import WebinarsImg from "../assets/webinars.png";
import CommServImg from "../assets/comm_serv.png";

export const MENUS = [
  { name: "Home", pathname: "/", hash: "home" },
  { name: "About", pathname: "/", hash: "about" },
  { name: "Services", pathname: "/", hash: "services" },
  { name: "Donate", pathname: "/donate", hash: "donate" },
  { name: "Contact", pathname: "/", hash: "contacts" },
];

export const SOCMED = [
  { name: "yadayouth.id", link: "", icon: "fa fa-instagram" },
  {
    name: "company/yada-youth",
    link: "",
    icon: "fa fa-linkedin",
  },
  { name: "yadayouth.id", link: "", icon: "fab fa-tiktok" },
];

export const CARD_CONTENTS = [
  {
    image: DonationImg,
    title: "Open Donations",
    body:
      "We are open for donations with all profits will be given to the children in Indonesia",
  },
  {
    image: CommServImg,
    title: "Community Services",
    body:
      "We conduct voluntary work to educate, distribute food, and empower children",
  },
  {
    image: WebinarsImg,
    title: "Webinars",
    body:
      "We provides self development webinars to help fund out community service",
  },
];

export const DONATION_GOALS = [
  "Help Distribute nutritions food supplies to children with malnutrition to support their recovery",
  "Assist families living in poverty in the form of stipends to support and improve their livehood",
  "Support the development of proper sanitation and educational infrastructures in villages and rural areas",
  "Provide access to educational services for families in regards to child stunting to minimize stunted growth in Indonesia",
];
