
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-text-heading text-white py-8 text-center">
      <div className="container mx-auto">
        <div className="text-2xl font-bold font-serif text-white mb-4">
          Kalia <span className="text-primary">.</span>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <Link href="/prestations" className="text-sm text-gray-400 hover:text-primary transition-colors">Services</Link>
          <Link href="/#gallery" className="text-sm text-gray-400 hover:text-primary transition-colors">Galerie</Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</Link>
        </div>
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Kalia Beauty Studio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
