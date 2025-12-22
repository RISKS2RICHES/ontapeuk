import React from 'react';

export interface Project {
  id: string;
  artist: string;
  song: string;
  youtubeId: string;
  thumbnail?: string;
}

export interface Service {
  title: string;
  description: string;
  details: string; // Added for the expandable section
  icon: React.ReactNode;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  instagram: string;
  songName: string;
  budget: string;
  location: string;
  deadline: string;
  concept: string;
  referenceLinks: string;
  notes: string;
}

export enum BudgetOption {
  UNDER_500 = "Under £500",
  UNDER_1000 = "Under £1,000",
  OVER_1000 = "Over £1,000"
}