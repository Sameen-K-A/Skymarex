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
  { img: "/assets/images/hero-1.jpg", id: 1 },
  { img: "/assets/images/hero-2.jpg", id: 2 },
  { img: "/assets/images/hero-3.jpg", id: 3 },
  { img: "/assets/images/hero-4.jpg", id: 4 },
  { img: "/assets/images/hero-5.jpg", id: 5 },
  { img: "/assets/images/hero-6.jpg", id: 6 },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { img: "/assets/images/team-1.jpg", name: "John Carter", role: "Lead Mover", id: 1 },
  { img: "/assets/images/team-2.jpg", name: "Mike Dawson", role: "Packing Specialist", id: 2 },
  { img: "/assets/images/team-3.jpg", name: "Rachel Lee", role: "Logistics Coordinator", id: 3 },
  { img: "/assets/images/team-4.jpg", name: "James Miller", role: "Move Coordinator", id: 4 },
]

export const HOME_GALLERY_IMAGES: GalleryImage[] = [
  { img: "/assets/images/home-1.jpg", id: 1 },
  { img: "/assets/images/home-2.jpg", id: 2 },
  { img: "/assets/images/home-3.jpg", id: 3 },
  { img: "/assets/images/home-4.jpg", id: 4 },
  { img: "/assets/images/home-5.jpg", id: 5 },
  { img: "/assets/images/home-6.jpg", id: 6 },
  { img: "/assets/images/home-7.jpg", id: 7 },
  { img: "/assets/images/home-8.jpg", id: 8 },
  { img: "/assets/images/home-9.jpg", id: 9 },
  { img: "/assets/images/home-10.jpg", id: 10 },
  { img: "/assets/images/home-11.jpg", id: 11 },
  { img: "/assets/images/home-12.jpg", id: 12 },
]