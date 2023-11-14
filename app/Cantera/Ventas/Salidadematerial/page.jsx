"use client";

import React, { useState, useEffect } from "react";
import NavbarCantera from "@/components/NavbarCantera";

// Functional component for material output form
const SalidaDeMaterial = () => {
  // State variables to manage form data
  const [remito, setRemito] = useState(false);
  const [proforma, setProforma] = useState(false);
  const [numero, setNumero] = useState("");
  const [numeroGuia, setNumeroGuia] = useState("");
  const [cliente, setCliente] = useState("");
  const [patente, setPatente] = useState("");
  const [chofer, setChofer] = useState("");
  const [producto, setProducto] = useState("6-19");
  const [bruto, setBruto] = useState("");
  const [tara, setTara] = useState("");
  const [neto, setNeto] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [comentarios, setComentarios] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logging form data to the console
    console.log("Formulario enviado:", {
      remito,
      proforma,
      numero,
      numeroGuia,
      cliente,
      patente,
      chofer,
      producto,
      bruto,
      tara,
      neto,
      fecha,
      hora,
      mostrarComentarios,
      comentarios,
    });
  };

  // Function to set the current date and time
  const setFechaHoraActual = () => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toTimeString().split(" ")[0];
    setFecha(formattedDate);
    setHora(formattedTime);
  };

  // Function to calculate net weight based on gross and tare weights
  const calcularNeto = () => {
    const brutoValue = parseFloat(bruto);
    const taraValue = parseFloat(tara);

    if (!isNaN(brutoValue) && !isNaN(taraValue)) {
      const netoValue = brutoValue - taraValue;
      setNeto(parseFloat(netoValue.toFixed(2)));
    } else {
      setNeto("");
    }
  };

  // Use useEffect to watch for changes in bruto and tara
  useEffect(() => {
    calcularNeto();
  }, [bruto, tara]);

  // JSX structure for the component
  return (
    <>
      {/* Navbar component */}
      <NavbarCantera />
      <div className="max-w-2xl mx-auto mt-8 p-4">
        {/* Form for material output */}
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Type selection: Remito or Proforma */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Seleccione uno:
            </label>
            <div className="flex items-center space-x-4">
              <label>
                Remito:
                <input
                  type="radio"
                  name="tipoDocumento"
                  checked={remito}
                  onChange={() => {
                    setRemito(true);
                    setProforma(false);
                  }}
                />
              </label>
              <label>
                Proforma:
                <input
                  type="radio"
                  name="tipoDocumento"
                  checked={proforma}
                  onChange={() => {
                    setRemito(false);
                    setProforma(true);
                  }}
                />
              </label>
            </div>
          </div>

          {/* Input for document number */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              N°:
            </label>
            <input
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Conditional input for guide number if Remito is selected */}
          {remito && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                N° de Guia:
              </label>
              <input
                type="number"
                value={numeroGuia}
                onChange={(e) => setNumeroGuia(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          )}

          {/* Input for client name */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Cliente:
            </label>
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Input for vehicle license plate */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Patente:
            </label>
            <input
              type="text"
              value={patente}
              onChange={(e) => setPatente(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Input for driver's name */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Chofer:
            </label>
            <input
              type="text"
              value={chofer}
              onChange={(e) => setChofer(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Dropdown for selecting the product */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Producto:
            </label>
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

          {/* Input for gross weight */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Bruto:
            </label>
            <input
              type="number"
              value={bruto}
              onChange={(e) => {
                setBruto(e.target.value);
                calcularNeto();
              }}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Input for tare weight */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Tara:
            </label>
            <input
              type="number"
              value={tara}
              onChange={(e) => {
                setTara(e.target.value);
                calcularNeto();
              }}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Display net weight (read-only) */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Neto:
            </label>
            <input
              type="text"
              value={neto}
              readOnly
              className="mt-1 p-2 border rounded-md w-full bg-gray-100"
            />
          </div>

          {/* Input for date */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Fecha:
            </label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Input for time */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Hora:
            </label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Checkbox to show/hide comments section */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Agregar comentarios:
            </label>
            <input
              type="checkbox"
              checked={mostrarComentarios}
              onChange={() => setMostrarComentarios(!mostrarComentarios)}
              className="mt-1"
            />
          </div>

          {/* Conditional textarea for comments */}
          {mostrarComentarios && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Comentarios (150 caracteres):
              </label>
              <textarea
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                maxLength={150}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
          )}

          {/* Button to set current date and time */}
          <button
            type="button"
            onClick={setFechaHoraActual}
            className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
          >
            Establecer Fecha y Hora Actuales
          </button>

          {/* Submit button for form */}
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
};

export default SalidaDeMaterial;
