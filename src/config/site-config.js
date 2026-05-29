import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export const siteConfig = {
  profile: {
    name: "Srijit Dey",
    bio: "Web Developer | Student",
    avatar: "https://zeropse.org/me.webp",
  },
  seo: {
    title: "Links | Srijit Dey",
    description:
      "Connect with Srijit Dey. Web Developer and currently a student.",
    url: "https://zeropse.org",
    ogImage: "https://zeropse.org/og-image.png",
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
      url: "mailto:hello@example.com",
      icon: IconMail,
    },
  ],
  links: [
    {
      label: "My Portfolio",
      url: "https://zeropse.org",
      description: "Check out my latest projects and case studies.",
      highlight: true,
    },
    {
      label: "Read my Blog",
      url: "https://blog.zeropse.org",
      description: "Insights, tutorials, and stories from my journey in tech.",
      highlight: false,
    },
    {
      label: "YouTube Channel",
      url: "https://youtube.com/@zeropse",
      description: "Just some videos I made. Subscribe if you like them!",
      highlight: false,
    },
  ],
};
