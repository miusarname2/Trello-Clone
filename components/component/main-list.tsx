"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XMarkIcon } from "@heroicons/react/24/solid";
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

  const eliminarLista = (listaId: string) => {
    setListas((prevListas) =>
      prevListas.filter((lista) => lista.id !== listaId)
    );
  };

  const eliminarCard = (listaId: string, cardId: string) => {
    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? {
              ...lista,
              cards: lista.cards.filter((card) => card.id !== cardId),
            }
          : lista
      )
    );
  };

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

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    setListas((prevListas) => {
      const newListas = [...prevListas];

      // Verificamos si estamos reordenando tarjetas dentro de una lista
      if (result.type === "CARD") {
        const draggedCard = newListas.find(
          (lista) => lista.id === result.source.droppableId
        )?.cards[result.source.index];

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
      <main
        className="flex-1 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg')",
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
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Crear
            </Button>
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Tablero
            </Button>
            <BellIcon className="text-white" />
            <CircleIcon className="text-white" />
            <Input
              className="text-gray-500"
              placeholder="Buscar"
              type="search"
            />
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Power-Ups
            </Button>
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Automatización
            </Button>
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Filtros
            </Button>
            <Avatar>
              <AvatarImage
                alt="User avatar"
                src="/placeholder.svg?height=32&width=32"
              />
              <AvatarFallback>OG</AvatarFallback>
            </Avatar>
            <Button className="text-sm bg-transparent border  border-white dark:border-gray-800">
              Compartir
            </Button>
          </div>
        </header>
        <div className="p-5 flex">
          <div className="bg-white p-3 rounded shadow w-full md:w-64 m-2">
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
                  <div className="flex items-center justify-between">
                    <h2 className="mr-4">{lista.titulo}</h2>
                    <XMarkIcon
                      className="h-5 text-red-600 cursor-pointer"
                      onClick={() => eliminarLista(lista.id)}
                    >
                      Eliminar Lista
                    </XMarkIcon>
                  </div>

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
                                <div className="flex justify-between items-center mb-2">
                                  <h3 className="mr-4">{card.title}</h3>
                                  <XMarkIcon
                                  className="h-5 text-red-600 cursor-pointer"
                                    onClick={() =>
                                      eliminarCard(lista.id, card.id)
                                    }
                                  >
                                    Eliminar Tarjeta
                                  </XMarkIcon>
                                </div>
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
