import { Facebook, Github, Home, Instagram, Twitter } from "lucide-react";

export const footerData = {
  socialLinks: [
    { name: "Twitter", url: "https://twitter.com", icon: <Twitter /> },
    { name: "Facebook", url: "https://facebook.com", icon: <Facebook /> },
    { name: "Instagram", url: "https://instagram.com", icon: <Instagram /> },
    { name: "GitHub", url: "https://github.com", icon: <Github /> },
  ],
  links: [
    {
      title: "Company",
      items: [
        { name: "About", url: "/about" },
        { name: "Features", url: "/features" },
        { name: "Works", url: "/works" },
        { name: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Help",
      items: [
        { name: "Customer Support", url: "/about" },
        { name: "Delivery Details", url: "/features" },
        { name: "Terms & Conditions", url: "/works" },
        { name: "Privacy Policy", url: "/careers" },
      ],
    },
    {
      title: "FAQ",
      items: [
        { name: "Account", url: "/about" },
        { name: "Manage Delivery", url: "/features" },
        { name: "Orders", url: "/works" },
        { name: "Payments", url: "/careers" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Free eBook", url: "/about" },
        { name: "Development Tutorial", url: "/features" },
        { name: "How To - Blog", url: "/works" },
        { name: "YouTube Playlist", url: "/careers" },
      ],
    },
  ],
  year: new Date().getFullYear(),
};
