export interface IService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: IService[] = [
  {
    id: 1,
    title: "Residential moving",
    description: "From apartments to large homes, we handle every detail with care.",
    image: "/assets/images/service-1.jpg",
  },
  {
    id: 2,
    title: "Long-Distance moving",
    description: "From state-to-state to cross-country, we make big moves simple and stress-free.",
    image: "/assets/images/service-2.jpg",
  },
  {
    id: 3,
    title: "Commercial moving",
    description: "From small offices to large facilities, we move your business with speed and care.",
    image: "/assets/images/service-3.jpg",
  },
  {
    id: 4,
    title: "Packing & Unpacking",
    description: "From boxes to furniture, we handle packing and unpacking with precision.",
    image: "/assets/images/service-4.jpg",
  },
  {
    id: 5,
    title: "Furniture disassembly",
    description: "From large beds to office desks, we disassemble and reassemble with care.",
    image: "/assets/images/service-5.jpg",
  },
  {
    id: 6,
    title: "Specialty item handling",
    description: "From pianos to antiques, we move specialty items with expert care.",
    image: "/assets/images/service-6.jpg",
  },
]