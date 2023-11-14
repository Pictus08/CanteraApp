import Link from "next/link";
import NavbarCantera from "@/components/NavbarCantera";

// Función de la página principal
export default function Page() {
  return (
    <>
      <NavbarCantera />
      <div className="flex flex-col items-center justify-start min-h-screen pt-4">
        <div className="relative bg-white border border-gray-300 p-6 rounded-md text-center font-semibold mx-auto w-72 mt-4 overflow-hidden">
          <h2 className="text-lg mb-4 relative z-10">Ventas-Cantera</h2>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
          {/* Botones como tarjetas */}
          <Link
            href="/Cantera/Ventas/Salidadematerial"
            className="block p-4 border rounded-md text-center font-semibold hover:bg-gray-200 mx-auto w-full mt-4"
          >
            Salida de Material
          </Link>
          <Link
            href="/Cantera/Ventas/Facturacion"
            className="block p-4 border rounded-md text-center font-semibold hover:bg-gray-200 mx-auto w-full mt-4"
          >
            Facturación
          </Link>
          <Link
            href="/Cantera/Ventas/RegistrarPago"
            className="block p-4 border rounded-md text-center font-semibold hover:bg-gray-200 mx-auto w-full mt-4"
          >
            Registrar Pago
          </Link>
        </div>
      </div>
    </>
  );
}
