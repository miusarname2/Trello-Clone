"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

interface Card {
  id: string;
  title: string;
  content: string;
}

interface Lista {
  id: string;
  titulo: string;
  cards: Card[];
}

export function MainList() {
  const [listas, setListas] = useState<Lista[]>([]);
  const [nuevaListaTitulo, setNuevaListaTitulo] = useState("");
  const [listaAbierta, setListaAbierta] = useState(false);

  const agregarLista = () => {
    if (nuevaListaTitulo.trim() === "") {
      return;
    }

    const nuevaLista: Lista = {
      id: Date.now().toString(),
      titulo: nuevaListaTitulo,
      cards: [],
    };

    setListas([...listas, nuevaLista]);
    setNuevaListaTitulo("");
    setListaAbierta(false);
  };

  const agregarCard = (
    listaId: string,
    cardTitle: string,
    cardContent: string
  ) => {
    const nuevaCard: Card = {
      id: Date.now().toString(),
      title: cardTitle,
      content: cardContent,
    };

    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? { ...lista, cards: [...lista.cards, nuevaCard] }
          : lista
      )
    );
  };

  const onDragEnd = (result:any) => {
  if (!result.destination) {
    return;
  }

  setListas((prevListas) => {
    const newListas = [...prevListas];

    // Verificamos si estamos reordenando tarjetas dentro de una lista
    if (result.type === "CARD") {
      const draggedCard = newListas
        .find((lista) => lista.id === result.source.droppableId)
        ?.cards[result.source.index];

      if (!draggedCard) {
        return prevListas;
      }

      newListas
        .find((lista) => lista.id === result.source.droppableId)
        ?.cards.splice(result.source.index, 1);
      newListas
        .find((lista) => lista.id === result.destination.droppableId)
        ?.cards.splice(result.destination.index, 0, draggedCard);
    } else if (result.type === "LIST") {
      // Reordenar listas
      const draggedList = newListas[result.source.index];
      newListas.splice(result.source.index, 1);
      newListas.splice(result.destination.index, 0, draggedList);
    }

    return newListas;
  });
};
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="w-full md:w-64 bg-[#5E6C84] text-white p-5">
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-semibold">
              Espacio de trabajo de Trello
            </h1>
            <ChevronDownIcon className="text-white" />
          </div>
          <p className="text-sm">Gratuito</p>
        </div>
        <nav className="mb-5">
          <ul>
            <li className="flex items-center justify-between text-sm mb-2 hover:cursor-pointer">
              <span>Tableros</span>
              <PlusIcon className="text-white" />
            </li>
            <li className="flex items-center justify-between text-sm mb-2 hover:cursor-pointer">
              <span>Miembros</span>
              <PlusIcon className="text-white" />
            </li>
            <li className="text-sm mb-2">Ajustes del Espacio de trabajo</li>
          </ul>
        </nav>
        <div className="mb-5">
          <p className="text-sm mb-2">Vistas del Espacio de trabajo</p>
          <ul>
            <li className="text-sm mb-2">
              <a href="#">Tabla</a>
            </li>
            <li className="text-sm mb-2">
              <a href="#">Calendario</a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p className="text-sm mb-2">Sus tableros</p>
          <ul>
            <li className="text-sm mb-2">
              <a href="#">Oscar</a>
            </li>
            <li className="text-sm mb-2">
              <a href="#">Mostrar más</a>
            </li>
          </ul>
        </div>
        <div>
          <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
            Pruebe Premium gratis
          </Button>
        </div>
      </aside>
      <main
        className="flex-1 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://hips.hearstapps.com/hmg-prod/images/demon-slayer-1657889450.jpeg?crop=1xw:1xh;center,top&resize=1200:*')",
        }}
      >
        <header className="flex items-center justify-between bg-black bg-opacity-50 text-white p-5">
          <div className="flex items-center space-x-4">
            <HomeIcon className="text-white" />
            <h2 className="font-semibold">su papa</h2>
            <ChevronDownIcon className="text-white" />
            <span className="text-sm">Visible para el Espacio de trabajo</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Crear
            </Button>
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Tablero
            </Button>
            <BellIcon className="text-white" />
            <CircleIcon className="text-white" />
            <Input
              className="text-gray-500"
              placeholder="Buscar"
              type="search"
            />
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Power-Ups
            </Button>
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Automatización
            </Button>
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Filtros
            </Button>
            <Avatar>
              <AvatarImage
                alt="User avatar"
                src="/placeholder.svg?height=32&width=32"
              />
              <AvatarFallback>OG</AvatarFallback>
            </Avatar>
            <Button className="text-sm bg-transparent border border-gray-200 border-white dark:border-gray-800">
              Compartir
            </Button>
          </div>
        </header>
        <div className="p-5">
          <div className="bg-white p-3 rounded shadow w-full md:w-64">
            <input
              className="p-2 border-b w-full mb-2 text-gray-500"
              placeholder="Introduzca el título de la lista..."
              type="text"
              value={nuevaListaTitulo}
              onChange={(e) => setNuevaListaTitulo(e.target.value)}
            />
            <Button variant="default" onClick={agregarLista}>
              Añadir lista
            </Button>
          </div>
          <br />
          <DragDropContext onDragEnd={onDragEnd}>
            <div
              className="flex overflow-x-auto text-gray-500"
              style={{ width: "100%" }}
            >
              {listas.map((lista, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded shadow w-full md:w-64 mr-3 text-gray-500"
                >
                  <h2>{lista.titulo}</h2>
                  <Droppable droppableId={lista.id} type="CARD">
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`${
                          snapshot.isDraggingOver ? "bg-gray-200" : "bg-white"
                        } p-3 rounded`}
                      >
                        {lista.cards.map((card, cardIndex) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={cardIndex}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-gray-100 p-2 my-2 rounded"
                              >
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <div>
                    <button
                      onClick={() => {
                        const cardTitle = prompt(
                          "Introduzca el título de la tarjeta:"
                        );
                        const cardContent = prompt(
                          "Introduzca el contenido de la tarjeta:"
                        );
                        if (cardTitle && cardContent) {
                          agregarCard(lista.id, cardTitle, cardContent);
                        }
                      }}
                    >
                      Añadir tarjeta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DragDropContext>
        </div>
      </main>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6-6" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
      <polyline points="9 22 12 15" />
    </svg>
  );
}

function BellIcon(props: any) {
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
  );
}

function CircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
