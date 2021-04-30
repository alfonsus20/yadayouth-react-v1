export const MENUS = [
  { name: "Home", pathname: "/", hash: "", socmed: false },
  { name: "About", pathname: "/", hash: "about", socmed: false },
  { name: "Webinar", pathname: "/webinar", hash: "", socmed: false },
  { name: "Donate", pathname: "/donate", hash: "", socmed: false },
  { name: "Contact", pathname: "/", hash: "contacts", socmed: false },
];

export const SOCMED = [
  {
    name: "yadayouth.id",
    link: "https://www.instagram.com/yadayouth.id/",
    icon: "fa fa-instagram",
    socmed: true,
  },
  {
    name: "company/yada-youth",
    link: "https://www.linkedin.com/company/yada-youth/",
    icon: "fa fa-linkedin",
    socmed: true,
  },
  {
    name: "yadayouth.id",
    link: "https://www.tiktok.com/@yadayouth.id?",
    icon: "fab fa-tiktok",
    socmed: true,
  },
];

export const CARD_CONTENTS = [
  {
    image: "/pictures/donation.png",
    title: "Open Donations",
    body:
      "We are open for donations with all profits will be given to the children in Indonesia",
    link: "/donate",
  },
  {
    image: "/pictures/comm_serv.png",
    title: "Community Services",
    body:
      "We conduct voluntary work to educate, distribute food, and empower children",
    link: "/",
  },
  {
    image: "/pictures/webinars.png",
    title: "Webinars",
    body:
      "We provides self development webinars to help fund out community service",
    link: "/webinar",
  },
];

export const DONATION_GOALS = [
  "Help Distribute nutritions food supplies to children with malnutrition to support their recovery",
  "Assist families living in poverty in the form of stipends to support and improve their livehood",
  "Support the development of proper sanitation and educational infrastructures in villages and rural areas",
  "Provide access to educational services for families in regards to child stunting to minimize stunted growth in Indonesia",
];

export const SPEAKERS = [
  {
    name: "Yosephine Devina Wijaya",
    image: "/pictures/speaker1.jpg",
    description:
      "Key Account Manager at P&G Top 6 HSBC/HKU Asia Pacific Business Case Competition, Hongkong",
  },
  {
    name: "Yacinta Shafira Pradana",
    image: "/pictures/speaker2.jpg",
    description: "Founder Women Beyond Indonesia YLI Wave 12",
  },
];

export const TALKING_POINTS = [
  {
    front: "SELF DEVELOPMENT",
    back: [
      "Importance of Self-Development",
      "Overcoming Lack of Confidence and Fear of Public Speaking",
      "How to be Outstanding: Discovering and Developing Your Self Potential",
    ],
  },
  {
    front: "SELF MOVEMENT",
    back: [
      "Importance of Social Movement",
      "Helping Others with Useful Social Movements",
      "Examples of Applicable and Beneficial Social Movements + Tips and Tricks",
      "Tackling Day-to-Day Problems in Social Movements",
    ],
  },
];