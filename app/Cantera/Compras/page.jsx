"use client";
import React, { useState } from "react";

import NavbarVentas from "@/components/NavbarCantera";

export default function Compras() {
  const [numeroFactura, setNumeroFactura] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [iva, setIVA] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", {
      numeroFactura,
      proveedor,
      iva,
      total,
    });

    setNumeroFactura("");
    setProveedor("");
    setIVA("");
    setTotal("");
  };

  return (
    <>
      <NavbarVentas />
      <div className="max-w-2xl mx-auto mt-8 p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              N° de Factura:
            </label>
            <input
              type="text"
              value={numeroFactura}
              onChange={(e) => setNumeroFactura(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Proveedor:
            </label>
            <input
              type="text"
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              IVA ($):
            </label>
            <input
              type="text"
              value={iva}
              onChange={(e) => setIVA(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total ($):
            </label>
            <input
              type="text"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Guardar Compra
          </button>
        </form>
      </div>
    </>
  );
}
