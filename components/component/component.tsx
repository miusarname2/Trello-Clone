import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardContent, Card } from "@/components/ui/card"

export function Component() {
  return (
    <div className="bg-[#0079bf] min-h-screen">
      <nav className="bg-[#026aa7] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <TrelloIcon className="text-white h-6 w-6" />
            <Link className="text-white" href="#">
              Boards
            </Link>
            <Input className="rounded" placeholder="Search" type="search" />
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#60bd68] text-white">Create</Button>
            <Avatar>
              <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
            </Avatar>
          </div>
        </div>
      </nav>
      <header className="p-4 bg-[#026aa7] text-white">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">1-on-1 Meeting Agenda</h1>
          <Button className="text-sm" variant="secondary">
            Visible to workspace
          </Button>
          <Select>
            <SelectTrigger id="board">
              <SelectValue placeholder="Board" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="board1">Board 1</SelectItem>
              <SelectItem value="board2">Board 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="p-4 flex space-x-2 overflow-x-auto">
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Info</h2>
          <Card className="mb-2">
            <CardContent>How to use this board</CardContent>
          </Card>
          <Card className="mb-2">
            <CardContent>Blocker - Timely discussion (#4)</CardContent>
          </Card>
          <Card className="mb-2">
            <CardContent>Discuss - Suggested topic (#3)</CardContent>
          </Card>
          <Button variant="secondary">+ Add a card</Button>
        </div>
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Team Member's Topics</h2>
          <Card className="mb-2">
            <CardContent>The team is stuck on X, how can we move forward?</CardContent>
          </Card>
          <Button variant="secondary">+ Add a card</Button>
        </div>
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Manager's Topics</h2>
          <Card className="mb-2">
            <CardContent>New training program</CardContent>
          </Card>
          <Card className="mb-2">
            <CardContent>I think we can improve velocity if we make some tooling changes.</CardContent>
          </Card>
          <Button variant="secondary">+ Add a card</Button>
        </div>
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Goals</h2>
          <Card className="mb-2">
            <CardContent>Manage time chaos</CardContent>
          </Card>
          <Button variant="secondary">+ Add a card</Button>
        </div>
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Actions</h2>
          <Card className="mb-2">
            <CardContent>Mentor another developer</CardContent>
          </Card>
          <Button variant="secondary">+ Add a card</Button>
        </div>
        <div className="w-72 bg-[#ebecf0] p-2 rounded">
          <h2 className="font-bold mb-2">Done</h2>
          <Button variant="secondary">+ Add a card</Button>
        </div>
      </main>
    </div>
  )
}


function TrelloIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 12"
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
