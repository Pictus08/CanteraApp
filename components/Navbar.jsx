import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enlace a la ruta de inicio con la clase personalizada */}
          <Link href="/" className="custom-link">
            Cantera Mildner
          </Link>

          {/* Menú de navegación para dispositivos móviles */}
          <div className="md:hidden flex flex-col items-center mt-4">
            {" "}
            {/* Cambiado items-end a items-center */}
            <Link href="/Cantera" className="common-link px-4 py-2">
              Inicie Sesión
            </Link>
          </div>

          {/* Enlaces de navegación para pantallas más grandes */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link href="/Cantera" className="common-link">
              Inicie Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
