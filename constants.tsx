
import React from 'react';
import type { Pen, Testimonial, ProcessStep, CustomizationOption } from './types';
import { PenNibIcon, RulerIcon, PaletteIcon, PackageIcon, SelectIcon, QuoteIcon, ProductionIcon, DeliveryIcon } from './components/IconComponents';

export const PENS: Pen[] = [
  {
    id: 1,
    name: 'The Executive',
    description: 'A weighty, all-metal rollerball for a commanding presence.',
    material: 'Anodized Aluminum',
    imageUrl: 'https://picsum.photos/id/1071/600/600',
  },
  {
    id: 2,
    name: 'The Minimalist',
    description: 'Sleek, modern, and perfectly balanced for everyday elegance.',
    material: 'Matte Finish Brass',
    imageUrl: 'https://picsum.photos/id/367/600/600',
  },
  {
    id: 3,
    name: 'The Artisan',
    description: 'A classic twist-action ballpoint with sustainable wood accents.',
    material: 'Stainless Steel & Walnut',
    imageUrl: 'https://picsum.photos/id/24/600/600',
  },
  {
    id: 4,
    name: 'The Visionary',
    description: 'A futuristic design with a satisfying magnetic cap.',
    material: 'Polished Chrome',
    imageUrl: 'https://picsum.photos/id/431/600/600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "The quality of the pens exceeded our expectations. Our clients were thrilled to receive them as corporate gifts.",
    author: "Sarah Johnson",
    company: "Prestige Legal Group"
  },
  {
    id: 2,
    quote: "Aura Pens made the white-labeling process seamless. The final product truly represents our brand's commitment to excellence.",
    author: "Michael Chen",
    company: "Apex Financial"
  },
  {
    id: 3,
    quote: "From the initial quote to the final delivery, the service was impeccable. A truly premium experience.",
    author: "Emily Rodriguez",
    company: "Innovate Creative Co."
  }
];

export const CUSTOMIZATION_OPTIONS: CustomizationOption[] = [
    {
      id: 1,
      title: 'Precision Engraving',
      description: 'Laser-etch your logo or brand name with meticulous detail for a permanent, sophisticated mark.',
      icon: <PenNibIcon className="w-8 h-8 text-brand-gold" />
    },
    {
      id: 2,
      title: 'Custom Color Matching',
      description: 'Match the pen body to your exact brand colors using Pantone matching for perfect consistency.',
      icon: <PaletteIcon className="w-8 h-8 text-brand-gold" />
    },
    {
      id: 3,
      title: 'Premium Packaging',
      description: 'Choose from a range of elegant gift boxes and sleeves, all customizable with your branding.',
      icon: <PackageIcon className="w-8 h-8 text-brand-gold" />
    },
     {
      id: 4,
      title: 'Material & Finish',
      description: 'Select from matte, gloss, or metallic finishes, and various materials to suit your brand aesthetic.',
      icon: <RulerIcon className="w-8 h-8 text-brand-gold" />
    },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        id: 1,
        title: 'Select Your Pen',
        description: 'Browse our collection of premium pen models and choose the one that best fits your brand identity.',
        icon: <SelectIcon className="w-10 h-10 text-brand-dark group-hover:text-brand-gold transition-colors" />
    },
    {
        id: 2,
        title: 'Customize & Quote',
        description: 'Use our contact form to specify your customization needs—engraving, color, packaging—and get a detailed quote.',
        icon: <QuoteIcon className="w-10 h-10 text-brand-dark group-hover:text-brand-gold transition-colors" />
    },
    {
        id: 3,
        title: 'Approve & Produce',
        description: 'Once you approve the digital mockups, our artisans begin crafting your custom pens with precision and care.',
        icon: <ProductionIcon className="w-10 h-10 text-brand-dark group-hover:text-brand-gold transition-colors" />
    },
    {
        id: 4,
        title: 'Delivery',
        description: 'Your bespoke pens are inspected, beautifully packaged, and shipped directly to you, ready to impress.',
        icon: <DeliveryIcon className="w-10 h-10 text-brand-dark group-hover:text-brand-gold transition-colors" />
    }
]
