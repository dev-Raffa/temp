"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

export function InstitutionalNavigationMenu() {
  return (
    <NavigationMenu className="hidden lg:flex max-w-screen w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Para você</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#f5f5f6]">
            <ul className="h-80 w-[1200px] grid grid-cols-5 gap-6 py-8 px-16">
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Empréstimos
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Empréstimo Consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Antecipação do FGTS
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Portabilidade
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Servidores públicos: portabilidade de empréstimo consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Servidores públicos: Portabilidade de cartão consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      INSS: portabilidade de cartão consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      INSS: portabilidade de empréstimo consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Cartão
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Servidores públicos: cartão Consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Servidores públicos: Cartão Benefício
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      INSS: Cartão Consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      INSS: Cartão Benefício
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Refinanciamento
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Refinanciamento de empréstimo consignado
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Cartão Benefício
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Simuladores
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Simulador de portabilidade
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Simulador de empréstimo
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Simulador de cartão
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Para parceiros</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#f5f5f6]">
            <ul className="h-80 w-[1200px] grid py-8 px-16">
              <ListItem
                href="#"
                title="Ainda não é parceiro?"
                className="text-secondary-red"
              >
                <span className="text-black font-medium">
                  Seja parceiro
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Smart Consig</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#f5f5f6]">
            <ul className="h-80 w-[1200px] grid grid-cols-2 gap-6 py-8 px-16">
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Sobre
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Quem somos
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Segurança
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Trabalhe conosco
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="flex flex-col space-y-4">
                <div className="text-secondary-red text-sm font-medium">
                  Outros canais
                </div>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Smart blog
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Blog empréstimo
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Blog cartão
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-black text-xs font-medium">
                      Blog mercado
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
