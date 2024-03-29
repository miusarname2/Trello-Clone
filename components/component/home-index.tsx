export function HomeIndex() {
  return (
    <div className="min-h-screen bg-[#091e42] text-white">
      <div className="flex">
        <div className="w-60 px-4 py-6 space-y-6 bg-[#172b4d]">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Tableros</h2>
            <h2 className="text-lg font-semibold">Plantillas</h2>
            <h2 className="text-lg font-semibold">Inicio</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400">Espacios de trabajo</h3>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Quazart</h4>
              <div className="space-y-1 text-sm">
                <p>Tableros</p>
                <p>Lo más destacado</p>
                <p>Visitas</p>
                <p>Miembros</p>
                <p>Configuración</p>
              </div>
            </div>
          </div>
          <div className="p-3 text-sm bg-[#0a2533]">
            <p>Pruebe Trello Premium</p>
            <p>Consiga tableros ilimitados, todas las vistas que existen, automatizaciones sin fin y mucho más.</p>
            <button className="mt-3 w-full rounded bg-[#0079bf] py-2 text-sm font-semibold">
              Comenzar prueba gratis
            </button>
          </div>
        </div>
        <div className="flex-1 px-4 py-6">
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-semibold">Visto recientemente</h2>
            <div className="flex space-x-4">
              <div className="w-1/4 rounded-md bg-gray-800">
                <img
                  alt="Board preview"
                  className="h-24 w-full rounded-t-md object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold">1-on-1 Meeting Agenda</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">TUS ESPACIOS DE TRABAJO</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-md bg-gray-800">
                <img
                  alt="Board preview"
                  className="h-24 w-full rounded-t-md object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold">1-on-1 Meeting Agenda</h3>
                </div>
              </div>
              <div className="flex h-32 items-center justify-center rounded-md bg-[#0079bf]">
                <p className="text-sm font-semibold">Crear un tablero nuevo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
