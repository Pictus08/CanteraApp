"use client";
import React, { useState } from "react";
import NavbarVentas from "@/components/NavbarCantera";

export default function Compras() {
  // State variables for form data
  const [numeroFactura, setNumeroFactura] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [iva, setIVA] = useState("");
  const [total, setTotal] = useState("");
  const [agregarComentario, setAgregarComentario] = useState(false);
  const [comentario, setComentario] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console
    console.log("Form Data:", {
      numeroFactura,
      proveedor,
      iva,
      total,
      comentario: agregarComentario ? comentario : null,
    });

    // Reset form fields after submission
    setNumeroFactura("");
    setProveedor("");
    setIVA("");
    setTotal("");
    setAgregarComentario(false);
    setComentario("");
  };

  // JSX structure for the component
  return (
    <>
      {/* Display the sales navbar */}
      <NavbarVentas />
      {/* Form container */}
      <div className="max-w-2xl mx-auto mt-8 p-4">
        {/* Purchase form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Invoice number input */}
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

          {/* Supplier input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Proveedor
            </label>
            <input
              type="text"
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* IVA (VAT) input */}
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

          {/* Total input */}
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

          {/* Checkbox for adding comments */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agregarComentario"
              checked={agregarComentario}
              onChange={() => setAgregarComentario(!agregarComentario)}
              className="mr-2"
            />
            <label
              htmlFor="agregarComentario"
              className="text-sm font-medium text-gray-700"
            >
              Agregar Comentario
            </label>
          </div>

          {/* Comment input */}
          {agregarComentario && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comentario (150 caracteres):
              </label>
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
                maxLength={150}
              />
            </div>
          )}

          {/* Submit button */}
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
