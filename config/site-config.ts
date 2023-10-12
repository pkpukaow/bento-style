export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EquipmentsItem = {
  title: string;
  link: string;
};
export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonSecondaryText?: string;
  buttonLink?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EquipmentsItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Ratchapon Lovitayanon",
    username: "@pkpukaow",
    description:
      "Learn how to build a full-stack, multilingual and high performant blog website with NextJS 13.4.",
    icon: "linkedin",
    color: "#0078d4",
    buttonTitle: "Connect",
    buttonSecondaryText: "",
    buttonLink:
      "https://www.linkedin.com/in/ratchapon-lovitayanon",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@pkpukaow",
    buttonTitle: "Join",
    buttonLink: "https://discord.gg/WxNEQD499g",
    buttonSecondaryText: "66",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@pkpukaow",
    buttonTitle: "Follow",
    buttonSecondaryText: "11",
    buttonLink: "https://github.com/pkpukaow",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Favorite Anime",
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/spy-family-anya.jpg",
    equipments: [
      {
        title: "Spy x Family",
        link: "https://myanimelist.net/anime/50265/Spy_x_Family?q=spy%20&cat=anime",
      },
      {
        title: "Toaru Kagaku no Railgun",
        link: "https://myanimelist.net/anime/6213/Toaru_Kagaku_no_Railgun?q=railgun&cat=anime"
      },
      {
        title: "Lycoris Recoil",
        link: "https://myanimelist.net/anime/50709/Lycoris_Recoil?q=Lyco&cat=anime",
      },
      {
        title: "Kakegurui",
        link: "https://myanimelist.net/anime/34933/Kakegurui?q=kakegu&cat=anime",
      },
      {
        title: "Steins;Gate",
        link: "https://myanimelist.net/anime/9253/Steins_Gate",
      },
      {
        title: "Bocchi the Rock!",
        link: "https://myanimelist.net/anime/47917/Bocchi_the_Rock",
      },
      {
        title: "Sword Art Online",
        link: "https://myanimelist.net/anime/11757/Sword_Art_Online",
      },
      {
        title: "The Detective is already Dead!",
        link: "https://myanimelist.net/anime/46471/Tantei_wa_Mou_Shindeiru",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Facebook",
    icon: "facebook",
    username: "Pukaow Munmee",
    description: "Newbie developer. I'm enthusiastic about learning. I'm looking for new tools and technologies to broaden my skills.",
    color: "#3F51B5",
    buttonTitle: "Add Friend",
    buttonLink: "https://www.facebook.com/pk.pukaow/",
    buttonSecondaryText: "",
  },
  {
    layout: "2x1",
    type: "project",
    title: "PK Bento Profile",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/pkpukaow/bento-style",
    stars: 60,
  },
  {
    layout: "2x1",
    type: "project",
    title: "Realtime Messenger",
    icon: "github",
    stars: 35,
    color: "#070707",
    buttonLink: "https://github.com/pkpukaow/realtime-messenger",
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Supabase Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  // },
  {
    layout: "2x1",
    type: "project",
    title: "Pokedex",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/pkpukaow/pokedex-nextjs",
    stars: 28,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@pukaoweiei",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/PUKAOWEIEI",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Full-stack Developer / I'm currently interest in NextJS.",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Tesla Clone",
    icon: "github",
    stars: 12,
    color: "#070707",
    buttonLink: "https://github.com/pkpukaow/tesla-clone",
  },
];

export const siteConfig = {
  creator: "Ratchapon Lovitayanon",
  title: "Fullstack Developer",
  bio: "I'm a fullstack developer who love to code and learn new things.",
  location: "Bangkok, Thailand",
  locationLink: "https://goo.gl/maps/Ecj1uVfPoLditmZC9",
  email: "lovi.ratchapon@gmail.com",
  items: GridItems,
} as const;
