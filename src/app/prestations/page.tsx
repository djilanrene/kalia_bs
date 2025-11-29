
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data"; // Assumed data source
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Nos Prestations</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">Découvrez notre carte de soins conçue pour sublimer chaque aspect de votre beauté.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-border-default rounded-md shadow-sm hover:shadow-md transition-shadow">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
              <p className="text-primary font-semibold mb-3">{service.price}</p>
              <p className="text-text-muted mb-4">{service.short}</p>
              <Button variant="outline" asChild>
                <Link href={`/prestations/${service.id}`}>Voir le détail</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

