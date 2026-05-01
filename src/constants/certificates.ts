export interface ICertificate {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const certificates: ICertificate[] = [
  {
    id: 1,
    title: "GCAA-Approved DGR Certification",
    description: "Awarded to Midhun Thottappurath Manoharan, demonstrating certified expertise in the safe handling, acceptance, and regulatory compliance of dangerous goods shipments in aviation logistics.",
    image: "/images/home/certificates/certificate01.png",
  },
  {
    id: 2,
    title: "GCAA-Approved DGR Certification",
    description: "Awarded to Rithujith Mohan, demonstrating certified expertise in the safe handling, acceptance, and regulatory compliance of dangerous goods shipments in aviation logistics.",
    image: "/images/home/certificates/certificate02.png",
  }
]