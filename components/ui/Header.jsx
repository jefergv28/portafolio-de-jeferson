import Link from "next/link";

import { Button } from "./button";
//componnetes
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/Logo.svg" alt="Logo" width={50} height={50} />
          <h1 className="text-4xl font-semibold">
            Jejerson <span className="text-accent">.</span>
          </h1>
        </Link>

        {/*botón de navegación de escritorio y boton contratarme*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* nav movil */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
