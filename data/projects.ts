// EDIT HERE - Add or modify your projects
export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  reviews?: Review[];
  isMobile?: boolean;
  mobileImages?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NexGen",
    description: "A premier software engineering agency providing technology services and custom software development. We bridge the gap between physical operations and high-scale digital ecosystems by building intelligent solutions that optimize enterprise data flow.",
    image: "/nexgen.png",
    tags: ["Next.js", "Tailwind", "TS"],
    liveUrl: "https://nexgen-tau-weld.vercel.app/",
    githubUrl: "https://github.com",
    reviews: [{ user: "Client A", comment: "Outstanding modern design and perfectly responsive.", rating: 5 }],
  },
  {
    id: "2",
    title: "ComLab Connect",
    description: "A comprehensive application built for universities to replace manual laboratory management. It streamlines operations, allowing users to effortlessly book facilities, request equipment, and interact with the campus laboratory network.",
    image: "/comlab.png",
    tags: ["React", "Node.js", "Express"],
    liveUrl: "https://comlab-beta.vercel.app/",
    githubUrl: "https://github.com",
    reviews: [{ user: "Reviewer", comment: "Very clean minimalist approach to complex data.", rating: 4 }],
  },
  {
    id: "3",
    title: "Daloy",
    description: "A complete, modern social media platform built for communities. Daloy centralizes communication with a deep personalized feed, dedicated community spaces, and high-definition group video calls with built-in host controls.",
    image: "/daloy.png",
    tags: ["Laravel", "PostgreSQL", "Docker"],
    liveUrl: "https://daloy-api-production.up.railway.app/",
    githubUrl: "https://github.com",
    reviews: [{ user: "Dev Team", comment: "Rock solid API performance under heavy load.", rating: 5 }],
  },
  {
    id: "4",
    title: "Zylo",
    description: "A premium e-commerce web system designed to showcase collections gracefully. It features an elegant, high-performance interface for exploring fashion collections, viewing lookbooks, and delivering a fluid shopping experience.",
    image: "/zylo.png",
    tags: ["Vue", "Tailwind", "Firebase"],
    liveUrl: "https://zylo-nextgen.vercel.app",
    githubUrl: "https://github.com",
    reviews: [{ user: "Client X", comment: "The UI scaling is perfect on every single device.", rating: 5 }],
  },
  {
    id: "5",
    title: "Libertad NHS Portal",
    description: "An integrated school management portal for Libertad National High School. It acts as a secure financial and student management system, featuring automated PTA fee verification via Student LRN and official school guidelines.",
    image: "/libertad.png",
    tags: ["HTML", "CSS", "Vanilla JS"],
    liveUrl: "https://libertad-nhs.vercel.app",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Molle",
    description: "A comprehensive budget and loan tracking application. Molle acts as a reliable platform for managing personal loans between individuals, allowing both lenders and borrowers to meticulously monitor every transaction while serving as a robust personal budget tracker.",
    image: "/molle/6d0899e9-236d-47b3-96d3-b1c2b487fcb5.jpg",
    tags: ["React Native", "Expo", "Firebase", "Mobile"],
    isMobile: true,
    mobileImages: [
      "/molle/6d0899e9-236d-47b3-96d3-b1c2b487fcb5.jpg",
      "/molle/70cefe68-e54d-4ea1-b651-f3dd5549334f.jpg",
      "/molle/8efaeafa-8b66-4e97-a1af-b77ea342df78.jpg",
      "/molle/eb7cc0b5-2adf-4468-8cd7-eb31e0e43055.jpg"
    ],
    reviews: [{ user: "User", comment: "Makes tracking personal loans with friends so much easier.", rating: 5 }],
  },
  {
    id: "7",
    title: "Pintig Butuan",
    description: "A centralized news aggregation platform dedicated exclusively to Butuan City. Pintig Butuan pulls and consolidates localized news and updates from various sources, ensuring citizens stay informed about everything happening within their city in real-time.",
    image: "/pintig/2d721f89-d777-4d7e-b5a7-be172cdc51fd.jpg",
    tags: ["React Native", "Expo", "CMS", "Mobile"],
    isMobile: true,
    mobileImages: [
      "/pintig/52b3c8eb-886a-4736-8058-da6c7a3752e4 (1).jpg",
      "/pintig/52b3c8eb-886a-4736-8058-da6c7a3752e4.jpg",
      "/pintig/91195a57-8df5-4b64-be1e-0135d9d602ff.jpg",
      "/pintig/c67305d6-f6d6-4847-8bfb-6eda89c9971a.jpg",
      "/pintig/d59b9056-fc41-4bd2-98d1-92b3a6dfccdb.jpg"
    ],
    reviews: [{ user: "Citizen", comment: "Great way to stay connected to local events.", rating: 5 }],
  }
];
