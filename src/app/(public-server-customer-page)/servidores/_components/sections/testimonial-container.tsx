"use client"

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import { ChevronRightIcon } from "lucide-react";

interface CustomerAvatarProps {
  id: number;
  src: string;
  alt: string;
};

interface TestimonialCarouselProps {
  id: number;
  imgUrl: string;
}

const customersAvatars: CustomerAvatarProps[] = [
  {
    id: 1,
    src: "/cliente-1.jpg?height=40&width=40",
    alt: "Cliente 1",
  },
  {
    id: 2,
    src: "/cliente-2.jpg?height=40&width=40",
    alt: "Cliente 2",
  },
  {
    id: 3,
    src: "/cliente-3.jpg?height=40&width=40",
    alt: "Cliente 3",
  },
  {
    id: 4,
    src: "/cliente-4.jpg?height=40&width=40",
    alt: "Cliente 4",
  },
];

const testimonialCarousel: TestimonialCarouselProps[] = [
  {
    id: 1,
    imgUrl: "/available-1.png"
  },
  {
    id: 2,
    imgUrl: "/available-2.png"
  },
  {
    id: 3,
    imgUrl: "/available-3.png"
  },
  {
    id: 4,
    imgUrl: "/available-4.png"
  },
]

export function PublicServerCustomerTestimonialContainer() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="max-w-md mx-auto py-16 px-6 md:max-w-5xl md:w-full md:mx-auto">
      <div className="flex items-center mb-3 md:hidden">
        <div className="flex -space-x-2">
          {customersAvatars.map((item) => (
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <span className="ml-3 text-secondary-red text-sm font-medium">
          + de 55 mil clientes
        </span>
      </div>

      <div className="md:flex md:justify-between md:items-center">
        <h2 className="text-xl font-medium md:max-w-xs">
          Veja o que os clientes Smart pensam:
        </h2>

        <div className="hidden md:flex md:items-center">
          <div className="flex -space-x-2">
            {customersAvatars.map((item) => (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white" key={item.id}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <span className="ml-3 text-secondary-red text-sm font-medium">
            + de 55 mil clientes
          </span>
        </div>
      </div>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="md:hidden"
      >
        <div className="flex flex-col">
          <CarouselContent>
            {testimonialCarousel.map((item) => (
              <CarouselItem key={item.id}>
                <Image
                  width={600}
                  height={600}
                  src={item.imgUrl}
                  className="rounded-[48px]"
                  alt="Avaliações dos clientes da Smartconsig"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6">
            <CarouselPrevious
              className="text-secondary-red border-secondary-red top-[100%] left-4 hover:bg-secondary-red hover:text-white"
            />

            <CarouselNext
              className="text-secondary-red border-secondary-red top-[100%] right-0 left-16 hover:bg-secondary-red hover:text-white"
            />
          </div>
        </div>
      </Carousel>

      <p className="text-muted-foreground text-sm font-medium mt-12 mb-6 md:max-w-[640px] md:mt-4">
        Na Smart Consig, garantimos aos nossos clientes um processo com{" "}
        <span className="font-semibold">credibilidade</span>, <span className="font-semibold">segurança</span>,{" "}
        <span className="font-semibold">qualidade</span>, <span className="font-semibold">excelência</span> e um
        atendimento <span className="font-semibold">exclusivo</span> e <span className="font-semibold">pessoal</span>.
      </p>

      <Link
        href="#"
        className="flex items-center gap-0.5 text-xs text-secondary-red font-medium"
      >
        <span>Simular Crédito</span>
        <ChevronRightIcon className="size-4" />
      </Link>

      <Carousel className="hidden md:flex md:pt-2">
        <div className="flex flex-col">
          <CarouselContent>
            {testimonialCarousel.map((item) => (
              <CarouselItem className="basis-1/3" key={item.id}>
                <Image
                  width={600}
                  height={600}
                  src={item.imgUrl}
                  alt="Avaliações dos clientes da Smartconsig"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="pt-6">
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
  )
}
