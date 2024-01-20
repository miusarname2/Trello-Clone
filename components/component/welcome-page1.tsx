
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function WelcomePage1() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0079bf]">
      <div className="mx-auto flex w-[80%] max-w-6xl items-start justify-between space-x-8">
        <div className="flex w-1/2 flex-col space-y-8">
          <div className="flex items-center space-x-2">
            <TrelloIcon className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Trello</span>
          </div>
          <div className="flex h-full flex-col justify-center space-y-4">
            <h1 className="text-5xl font-bold text-white">¡Bienvenido a Trello!</h1>
            <p className="text-xl text-white">
              ¡Bien hecho! Empecemos a organizar sus proyectos para dejarlo todo zanjado.
            </p>
            <Button className="bg-white text-[#0079bf]">Cree su primer tablero</Button>
          </div>
        </div>
        <div className="relative w-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-3xl bg-[#e4f0f6] p-6 shadow-lg" />
          <div className="relative z-10 flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Doing</h2>
              <OptionIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">2/3</span>
                  <FileIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">4</span>
                </div>
                <div className="flex space-x-2">
                  <Avatar>
                    <AvatarImage alt="User 1" src="/placeholder.svg?height=24&width=24" />
                  </Avatar>
                  <Avatar>
                    <AvatarImage alt="User 2" src="/placeholder.svg?height=24&width=24" />
                  </Avatar>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-2 w-3/4 rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-blue-400" />
                </div>
                <span className="text-sm text-gray-600">July 15</span>
                <Avatar>
                  <AvatarImage alt="User 3" src="/placeholder.svg?height=24&width=24" />
                </Avatar>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-2 w-3/4 rounded-full bg-gray-200">
                  <div className="h-2 w-full rounded-full bg-blue-400" />
                </div>
                <span className="text-sm text-gray-600">4</span>
                <div className="flex space-x-2">
                  <Avatar>
                    <AvatarImage alt="User 4" src="/placeholder.svg?height=24&width=24" />
                  </Avatar>
                  <Avatar>
                    <AvatarImage alt="User 5" src="/placeholder.svg?height=24&width=24" />
                  </Avatar>
                </div>
              </div>
              <Button className="text-blue-500" variant="ghost">
                + Add a card
              </Button>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <Badge variant="secondary">Jun 6</Badge>
              <Avatar>
                <AvatarImage alt="Kelly R." src="/placeholder.svg?height=32&width=32" />
              </Avatar>
              <div className="rounded-md bg-yellow-200 p-2">
                <p className="text-sm font-medium">
                  Kelly R. <span className="font-normal">May 20 at 10:41 AM</span>
                </p>
                <p className="text-sm">
                  Love this! Thanks <span className="font-medium">@MarkS</span>
                </p>
              </div>
            </div>
          </div>
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


function OptionIcon(props:any) {
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
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  )
}


function CheckIcon(props:any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function FileIcon(props:any) {
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
      <path d="M14.5 2H6a2 2 0 0-2 2v16a2 2h12a2 2-2V7.5L14.5 2z" />
      <polyline points="14 2 8 20" />
    </svg>
  )
}
