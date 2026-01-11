import Image from "next/image"
import { services, IService } from "@/constants/services"

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <div className="group bg-muted/50 rounded-2xl p-4 pb-5">
      <div className="relative aspect-5/3 rounded-xl overflow-hidden bg-muted-foreground/10 mb-4">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 px-2">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed px-2">
        {service.description}
      </p>
    </div>
  )
}

export default function ServicesGridSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 bg-background">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
          Our services
        </h1>
        <p className="text-muted-foreground font-medium max-w-md mx-auto">
          We offer a full range of moving solutions designed to make your relocation seamless, stress-free, and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}