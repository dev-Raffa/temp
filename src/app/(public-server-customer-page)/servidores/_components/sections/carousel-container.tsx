"use client"

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface SecurityCarouselProps {
  id: number;
  title: string;
  description: string;
}

const carousel: SecurityCarouselProps[] = [
  {
    id: 1,
    title: "A Smart Consig não solicita transferências ou Pix",
    description: "Com vantagens exclusivas e taxas mais atrativas em comparação a contratos antigos, a Portabilidade é uma forma de transferir seu empréstimo para outro banco com melhores condições, podendo inclusive liberar um valor conforme análise."
  },
  {
    id: 2,
    title: "A Smart Consig não solicita selfie ou documentos fora do processo oficial",
    description: "Caso alguém peça seus dados, fotos ou comprovantes fora dos canais autorizados durante a portabilidade, cuidado: pode ser golpe."
  },
  {
    id: 3,
    title: "Verifique quem realizou a oferta",
    description: "Proteja-se de golpistas que usam indevidamente o nome da Smart Consig. Confirme se a proposta foi feita por um de nossos especialistas autorizados e nunca compartilhe dados com pessoas não identificadas."
  },
]

export function PublicServerCustomerCarouselContainer() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="grid grid-cols-1 border-t py-12 px-6 md:max-w-5xl md:w-full md:mx-auto md:border-t-0 md:pb-20">
      <div className="space-y-6">
        <h4 className="max-w-xs w-full text-lg text-black font-medium tracking-tight">
          Como se proteger de golpes de consignado?
        </h4>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {carousel.map((item) => (
            <Card className="h-96 w-72 border-secondary-red rounded-[48px] py-6 px-8" key={item.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={100}
                height={100}
                viewBox="0 0 50 50"
                className="size-7 fill-secondary-red"
              >
                <path d="M25 .047a8.071 8.071 0 00-5.727 2.365l-16.86 16.86c-3.156 3.155-3.156 8.3 0 11.455l16.86 16.86c3.155 3.155 8.3 3.155 11.454 0l16.86-16.858c3.156-3.156 3.156-8.3 0-11.456L30.73 2.413A8.076 8.076 0 0025 .046zm0 1.986c1.559 0 3.119.598 4.314 1.793L38.486 13H37.07a6.003 6.003 0 00-4.242 1.756 1 1 0 000 .002l-6.767 6.767a1.487 1.487 0 01-2.123 0l-6.768-6.767A5.994 5.994 0 0012.93 13h-1.418l9.175-9.174A6.078 6.078 0 0125 2.033zM9.512 15h3.418c1.06 0 2.078.42 2.826 1.17a1 1 0 000 .002l6.767 6.767a3.518 3.518 0 004.952 0l6.767-6.767A4 4 0 0137.07 15h3.416l5.688 5.688a6.085 6.085 0 010 8.626L40.488 35H37.07a4 4 0 01-2.828-1.172l-6.767-6.767A3.488 3.488 0 0025 26.043c-.898 0-1.797.339-2.477 1.018l-6.767 6.767a1 1 0 000 .002A3.994 3.994 0 0112.93 35H9.514l-5.688-5.688a6.085 6.085 0 010-8.626L9.512 15zM25 28.03c.382 0 .764.148 1.06.445l6.768 6.767a1 1 0 000 .002A6.003 6.003 0 0037.07 37h1.418l-9.175 9.174a6.084 6.084 0 01-8.625 0L11.514 37h1.416a5.994 5.994 0 004.24-1.758l6.767-6.767c.298-.298.68-.446 1.063-.446z" />
              </svg>

              <CardHeader className="px-0">
                <CardTitle className="text-base font-medium">
                  {item.title}
                </CardTitle>

                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="md:hidden"
        >
          <div className="flex flex-col">
            <CarouselContent>
              {carousel.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="py-2 px-4">
                    <Card className="h-96 border-secondary-red rounded-[48px] py-6 px-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={100}
                        height={100}
                        viewBox="0 0 50 50"
                        className="size-7 fill-secondary-red"
                      >
                        <path d="M25 .047a8.071 8.071 0 00-5.727 2.365l-16.86 16.86c-3.156 3.155-3.156 8.3 0 11.455l16.86 16.86c3.155 3.155 8.3 3.155 11.454 0l16.86-16.858c3.156-3.156 3.156-8.3 0-11.456L30.73 2.413A8.076 8.076 0 0025 .046zm0 1.986c1.559 0 3.119.598 4.314 1.793L38.486 13H37.07a6.003 6.003 0 00-4.242 1.756 1 1 0 000 .002l-6.767 6.767a1.487 1.487 0 01-2.123 0l-6.768-6.767A5.994 5.994 0 0012.93 13h-1.418l9.175-9.174A6.078 6.078 0 0125 2.033zM9.512 15h3.418c1.06 0 2.078.42 2.826 1.17a1 1 0 000 .002l6.767 6.767a3.518 3.518 0 004.952 0l6.767-6.767A4 4 0 0137.07 15h3.416l5.688 5.688a6.085 6.085 0 010 8.626L40.488 35H37.07a4 4 0 01-2.828-1.172l-6.767-6.767A3.488 3.488 0 0025 26.043c-.898 0-1.797.339-2.477 1.018l-6.767 6.767a1 1 0 000 .002A3.994 3.994 0 0112.93 35H9.514l-5.688-5.688a6.085 6.085 0 010-8.626L9.512 15zM25 28.03c.382 0 .764.148 1.06.445l6.768 6.767a1 1 0 000 .002A6.003 6.003 0 0037.07 37h1.418l-9.175 9.174a6.084 6.084 0 01-8.625 0L11.514 37h1.416a5.994 5.994 0 004.24-1.758l6.767-6.767c.298-.298.68-.446 1.063-.446z" />
                      </svg>

                      <CardHeader className="px-0">
                        <CardTitle className="text-base font-medium">
                          {item.title}
                        </CardTitle>

                        <CardDescription>
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-12">
              <CarouselPrevious
                className="text-secondary-red border-secondary-red top-[100%] left-4 hover:bg-secondary-red hover:text-white"
              />

              <CarouselNext
                className="text-secondary-red border-secondary-red top-[100%] right-0 left-16 hover:bg-secondary-red hover:text-white"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}