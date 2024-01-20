import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomePage2() {
  return (
    <div className="flex h-screen bg-[#091e42]">
      <div className="flex w-1/2 flex-col p-12 text-white">
        <div className="mb-8 flex items-center space-x-2">
          <TrelloIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Trello</span>
        </div>
        <h1 className="text-4xl font-bold">El tablero es el inicio de todo</h1>
        <p className="mt-4 mb-8 text-lg">
          Todo en Trello gira en torno a los tableros. En ellos encontrará las tarjetas, listas, fechas de vencimiento y
          cualquier cosa que añada para tenerlo todo bajo control y cumplir los objetivos.
        </p>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="boardName">
            Introduzca el nombre del tablero
          </label>
          <Input id="boardName" placeholder="Oscar" />
        </div>
        <Button>Próximamente</Button>
        <div className="mt-auto flex items-center">
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          <Link className="text-sm" href="#">
            Volver
          </Link>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="absolute top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#e44232] p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <TrelloIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Oscar</span>
            <BellIcon className="h-5 w-5" />
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="flex flex-col items-start space-y-2">
              <div className="h-24 w-40 rounded-lg bg-white p-4">
                <div className="h-2 w-3/4 rounded bg-[#f5d0c5]" />
                <div className="mt-2 h-1 w-1/2 rounded bg-[#f5d0c5]" />
              </div>
              <div className="h-24 w-40 rounded-lg bg-white p-4">
                <div className="h-2 w-3/4 rounded bg-[#c9e4f6]" />
                <div className="mt-2 h-1 w-1/2 rounded bg-[#c9e4f6]" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="h-24 w-40 rounded-lg bg-white p-4">
                <div className="h-2 w-3/4 rounded bg-[#f5d0c5]" />
                <div className="mt-2 h-1 w-1/2 rounded bg-[#f5d0c5]" />
              </div>
              <div className="h-24 w-40 rounded-lg bg-white p-4">
                <div className="h-2 w-3/4 rounded bg-[#c9e4f6]" />
                <div className="mt-2 h-1 w-1/2 rounded bg-[#c9e4f6]" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <SettingsIcon className="h-5 w-5" />
            <MoreHorizontalIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mb-8 mr-8">
          <Link className="text-sm text-white" href="#">
            Omitir
          </Link>
        </div>
      </div>
    </div>
  )
}


function TrelloIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <rect width="3" height="9" x="7" y="7" />
      <rect width="3" height="5" x="14" y="7" />
    </svg>
  )
}


function ArrowLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 1 12 0c0 7 3 9 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 3.4" />
    </svg>
  )
}


function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0-2 2v.18a2 1-1 1.73l-.43.25a2 1-2 0l-.15-.08a2 0-2.73.73l-.22.38a2 .73 2.73l.15.1a2 1 1.72v.51a2 1.74l-.15.09a2 0-.73 2.73l.22.38a2 2.73.73l.15-.08a2 0l.43.25a2 1.73V20a2 2h.44a2 2-2v-.18a2 1-1.73l.43-.25a2 0l.15.08a2 2.73-.73l.22-.39a2 0-.73-2.73l-.15-.08a2 1-1-1.74v-.5a2 1-1.74l.15-.09a2 .73-2.73l-.22-.38a2 0-2.73-.73l-.15.08a2 0l-.43-.25a2 1-1-1.73V4a2 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function MoreHorizontalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
