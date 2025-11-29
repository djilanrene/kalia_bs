
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import Link from "next/link";
import { notFound } from 'next/navigation';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id.toString() === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
        <Button variant="outline" asChild className="mb-8">
            <Link href="/prestations">← Retour</Link>
        </Button>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <img src={service.img} alt={service.title} className="w-full h-auto rounded-md shadow-lg" />
        <div>
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-3 py-1 rounded-full mb-4">Durée : {service.duration}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{service.title}</h1>
          <p className="text-2xl text-primary font-semibold mb-6">{service.price}</p>
          <p className="text-lg text-text-body mb-8">{service.desc}</p>
          <Button size="lg" asChild>
            <Link href="/contact">Réserver ce soin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    return services.map(service => ({ slug: service.id.toString() }))
}
