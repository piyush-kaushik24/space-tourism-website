export type Destination = {
  name: string;
  images: ImageSet;
  description: string;
  distance: string;
  travel: string;
};

type ImageSet = {
  png: string;
  webp: string;
};

export type CrewMember = {
  name: string;
  images: CrewImages;
  role: string;
  bio: string;
};

type CrewImages = {
  png: string;
  webp: string;
};

export type Technology = {
  name: string;
  images: TechnologyImages;
  description: string;
};

type TechnologyImages = {
  portrait: string;
  landscape: string;
};

export type SpaceData = {
  destinations: Destination[]; 
  crew: CrewMember[];
  technology: Technology[];
};
