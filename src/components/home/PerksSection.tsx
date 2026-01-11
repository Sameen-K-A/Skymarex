const perks = [
  {
    number: "1",
    title: "24/7 Customer Support",
    description: "Get help anytime, day or night",
  },
  {
    number: "2",
    title: "Competitive Pricing",
    description: "Affordable rates with no hidden fees",
  },
  {
    number: "3",
    title: "On-Time Delivery",
    description: "Your packages arrive on time.",
  },
  {
    number: "4",
    title: "Global Network",
    description: "Ship to over 200 countries worldwide",
  },
]

export default function PerksSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Perks of Shipping With Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            When you ship with Shipit, things just work. No drama, no stress, just reliable service you can count on every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-foreground rounded-xl overflow-hidden flex"
            >
              <div className="w-14 bg-primary flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold">{perk.number}</span>
              </div>
              <div className="p-5">
                <h3 className="text-base md:text-lg font-medium text-background">
                  {perk.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}