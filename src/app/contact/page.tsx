
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">Contactez-nous</h1>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-serif font-bold mb-2 text-primary">Rendez-nous visite</h3>
            <p>128 Rue de la Beauté<br/>Quartier Résidentiel, Lomé</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-serif font-bold mb-2 text-primary">Horaires</h3>
            <p>Lun - Sam : 09h00 - 19h00<br/>Dimanche : Fermé</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-2 text-primary">Contact</h3>
            <p>Tél : +228 90 00 00 00<br/>Email : hello@kaliastudio.com</p>
          </div>
        </div>
        <div className="bg-white border border-border-default rounded-md shadow-lg p-8">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1">Nom complet</label>
              <input type="text" id="name" className="w-full p-2 border border-border-default rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-1">Téléphone</label>
              <input type="tel" id="phone" className="w-full p-2 border border-border-default rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-medium text-text-muted mb-1">Prestation souhaitée</label>
              <select id="service" className="w-full p-2 border border-border-default rounded-md"></select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1">Message (Optionnel)</label>
              <textarea id="message" rows={4} className="w-full p-2 border border-border-default rounded-md"></textarea>
            </div>
            <Button type="submit" className="w-full">Envoyer la demande</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
