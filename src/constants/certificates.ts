export interface ICertificate {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const certificates: ICertificate[] = [
  {
    id: 1,
    title: "Certificate 1",
    description: "From apartments to large homes, we handle every detail with care.",
    image: "/images/home/certificate/certificate1.jpg",
  },
  {
    id: 2,
    title: "Certificate 2",
    description: "From apartments to large homes, we handle every detail with care.",
    image: "/images/home/certificate/certificate1.jpg",
  }
]