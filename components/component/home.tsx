import Navbars from '@/components/ui/navbar'
export function Home() {
  return (
    <div key="1" className="min-h-screen bg-[#091e42] text-white">
      <div>
        <Navbars/>
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
              <button className="flex h-32 items-center justify-center rounded-md bg-[#0079bf]">
                <p className="text-sm font-semibold">Crear un tablero nuevo</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
