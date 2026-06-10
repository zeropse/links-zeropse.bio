import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconBrandLinkedin,
  IconBriefcase,
  IconFileCv,
  IconWriting,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const siteConfig = {
  theme: {
    background: "bg-gradient-to-br from-background via-muted to-background",
  },
  profile: {
    name: "Srijit Dey",
    bio: "Web Developer | Student",
    avatar: "https://zeropse.me/me.webp",
  },
  seo: {
    title: "Socials | Srijit Dey",
    description:
      "Connect with Srijit Dey. Web Developer and currently a student.",
    url: "https://zeropse.me",
    ogImage: "https://zeropse.me/og-image.png",
    twitterHandle: "@zer0pse",
  },
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/zeropse",
      icon: IconBrandInstagram,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/zer0pse",
      icon: IconBrandX,
    },
    {
      name: "GitHub",
      url: "https://github.com/zeropse",
      icon: IconBrandGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/zeropse",
      icon: IconBrandLinkedin,
    },
    {
      name: "Email",
      url: "mailto:deysrijit2.work@gmail.com",
      icon: IconMail,
    },
  ],
  links: [
    {
      label: "My Portfolio",
      url: "https://zeropse.me",
      description: "Check out my latest projects and case studies.",
      highlight: true,
      icon: IconBriefcase,
    },
    {
      label: "Resume",
      url: "https://zeropse.me/Srijit_Dey_Web_Developer.pdf",
      description: "View or download my resume.",
      highlight: false,
      icon: IconFileCv,
    },
    {
      label: "Read my Blog",
      url: "https://blog.zeropse.me",
      description: "Insights, tutorials, and stories from my journey in tech.",
      highlight: false,
      icon: IconWriting,
    },
    {
      label: "YouTube Channel",
      url: "https://youtube.com/@zeropse",
      description: "Just some videos I made. Subscribe if you like them!",
      highlight: false,
      icon: IconBrandYoutube,
    },
  ],
  footer: {
    text: "zeropse | Srijit Dey. All rights reserved.",
  },
};
