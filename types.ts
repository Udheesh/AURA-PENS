
export interface Pen {
  id: number;
  name: string;
  description: string;
  material: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CustomizationOption {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}
