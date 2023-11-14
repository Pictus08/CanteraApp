import Link from "next/link";

export default function NavbarCantera() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-4">
            {/* Primera fila para Cantera Mildner con la clase personalizada */}
            <div className="flex items-center">
              <Link href="/Cantera" className="custom-link">
                Cantera Mildner
              </Link>
            </div>

            {/* Segunda fila para el menú de navegación en dispositivos móviles */}
            <div className="sm:hidden flex flex-wrap mt-4 justify-center text-center">
              {/* Puedes agregar un botón de menú aquí si lo deseas */}
              {/* <button>Icono de menú</button> */}
              <Link href="/Cantera" className="common-link px-4 py-2">
                Inicio
              </Link>
              <Link href="/Cantera/Ventas" className="common-link px-4 py-2">
                Ventas
              </Link>
              <Link href="/Cantera/Compras" className="common-link px-4 py-2">
                Compras
              </Link>
              <Link
                href="/Cantera/Presupuestos"
                className="common-link px-4 py-2"
              >
                Presupuestos
              </Link>
              <Link href="/" className="common-link px-4 py-2">
                Salir
              </Link>
            </div>

            {/* Enlaces de navegación para pantallas más grandes */}
            <div className="hidden sm:flex items-center space-x-4 ml-auto">
              <Link href="/Cantera" className="common-link">
                Inicio
              </Link>
              <Link href="/Cantera/Ventas" className="common-link">
                Ventas
              </Link>
              <Link href="/Cantera/Compras" className="common-link">
                Compras
              </Link>
              <Link href="/Cantera/Presupuestos" className="common-link">
                Presupuestos
              </Link>
              <Link href="/" className="common-link">
                Salir
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
