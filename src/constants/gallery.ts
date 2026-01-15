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
  { img: "/images/about/hero/img1.jpg", id: 3 },
  { img: "/images/about/hero/img2.jpg", id: 4 },
  { img: "/images/about/hero/img1.jpg", id: 5 },
  { img: "/images/about/hero/img2.jpg", id: 6 },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { img: "/images/about/team/team1.jpg", name: "John Carter", role: "Lead Mover", id: 1 },
  { img: "/images/about/team/team1.jpg", name: "Mike Dawson", role: "Packing Specialist", id: 2 },
  { img: "/images/about/team/team1.jpg", name: "Rachel Lee", role: "Logistics Coordinator", id: 3 },
  { img: "/images/about/team/team1.jpg", name: "James Miller", role: "Move Coordinator", id: 4 },
]

export const HOME_GALLERY_IMAGES: GalleryImage[] = [
  { img: "/images/home/hero/img1.jpg", id: 1 },
  { img: "/images/home/hero/img1.jpg", id: 2 },
  { img: "/images/home/hero/img1.jpg", id: 3 },
  { img: "/images/home/hero/img1.jpg", id: 4 },
  { img: "/images/home/hero/img1.jpg", id: 5 },
  { img: "/images/home/hero/img1.jpg", id: 6 },
  { img: "/images/home/hero/img1.jpg", id: 7 },
  { img: "/images/home/hero/img1.jpg", id: 8 },
  { img: "/images/home/hero/img1.jpg", id: 9 },
  { img: "/images/home/hero/img1.jpg", id: 10 },
  { img: "/images/home/hero/img1.jpg", id: 11 },
  { img: "/images/home/hero/img1.jpg", id: 12 },
]