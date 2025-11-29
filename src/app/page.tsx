
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Révélez votre éclat naturel</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">L'alliance de l'expertise technique et du bien-être absolu au cœur de Lomé.</p>
          <Button size="lg" asChild>
            <Link href="/prestations">Découvrir nos soins</Link>
          </Button>
        </div>
      </section>
      <section id="about" className="py-20 bg-background-offwhite">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80" alt="Fondatrice" className="rounded-md shadow-lg" />
                </div>
                <div>
                    <span className="text-primary font-medium">Notre Histoire</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">L'Excellence Kalia</h2>
                    <p className="mb-4">Fondé en 2020, Kalia Beauty Studio est né d'une vision simple : la beauté ne doit pas être un masque, mais une révélation.</p>
                    <p className="italic text-text-muted">"Je voulais créer un espace à Lomé où le temps s'arrête. Un lieu où chaque femme peut se reconnecter avec elle-même tout en bénéficiant des standards internationaux."</p>
                    <p className="font-semibold mt-2">- La Fondatrice</p>
                </div>
            </div>
        </div>
    </section>
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Notre Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
            <div className="aspect-square rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=400" alt="gallery image" className="w-full h-full object-cover"/></div>
          </div>
        </div>
      </section>
    </>
  );
}
