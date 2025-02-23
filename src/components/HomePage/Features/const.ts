export type Feature = {
  id: number;
  title: string;
  description: string;
  cta: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Getting started",
    description: "Everything you need to know to get started with Zoovu",
    cta: "View articles",
  },
  {
    id: 2,
    title: "Masterclasses",
    description: "Catch up on our best practice masterclasses",
    cta: "Watch videos",
  },
  {
    id: 3,
    title: "Pioneers",
    description: "Explore Zoovu courses, lessons, and video trainings",
    cta: "Go to trainings",
  },
  {
    id: 4,
    title: "What’s new",
    description: "Find out about Zoovu's latest updates and improvements",
    cta: "See updates",
  },
];
