"use client";
import React, { useState } from "react";
import NavbarCantera from "@/components/NavbarCantera";

// Functional component for handling the billing form
export default function Facturacion() {
  // State variables for form inputs and UI elements
  const [factura, setFactura] = useState(false); // State for "Factura" radio button
  const [facturaProforma, setFacturaProforma] = useState(false); // State for "Factura Proforma" radio button
  const [numero, setNumero] = useState(""); // State for "N°" input
  const [cliente, setCliente] = useState(""); // State for "Cliente" input
  const [producto, setProducto] = useState("6-19"); // State for "Producto" dropdown
  const [toneladas, setToneladas] = useState(""); // State for "Toneladas" input
  const [presosPorTonelada, setPresosPorTonelada] = useState(""); // State for "Presos por Tonelada ($)" input
  const [fecha, setFecha] = useState(""); // State for "Fecha" input
  const [mostrarNumeroOrden, setMostrarNumeroOrden] = useState(false); // State for conditional rendering of "N° de Orden" input
  const [numeroOrden, setNumeroOrden] = useState(""); // State for "N° de Orden" input
  const [mostrarComentario, setMostrarComentario] = useState(false); // State for conditional rendering of "Comentario" input
  const [comentario, setComentario] = useState(""); // State for "Comentario" input

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log form data to console
    console.log("Form submitted:", {
      factura,
      facturaProforma,
      numero,
      cliente,
      producto,
      toneladas,
      presosPorTonelada,
      fecha,
      numeroOrden,
      comentario,
    });
  };

  // Set the current date as the default value for the "Fecha" input
  const setFechaActual = () => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    setFecha(formattedDate);
  };

  // Handle changes in the "N° de Orden" input
  const handleNumeroOrdenChange = (e) => {
    setNumeroOrden(e.target.value);
  };

  // Render the component
  return (
    <>
      {/* Render the Navbar component */}
      <NavbarCantera />
      {/* Form container */}
      <div className="max-w-2xl mx-auto mt-8 p-4">
        {/* Form element with submit handler */}
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Type selection section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Select one:
            </label>
            <div className="flex items-center space-x-4">
              {/* Radio button for "Factura" */}
              <label>
                Factura:
                <input
                  type="radio"
                  name="tipoDocumento"
                  checked={factura}
                  onChange={() => {
                    setFactura(true);
                    setFacturaProforma(false);
                    setMostrarNumeroOrden(true);
                  }}
                />
              </label>
              {/* Radio button for "Factura Proforma" */}
              <label>
                Factura Proforma:
                <input
                  type="radio"
                  name="tipoDocumento"
                  checked={facturaProforma}
                  onChange={() => {
                    setFactura(false);
                    setFacturaProforma(true);
                    setMostrarNumeroOrden(false);
                  }}
                />
              </label>
            </div>
          </div>

          {/* "N°" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              N°:
            </label>
            {/* Input for "N°" */}
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Conditional rendering for "N° de Orden" based on selection */}
          {mostrarNumeroOrden && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                N° de Orden:
              </label>
              {/* Input for "N° de Orden" */}
              <input
                type="text"
                value={numeroOrden}
                onChange={handleNumeroOrdenChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          )}

          {/* "Cliente" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Cliente:
            </label>
            {/* Input for "Cliente" */}
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* "Producto" dropdown section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Producto:
            </label>
            {/* Dropdown for "Producto" */}
            <select
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="06">06</option>
              <option value="6-19">6-19</option>
              <option value="19-32">19-32</option>
              <option value="Volada">Volada</option>
              <option value="Empedrado">Empedrado</option>
              <option value="Balastro">Balastro</option>
              <option value="Rechazo">Rechazo</option>
              <option value="Tosca">Tosca</option>
            </select>
          </div>

          {/* "Toneladas" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Toneladas:
            </label>
            {/* Input for "Toneladas" */}
            <input
              type="text"
              value={toneladas}
              onChange={(e) => setToneladas(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* "Presos por Tonelada ($)" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Presos por Tonelada ($):
            </label>
            {/* Input for "Presos por Tonelada ($)" */}
            <input
              type="text"
              value={presosPorTonelada}
              onChange={(e) => setPresosPorTonelada(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* "Fecha" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Fecha:
            </label>
            {/* Input for "Fecha" */}
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* "Agregar Comentario" checkbox and "Comentario" input section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Agregar Comentario:
            </label>
            <div className="flex items-center space-x-2">
              {/* Checkbox for "Agregar Comentario" */}
              <input
                type="checkbox"
                onChange={() => setMostrarComentario(!mostrarComentario)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
            </div>
            {/* Conditional rendering for "Comentario" based on checkbox */}
            {mostrarComentario && (
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Comentario (150 caracteres):
                </label>
                {/* Textarea for "Comentario" */}
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  maxLength="150"
                  rows="3"
                  className="mt-1 p-2 border rounded-md w-full"
                ></textarea>
              </div>
            )}
          </div>

          {/* "Establecer Fecha Actual" button */}
          <button
            type="button"
            onClick={setFechaActual}
            className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
          >
            Establecer Fecha Actual
          </button>

          {/* Submit button */}
          <div className="mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
