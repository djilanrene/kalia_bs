
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm border-b border-border-default z-50 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold font-serif text-text-heading">
          Kalia <span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium uppercase hover:text-primary transition-colors">Accueil</Link>
          <Link href="/prestations" className="text-sm font-medium uppercase hover:text-primary transition-colors">Prestations</Link>
          <Link href="/#gallery" className="text-sm font-medium uppercase hover:text-primary transition-colors">Galerie</Link>
          <Link href="/#about" className="text-sm font-medium uppercase hover:text-primary transition-colors">Le Salon</Link>
          <Link href="/contact" className="text-sm font-medium uppercase hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild>
                <Link href="/contact">Prendre RDV</Link>
            </Button>
            <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
