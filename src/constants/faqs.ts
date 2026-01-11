export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: IFAQ[] = [
  {
    id: 1,
    question: "What areas do you serve?",
    answer: "We provide local and long-distance moving services across the city and throughout the country. Contact us to confirm availability in your location.",
  },
  {
    id: 2,
    question: "How much notice do I need to give before booking a move?",
    answer: "We recommend booking at least 2-4 weeks in advance for local moves and 4-6 weeks for long-distance moves. However, we do accommodate last-minute requests when possible.",
  },
  {
    id: 3,
    question: "Do you offer packing and unpacking services?",
    answer: "Yes, we offer full packing and unpacking services. Our team uses high-quality materials to ensure your belongings are protected during transit.",
  },
  {
    id: 4,
    question: "Are my belongings insured during the move?",
    answer: "Yes, we provide basic coverage for all moves. Additional insurance options are available for high-value items. Ask our team for more details.",
  },
  {
    id: 5,
    question: "How long will my move take?",
    answer: "Move duration depends on factors like distance, volume of items, and accessibility. We provide estimated timeframes during the quote process.",
  },
]
