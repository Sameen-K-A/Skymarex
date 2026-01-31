export interface GalleryImage {
  img: string
  id: number
}

export interface TeamMember {
  img: string
  name: string
  role: string
  id: number
}

export const ABOUT_GALLERY_IMAGES: GalleryImage[] = [
  { img: "/images/about/hero/img1.jpg", id: 1 },
  { img: "/images/about/hero/img2.jpg", id: 2 },
  { img: "/images/about/hero/img3.jpg", id: 3 },
  { img: "/images/about/hero/img4.jpg", id: 4 },
  { img: "/images/about/hero/img5.jpg", id: 5 },
  { img: "/images/about/hero/img6.jpg", id: 6 },
  { img: "/images/about/hero/img7.jpg", id: 7 },
  { img: "/images/about/hero/img8.jpg", id: 8 },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { img: "/images/about/team/Business-Development-Manager.jpeg", name: "John Carter", role: "Lead Mover", id: 1 },
  { img: "/images/about/team/Operations-Manager.jpg.jpeg", name: "Mike Dawson", role: "Packing Specialist", id: 2 },
  { img: "/images/about/team/Operations-Team-Leader.jpg", name: "Rachel Lee", role: "Logistics Coordinator", id: 3 },
  { img: "/images/about/team/Strategic-Partner.png", name: "James Miller", role: "Move Coordinator", id: 4 },
]

export const HOME_GALLERY_IMAGES: GalleryImage[] = [
  { img: "/images/home/hero/img1.jpg", id: 1 },
  { img: "/images/home/hero/img2.jpg", id: 2 },
  { img: "/images/home/hero/img3.jpg", id: 3 },
  { img: "/images/home/hero/img4.jpg", id: 4 },
  { img: "/images/home/hero/img5.jpg", id: 5 },
  { img: "/images/home/hero/img6.jpg", id: 6 },
  { img: "/images/home/hero/img7.jpg", id: 7 },
  { img: "/images/home/hero/img8.jpg", id: 8 },
  { img: "/images/home/hero/img9.jpg", id: 9 },
  { img: "/images/home/hero/img10.jpg", id: 10 },
  { img: "/images/home/hero/img11.jpg", id: 11 },
  { img: "/images/home/hero/img12.jpg", id: 12 },
]